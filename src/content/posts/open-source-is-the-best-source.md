---
title: Open source is the best source
date: 2026-10-27
summary: Many of the projects I found were above my level. I never looked for an issue to work on. I built things and contributed the bugs I found.
tags: [open source, learning]
draft: false
placeholder: false
---

A lot of open source projects are at a very high level, a level most developers
will never work at in their career. That is what I found almost immediately, and
as a beginner it made it hard to know where to start.

I had started exploring open source because I knew I had to level up. I wanted
to become a really good engineer, one who is useful and creates value.

## Finding a project in Django

I needed to learn Django, and there was not much open source in Django compared
to other frameworks and languages. Finding a project I could keep up with, and
that was also useful to me, took time.

## Getting it to run

Cloning a random repo and running it locally took time as well, mostly because
of dependency and version errors. Python errors from before I used multiple Python versions on
my laptop. Unsupported versions and deprecated packages. Sometimes two packages
each need a different version of the same thing.

That made me realise I should clone properly maintained repos instead of
fighting with repos that are not maintained or outdated.

## What I check before cloning

- Active repo
- Proper setup docs
- Contributions from other people
- Pinned dependencies or a lockfile

A well maintained repo is the one that saves the most time. The dependency
versions are already resolved and the documentation matches the code. You are
not spending your first evening repairing the project before you can start.

All of that is visible before you clone anything. Earlier I tried to recreate
projects that did not even run. That was a mistake.

## Reading the docs, and reading the source

I also used to read documentation thoroughly, and that is how I found some bugs.

But reading everything and trying every example is not the most efficient thing
to do. You forget things that you do not use regularly, and then you go back to
the docs anyway. So I read to learn what is there, and come back for a deep dive
when I need a detailed answer.

Reading LangChain's early docs, which were not mature, is when I realised that
reading source code is better than reading docs when you need to know exactly
what the code does. Most frameworks explain in docstrings what something does
and when to use it. But the docs are how you find out it exists at all.

## The first pull request that got merged

Reading documentation closely is how I found mistakes in it. Broken links, links
pointing at the wrong version, references to files that were not there, code
examples that no longer ran.

The first one was a missing colon in a code example in LangGraph's docs, the
same ecosystem whose documentation had pushed me into reading source in the
first place. I sent [the pull
request](https://github.com/langchain-ai/langgraph/pull/4142) and the
maintainers merged it the same day.

I remember telling a friend my name was in the contributors list. It was one
line of code, and it was the first time open source felt like something I could
actually do.

More went in after that, into
[DRF](https://github.com/encode/django-rest-framework/pull/9698),
[Django](https://github.com/django/django/pull/19697) and [Google's
ADK](https://github.com/google/adk-docs/pull/357) documentation.

## The path

From correcting typos in docs, to wrong examples, to raising issues, to solving
real issues in open source projects like
[Django-CRM](https://github.com/Django-CRM/Django-CRM). That has been my path on
open source contributions.

## I do not look for issues to work on

I have mostly seen people online advising you to find issues and work on them.
But I go looking myself, through GitHub topics, search with filters, or lists
like the Django projects in the docs. I look for projects I am curious about,
like agents or CRMs, or ones that look useful to me and within reach when I come
across them. Then I clone it, build and use it locally, and start working on one
feature at a time, breaking things down as small as they go. I contribute the
bugs I find while building.

Some of the projects in my portfolio were created this way, by recreating
projects I like in order to learn and explore.

I did not run into the problems people usually describe, like dead pull requests
or maintainers who never reply, because I only worked on maintained repos and I
was not waiting for anyone to assign me anything.

## Where it got me

Smaller projects first, recreating them. Then medium level open source projects.
Now I have the confidence and courage to take on even the high level projects I
was afraid of at the start and could not keep up with.

The open source community is a real source of inspiration, and it puts things
into perspective: how much there is still left to learn and work on.

If I had to pass on one thing, it would be this: practising and building
projects is what made me able to tackle real projects that solve real issues.
And open source is what made that possible. It is still the best source I
know.
