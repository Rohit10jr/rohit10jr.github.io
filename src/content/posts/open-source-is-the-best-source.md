---
title: Open source is the best source
date: 2026-08-12
summary: Reading the source beats reading the docs, and contributing beats both. Notes on what open source has actually taught me.
tags: [open source, learning]
draft: false
placeholder: true
---

> Placeholder content. This post is a stub so the layout and typography can be
> checked before the real writing lands.

Documentation tells you what a library is supposed to do. The source tells you
what it actually does. Most of the time those agree, and the interesting work
starts where they do not.

## Reading before asking

The first real Django bug I chased was not in my code. A queryset was returning
duplicates and every answer I found online suggested `.distinct()` without
explaining why. Opening the ORM source made the reason obvious in about ten
minutes: the join was fanning out rows before the slice was applied.

That habit has been worth more than any tutorial. When something behaves oddly:

- Find the function actually being called, not the one you assume is called
- Read its immediate neighbours, not the whole file
- Check the tests next to it, which usually document the edge cases
- Only then search for someone else's explanation

## Contributing is the fastest way to learn a codebase

Fixing a typo in documentation sounds trivial, but it forces you through the
whole loop: fork, branch, local build, style checks, review. The next
contribution is much cheaper because that scaffolding is already understood.

```python
# The change that taught me the most was three lines long.
def get_queryset(self):
    return super().get_queryset().select_related("account")
```

Small patches also get reviewed properly. A maintainer will explain why a
convention exists, and that explanation is worth more than the patch.

## What I am still working out

Reading source is slow, and there is a real risk of disappearing into a library
for a whole afternoon when the pragmatic answer was to work around it and move
on. I have not found a clean rule for when to stop digging.
