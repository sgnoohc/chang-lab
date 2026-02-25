---
title: "AI analysis on AI impact on hep-th publications."
date: 2026-02-25
description: "Using Claude Code to investigate whether arXiv hep-th submissions really doubled in late 2025."
author: "Philip Chang"
draft: false
---

Jerry Ling shared me a link to a post on Not Even Wrong:
[Looks Like it is Happening…](https://www.math.columbia.edu/~woit/wordpress/?p=15500).
Woit noted that arXiv hep-th submissions seem to have roughly doubled around December 2025.
December 2024 had 780 submissions, December 2025 had 1192.
He was speculating about AI-generated papers and I wanted to check.

I've been using Claude Code a lot these days. And he said that more analysis could be done with AI, so I did.
I asked it to verify Woit's numbers and in just a few minutes it confirmed them. (One month was off by 2, 686 vs 684, probably a typo.)

But I noticed there were a different search option.
So I asked it to re-run the same searches but with "Submission date (original)" instead of "Submission date (most recent)".
Woit used the default, "most recent", which counts a paper based on when its latest version was uploaded.
But this means if someone revises a 2020 paper in December 2025, it shows up as a December 2025 submission.

With this change, the "doubling" largely goes away!

I then asked it for essentially two more prompts; do the study as far as back as 2018, and do it for hep-ex, hep-ph, and cs.AI.
It did all of those and made a nice summary of the entire analysis in just about 10 minutes.

It's scary what these AI can do these days.

Data, scripts, and plots: [sgnoohc/arxiv-submission-analysis](https://github.com/sgnoohc/arxiv-submission-analysis).
