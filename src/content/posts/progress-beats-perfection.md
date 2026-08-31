---
title: Progress beats perfection
date: 2026-07-28
summary: Why I would rather ship a clear increment and take the feedback than polish something nobody has used yet.
tags: [philosophy, process]
draft: false
placeholder: true
---

> Placeholder content. This post is a stub so the layout and typography can be
> checked before the real writing lands.

I have thrown away more carefully designed code than rough code. Not because
the design was wrong, but because it answered a question nobody turned out to
be asking.

## The version that taught me this

An early side project had a permissions system before it had users. Roles,
groups, per-object rules, the lot. It was genuinely well built. When the first
few people finally used the thing, every one of them wanted the same flat
access model, and the entire layer came out in a single commit.

The cost was not the wasted week. It was that for that week, I had no feedback
at all, because there was nothing anyone could try.

## What shipping an increment actually means

Not shipping something broken. It means finding the smallest version that is
genuinely usable and putting it in front of someone:

1. Pick the one thing the feature must do
2. Build that path properly, including the errors
3. Ship it and watch what happens
4. Let what you learn decide what comes next

Step four is the point. Everything before it is a guess.

## Where it does not apply

This is a bad rule for anything expensive to reverse. Database schemas,
public API shapes, authentication, anything touching money or personal data.
Those deserve the careful version first, because the feedback loop for getting
them wrong is measured in months.

The instinct I am still calibrating is telling those two categories apart
before I start, rather than halfway through.
