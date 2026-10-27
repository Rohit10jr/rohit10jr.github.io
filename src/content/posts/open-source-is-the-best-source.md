---
title: Open source is the best source
date: 2026-08-12
summary: Reading the source beats reading the docs, and contributing beats both. Notes on what open source has actually taught me.
tags: [open source, learning]
draft: false
placeholder: true
---

> Raw notes, not a draft. Recorded as given so nothing is lost, and still
> flagged `placeholder` — so it carries the in-progress badge and stays out of
> the RSS feed until it is written.

## Why I started

I initially started my exploration on open source because I knew I had to level
up to have a shot at becoming a really good engineer — one who can be useful and
create value.

## What I found almost immediately

There are a lot of open source projects at such a high level. A level at which
most developers will never work in their career.

## The first obstacle: nothing in my own stack

I did not find much in Django, the framework I needed to learn.

## The second obstacle: the level

Once I found the repos, another issue came up. The projects, as I mentioned,
were really high level — a level at which I knew I could not work or keep up as
a beginner.

## The third obstacle: just getting it to run

Sometimes it takes too much time for me to find a correct repo — one I can work
on or keep up with, and that also has some value for me.

Then I clone it and start running it locally. And initially this itself takes
too much time, because of various dependency and version errors.

I remember being stuck with different Python errors from the time when I did not
use multiple Pythons on my laptop. Or issues like unsupported versions and
deprecated packages. Sometimes two packages will each demand a different version
of the same thing to work.

Which made me realise: clone the properly maintained repos, instead of fighting
with repos that were not maintained properly.

## Reading the docs, and what reading them is for

Another thing I did was reading the docs thoroughly. Was it helpful? Well, that
is how I found some bugs.

But I would still say: reading everything and trying everything from the docs,
you will still forget after some time if you do not use them regularly — and
then you have to come back to the docs again anyway.

So from that point of view, I think reading to get what is *there*, instead of
trying everything out, is the better option.

## Where the source beat the docs

Sometimes reading docs like DRF's, or LangChain's initial docs — which were not
mature like other well-maintained docs — is when I realised that reading source
code is even better than reading docs.

Because for most frameworks I tried, they will add meta in the code explaining
what it does and when to use it.

But reading the docs is what helps you find out these exist in the first place.

## The first one that got merged

And by reading the docs I found some mistakes in the docs, which I made a PR for
and it got merged.

I still remember sharing it with my friend, telling him my name was in the
contributions list. It boosts your confidence.

<!--
  The record, for the draft. Not Rohit's words — verified merged PRs that match
  this account:
    django/django#19697                    corrected code examples in topics docs
    encode/django-rest-framework#9698      Django doc links to the stable version
    encode/django-rest-framework#9693      broken Heroku JSON Schema link
    google/adk-docs#357                    internal doc link on Output Key
    google/adk-docs#341                    incorrect main.py reference in a guide

  Worth noting for the draft: these are the fixes I argued should NOT get cards
  on the home page, because individually they are small. In the post they are
  the most important ones, because they are the way in. Small on a portfolio,
  pivotal in the story.
-->

## The path, in order

From contributing typos in docs, to updating wrong examples, to contributing to
real repos on real issues — that has been my path on open source contributions.

## The mistake I made first, and the filter I use now

I initially tried to recreate projects that do not even run. Which was a big
mistake.

Then I started only cloning the projects that had contributions, recent commits,
a stable main branch, and so on.

## Where that got me

And by doing smaller projects and recreating them, and then moving to medium
level open source projects, I now have the confidence to take on even high level
projects.

## How I find projects

I usually search for projects using GitHub search, or from GitHub topics, and
also from lists — like the Django projects listed in the docs.

But mostly I search for projects I am curious about — like agents, or CRM
projects. Or ones I think I can handle when I encounter them during a search,
like AgentSEO and NanoBot.

Both of those are open source projects I recreated. AgentSEO is not the
original repo name — that is my name for it.

<!--
  Answered, and it reaches past the post: the home page lists both under
  "Selected work" with descriptions of what the upstream projects do, which
  presents recreations as original work. Needs fixing, and the same question
  applies to the rest of the list — OpenCRM, Dataline, RAG Fusion and JobNext
  all carry descriptions that read like upstream projects too. Asked.

  Worth noting: recreating a project to understand it is the technique this
  post is about, so saying so on the cards is both more accurate and more
  interesting than implying they were originated.
-->

## Why none of the usual annoyances happened

The annoyances did not happen on contributions, because I contributed to active
or maintained repos.

And as I said — I just search for projects on GitHub and start working. As I
built, I contributed on the bugs I found.

<!--
  The strongest point in the notes, and it reframes everything above it. Almost
  all "how to get into open source" advice is about finding an issue to work on:
  good-first-issue labels, curated lists, waiting to be assigned something.
  Rohit never did that step. He built, and the bugs found him. Which is also why
  the stock complaints never applied — he was never queued behind anyone.

  It explains the six Django-CRM fixes without retelling them, too: all six are
  the kind of thing you hit while running a system, not the kind you find by
  reading a tracker.
-->

## The lesson

Practising and building projects is how you build confidence. And the courage to
tackle real projects that solve real issues is itself an important learning.

## This site is the example

And this site is itself an example. It was created by combining ideas from a few
open source codebases, with my own ideas sprinkled on them.

<!--
  True, and checkable: the navbar, resume gate and posts index came from
  Cheng's site; the About structure, GitHub activity block and dashed underline
  from Peter's; the home page structure and type scale from Rahul Jain's. The
  rocket, the gated resume's in-app decryption, the 404 trajectory and the RSS
  pipeline are Rohit's.
-->

## Notes are complete

Nothing outstanding. The arc runs end to end:

needed to level up, everything was above my level, nothing in Django, half would
not run, docs tell you what exists and the source tells you what it does, bad
docs taught me that, a documentation fix merged and my name in the contributors
list, typos then wrong examples then real issues, recent commits and visible
contributions and a stable main branch, recreating smaller projects, and the
confidence for high level ones.

The spine of it: I never looked for an issue to work on. I built, and the bugs
found me.

Two things settled along the way — the summary line should say docs tell you
what exists while the source tells you what it does, rather than one beating the
other; and AgentSEO and NanoBot are open source projects I recreated, which the
home page cards do not currently say.
