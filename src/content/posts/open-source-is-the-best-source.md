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

## Still to record

- The summary line. The notes now answer it: docs tell you what exists, the
  source tells you what it does and when to use it. Not one beating the other
- Whether AgentSEO and NanoBot are mine or projects I found and rebuilt. Still
  open; it decides how the home page cards should read
- How I found Django-CRM specifically, and whether it passed the filter
- The remaining annoyances — labels, dead pull requests, maintainers who
  never reply

The arc is now complete end to end: needed to level up, everything was above my
level, nothing in my stack, half would not run, docs for what exists and source
for what it does, a documentation fix merged, and the ladder from small projects
to the confidence for high level ones. What is missing is detail inside it, not
shape.
