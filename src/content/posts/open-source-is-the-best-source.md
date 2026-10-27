---
title: Open source is the best source
date: 2026-10-27
summary: Reading the source beats reading the docs, and contributing beats both. Six fixes in a Django CRM, and what each one taught me about where bugs actually live.
tags: [open source, learning]
draft: false
placeholder: false
---

A liveness probe was returning 403.

Not 500, not a timeout. A plain refusal, from an endpoint whose entire job is
to answer "am I alive?" to a load balancer that is not logged in, does not
belong to a tenant, and has no business proving either. The middleware guarding
multi-tenant row-level security rejected any resolvable path with no
organisation context unless that path was on an exemption list. `/healthz/` was
not on the list. So every uptime monitor pointed at it read the service as
down.

That is the sort of thing you do not learn from documentation. Documentation
tells you how a feature is meant to work. It is written by someone who already
understands the system, for someone who does not, and the gap between those two
people is exactly where the interesting failures live.

## Reading beats reading about

I had used Django REST Framework for a long time before I read much of it. Using
a framework teaches you its surface. Reading it teaches you its decisions — why
a thing is done one way when another way looks obviously simpler, and what
breaks when you take the simpler route.

But contributing teaches you something neither of those does: what the code is
actually like to be wrong about. You cannot submit a patch to a codebase you
have only skimmed. You have to hold enough of it in your head to be confident
that your one-line change does not break something three layers away. That is a
different kind of knowing.

Over a few weeks I had six fixes merged into
[Django-CRM](https://github.com/Django-CRM/Django-CRM), a self-hosted
multi-tenant CRM on Django REST Framework. None of them were features. All of
them were things that were quietly wrong.

## The bugs clustered

What surprised me was not that a mature project had bugs. It was how much they
had in common. Nearly every one sat at a **seam** — a point where two layers
meet and each one assumes something slightly different about the other.

**A `Profile` compared to a `User`.** The kanban board's move endpoint checked
whether you owned the deal you were dragging:

```python
is_owner = request.profile == opportunity.created_by
```

`request.profile` is a `Profile`. `created_by` is a foreign key to `User`. Those
are never equal, so `is_owner` was permanently `False`, and a non-admin who had
created a deal but was not also assigned to it got 403 moving their own card.
The fix was comparing ids instead
([#747](https://github.com/Django-CRM/Django-CRM/pull/747)) — one line, and the
pattern was already used correctly elsewhere in the same file.

**A date compared to a datetime.** The accounts list parsed
`created_at__lte=2026-01-01` into a *date*, then filtered a *datetime* column
with it. So the upper bound compared against midnight and silently dropped
everything that happened later that day. Ask for accounts created up to the
first of January and you do not get the first of January
([#754](https://github.com/Django-CRM/Django-CRM/pull/754)).

**A database constraint meeting a view that did not know about it.** `Invoice`
and `Estimate` reference `Account` with `on_delete=PROTECT`. The delete view
called `.delete()` unguarded. So deleting an account with any invoice against it
raised `ProtectedError`, which escaped as an unhandled 500 — a server error for
something that is not an error at all, just a refusal. It should be a 409, with
a message saying why ([#755](https://github.com/Django-CRM/Django-CRM/pull/755)).

**An exception escaping as the wrong status.** Posting a comment to a lead that
does not exist used `.get()`, so `DoesNotExist` became a 500 instead of a 404
([#751](https://github.com/Django-CRM/Django-CRM/pull/751)). Scoping the lookup
to the caller's organisation fixed something else by accident: a cross-org id had
been returning 403, which confirms the record exists. Now it returns 404, which
does not.

And one that was simply missing: a list serializer that omitted `id`, so clients
had no way to identify the row they wanted to edit
([#750](https://github.com/Django-CRM/Django-CRM/pull/750)).

## The diff is not the work

Those six changes add up to roughly twenty lines. Four of them are one or two
lines each. If you judged the contribution by the size of the patch you would
conclude almost nothing happened.

Finding them was the work. Knowing that `request.profile` is not a `User`
requires having read enough of the auth layer to know what it is. Knowing that
`__lte` on a datetime column behaves differently from `__date__lte` requires
having been burned by it. Knowing that an unhandled `ProtectedError` is a 500
rather than a 409 requires knowing both that `PROTECT` exists on that
relationship and what the HTTP status is supposed to mean.

Every one of those is something I learned by reading code I did not write.

## It is a conversation

The last fix came with a question. While exempting `/healthz/` I found two other
endpoints hitting the same 403 that looked like they were meant to be reachable
without organisation context — an inbound-email webhook called by an external
provider, and a public lead-capture form submitted by anonymous visitors. Both
plausibly belong on the exemption list. Neither was mine to decide.

So I asked, in the pull request, and offered to do either. That turned out to be
the more useful part. A patch says "here is a thing I changed". A question says
"here is a thing I do not understand about your system, and I have looked hard
enough to ask precisely". Maintainers have limited attention, and the second one
respects it more.

## What I would tell myself a year ago

Pick a project you already use. Not a famous one — one where you have personally
been confused by something. Read the file that confused you. Not the docs for
it, the file.

You will find something wrong. Not because the maintainers are careless, but
because every codebase of any size has seams, and seams are where assumptions go
to disagree quietly. Fix one. Keep the diff small and the explanation long.

The reading is the point. The patch is just the proof that you did it.
