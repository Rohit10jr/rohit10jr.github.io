---
title: Open source is the best source
date: 2026-10-27
summary: Everything I found was above my level, and half of it would not even run. How I got from there to merged fixes, without once picking an issue off a tracker.
tags: [open source, learning]
draft: false
placeholder: true
---

**TL;DR**: I never went looking for an issue to work on. I built things, ran
into bugs, and fixed those. The labels, the curated beginner lists, the waiting
to be assigned something — I skipped all of it, and I think that is why none of
the usual frustrations ever reached me.

I started looking at open source because I knew I had to level up. Not vaguely.
I wanted a shot at becoming a really good engineer, one who is useful and
creates value, and I could not see how more tutorials got me there.

What I found almost immediately is that a lot of open source sits at a level
most developers will never work at in their career. That is a disorienting thing
to learn when you are looking for somewhere to begin. The projects were
excellent. I was a beginner.

## Nothing in the framework I actually needed

The first problem was narrower than I expected. There is an enormous amount of
open source. There was not much of it in Django, which was the framework I
needed to learn.

So the search took far longer than it should have — not just finding a project,
but finding one I could keep up with *and* that was worth something to me. Those
two conditions remove most of the list.

## Half of them would not even run

Then came the part nobody warns you about. I would clone a repo and try to run
it locally, and that alone would eat the evening.

Dependency and version errors, mostly. I was stuck on Python errors from the
days before I kept multiple Pythons on my laptop. Unsupported versions.
Deprecated packages. And the one that still annoys me: two packages that each
insist on a different version of the same thing, both of them right, neither of
them going to budge.

At some point it stopped feeling like my problem to solve. If a project fights
you for two hours before it will start, that is information. It is telling you
how closely it is looked after.

So I stopped. Clone the properly maintained repos, I decided, instead of
fighting the ones that are not.

## What I check before cloning now

Three things, all visible on the repo page before you clone anything:

- **Recent commits.** Not stars. Stars are historical.
- **Visible contributions.** Other people are getting changes in.
- **A stable main branch.**

I arrived at that list the expensive way. Before it, I tried to recreate
projects that did not even run. That was a big mistake, and it cost me time I
could have spent on something that worked.

## Docs tell you what exists. The source tells you what it does.

I also read documentation properly — all the way through, not searching for the
one function I needed. Was that useful? It is how I found some bugs, so yes.

But I would not recommend reading everything *and* trying everything. You will
forget it if you do not use it regularly, and then you are back in the docs
anyway. So the trying was wasted and the reading was not. Read to learn what is
*there*. Come back for the detail when you need it.

Where the source overtook the docs for me was reading DRF, and LangChain's early
documentation, which was not mature the way well-maintained docs are. With gaps
like that you have no choice but to open the code — and once I did, I found the
explanation had been sitting there the whole time. Most frameworks write it in:
what a thing does, and when you should use it.

Which is the real division of labour. The docs tell you something exists. The
source tells you what it does. I needed both, and I only learned the second half
because the first half let me down.

## The first one that got merged

And reading documentation that closely is how I found mistakes *in* the
documentation. Wrong examples, broken links, references to files that were not
there. I sent a pull request. It got merged.

Those fixes went into [Django's own
docs](https://github.com/django/django/pull/19697),
[DRF](https://github.com/encode/django-rest-framework/pull/9698), and [Google's
ADK docs](https://github.com/google/adk-docs/pull/357). Tiny changes, all of
them.

I still remember sending it to a friend — look, my name is in the contributors
list. That sounds like a small thing to be pleased about, and it is. It also
changed what I thought I was allowed to attempt next, which is not small at all.

## Typos, then wrong examples, then real issues

That is the whole path, and the middle rung is the one people skip.

A typo needs no understanding of anything. A *wrong example* is different: you
ran it, it did not do what the page claimed, and you had to work out which one
was lying — the code or the prose. That is debugging. By the time I moved on to
real issues in real repos, like the fixes I have merged into
[Django-CRM](https://github.com/Django-CRM/Django-CRM), I had already been doing
the work for a while under a smaller title.

## I never looked for an issue to work on

This is the part that surprised me most, looking back.

Almost every guide to getting into open source is about finding an issue.
Good-first-issue labels. Curated lists for newcomers. Commenting on a thread and
waiting for a maintainer to hand it to you.

I did not do any of that. I search GitHub for projects I am actually curious
about — agents, CRMs — or ones that look within reach when I come across them.
GitHub topics, sometimes a list like the Django projects in the docs. Then I
clone it and start working. And as I built, I contributed the bugs I ran into.

Two of the projects on this site, AgentSEO and NanoBot, are open source projects
I recreated that way. AgentSEO is not even the original name — that is just what
I called my version.

It is also why none of the standard complaints ever applied to me. Dead pull
requests, maintainers who never reply, issues that sit for a year — those are
symptoms of *queueing*. I was never in a queue. I was building something, it
broke, and the fix went upstream.

## Where it got me

Smaller projects first. Recreating them, not just reading them — there is a
difference, and the difference is where the learning is. Then medium-level open
source. And now the high-level ones, the projects I opened at the start of this
and knew I could not keep up with, no longer look closed to me.

Same projects. Different person.

## This site is the example

The thing you are reading this on was built the same way: ideas taken from a few
open source codebases, with my own sprinkled on top. I did not invent its
structure. I read other people's, and worked out what I wanted.

Practising and building is how the confidence gets built. But the thing I would
actually take from all of it is this: find the courage to tackle real projects
that solve real issues. Not exercises, and not whichever repo looks most
impressive from the outside. Something genuinely used, and genuinely broken in
places.

That is where the bugs are. And the bugs are the way in.
