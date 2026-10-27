---
title: Open source is the best source
date: 2026-10-27
summary: Everything I found was above my level and half of it would not run. How I got from there to merged fixes, without looking for issues to work on.
tags: [open source, learning]
draft: false
placeholder: true
---

I started exploring open source because I knew I had to level up. I wanted to
become a really good engineer, one who is useful and creates value.

What I found almost immediately is that a lot of open source projects are at a
very high level, a level most developers will never work at in their career. As
a beginner that made it hard to know where to start.

## Finding a project in Django

I needed to learn Django, and there was not much open source in Django compared
to other frameworks and languages. Finding a project I could keep up with, and
that was also useful to me, took a long time.

## Getting it to run

Cloning a random repo and running it locally took a long time too. Mostly dependency
and version errors. Python errors from before I used multiple Python versions on
my laptop. Unsupported versions and deprecated packages. Sometimes two packages
each need a different version of the same thing.

That made me realise I should clone properly maintained repos instead of
fighting with repos that are not maintained or outdated.

## What I check before cloning

- Recent commits
- Contributions from other people
- A working main branch
- Pinned dependencies or a lockfile

The lockfile is the one that saves the most time. It means someone has already
resolved the version conflicts and committed the answer, so you get the same
install they have.

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

Reading documentation closely is how I found mistakes in it. I have found typos,
outdated links and dead examples across various documentation. I sent a pull
request to DRF and the maintainers merged it.

I remember telling a friend my name was in the contributors list. It boosts your
confidence.

## The path

From correcting typos in docs, to wrong examples, to raising issues, to solving
real issues in open source projects like
[Django-CRM](https://github.com/Django-CRM/Django-CRM). That has been my path on
open source contributions.

## I do not look for issues to work on

I have mostly seen people online advising you to find issues and work on them.
But I search GitHub for projects I am curious about, like building autonomous
agents or CRMs, or ones I think I can handle when I come across them. Sometimes
I use GitHub topics, search with filters, or lists like the Django projects in
the docs. Then I clone it, build and use it locally, and start working. I
contribute the bugs I find while building.

Some of the projects in my portfolio were created this way, by recreating
projects I like in order to learn and explore.

I did not run into the problems people usually describe, like dead pull requests
or maintainers who never reply, because I only worked on maintained repos and I
was not waiting for anyone to assign me anything.

## Where it got me

Smaller projects first, recreating them. Then medium level open source projects.
Now I have the confidence and courage to take on even the high level projects I
could not keep up with, and was afraid of, at the start.

This site is an example of that. It combines ideas from a few open source
codebases with my own ideas on them.

The open source community is truly a great source of inspiration, and it also
puts things into perspective: how much there is still left to learn, work on and
progress through.

Practising and building projects is how you build confidence, and the courage to
tackle real projects that solve real issues is an important learning.
