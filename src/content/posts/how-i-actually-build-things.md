---
title: How I actually build things
date: 2026-07-09
summary: The loop I fall into on most projects, the tools that survived, and the parts that are still messy.
tags: [workflow, tools]
draft: false
placeholder: true
---

> Placeholder content. This post is a stub so the layout and typography can be
> checked before the real writing lands.

Most of my projects start the same way: something annoys me, I assume there is
a tool for it, and the tool is either missing or heavier than the problem.

## The loop

It is rarely tidy, but it usually looks like this:

1. Write down what the thing should do in plain sentences
2. Sketch the data model before any code, because everything else follows it
3. Build the narrowest end-to-end path, ugly but complete
4. Use it myself for a few days
5. Rewrite whichever part annoyed me most

Step three matters most. An ugly path that runs end to end tells me more than a
beautiful half that cannot be exercised.

## Tools that stuck

- **Django and DRF** for anything with real relational data
- **FastAPI** when the job is a handful of endpoints
- **PostgreSQL** by default, with `psql` open in a second terminal
- **Redis** for background work as soon as a request starts feeling slow
- **Docker Compose** so a fresh machine is one command away

```bash
# The first thing I add to almost every project.
docker compose up -d db redis
```

## The messy parts

Testing is where I am least consistent. I write tests for anything involving
money, permissions or data migrations, and I am honest that the rest gets
covered later than it should.

I also start too many projects. Building is how I understand things, so the
half-finished ones are not entirely wasted, but the ratio could be better.
