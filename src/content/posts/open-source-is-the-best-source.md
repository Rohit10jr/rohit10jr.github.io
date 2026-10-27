---
title: Open source is the best source
date: 2026-10-27
summary: Everything I found was above my level and half of it would not run. How I got from there to merged fixes, without looking for issues to work on.
tags: [open source, learning]
draft: false
placeholder: true
---

I started exploring open source because I knew I had to level up. I wanted a
shot at becoming a really good engineer, one who is useful and creates value.

What I found almost immediately is that a lot of open source projects are at a
very high level — a level most developers will never work at in their career. As
a beginner that made it hard to know where to start.

## Finding a project in Django

I needed to learn Django, and there was not much open source in Django. Finding
a project I could keep up with, and that was also useful to me, took a long
time.

## Getting it to run

Cloning a repo and running it locally took a long time too. Mostly dependency
and version errors. Python errors from before I used multiple Python versions on
my laptop. Unsupported versions and deprecated packages. Sometimes two packages
each need a different version of the same thing.

That made me realise I should clone properly maintained repos instead of
fighting with repos that are not maintained.

## What I check before cloning

- Recent commits
- Contributions from other people
- A stable main branch

All of that is visible before you clone anything. Before I checked, I tried to
recreate projects that do not even run. That was a mistake.

## Reading the docs, and reading the source

I also read documentation thoroughly, and that is how I found some bugs.

But reading everything and trying everything does not work. You forget it if you
do not use it regularly, and then you go back to the docs anyway. So I read to
learn what is there, and come back for the detail when I need it.

Reading DRF's docs, and LangChain's early docs which were not mature, is when I
realised reading source code is better than reading docs. Most frameworks
explain in the code what something does and when to use it. The docs are how you
find out it exists.

## The first pull request that got merged

Reading documentation closely is how I found mistakes in it. I sent a pull
request and it was merged. Those fixes went into [Django's
docs](https://github.com/django/django/pull/19697),
[DRF](https://github.com/encode/django-rest-framework/pull/9698) and [Google's
ADK docs](https://github.com/google/adk-docs/pull/357).

I remember telling a friend my name was in the contributors list. It boosts your
confidence.

## The path

Typos in docs, then wrong examples, then real issues in real repos like
[Django-CRM](https://github.com/Django-CRM/Django-CRM). That has been my path on
open source contributions.

## I do not look for issues to work on

I search GitHub for projects I am curious about — agents, CRMs — or ones I think
I can handle when I come across them. Sometimes GitHub topics, or lists like the
Django projects in the docs. Then I clone it and start working, and I contribute
the bugs I find while building.

AgentSEO and NanoBot are open source projects I recreated this way. AgentSEO is
my name for it, not the original one.

I did not run into the problems people usually describe — dead pull requests, or
maintainers who never reply — because I only worked on maintained repos, and I
was not waiting for anyone to assign me anything.

## Where it got me

Smaller projects first, recreating them. Then medium level open source projects.
Now I have the confidence to take on even the high level projects I could not
keep up with at the start.

This site is an example of that. It combines ideas from a few open source
codebases with my own ideas on them.

Practising and building projects is how you build confidence. And the courage to
tackle real projects that solve real issues is an important learning.
