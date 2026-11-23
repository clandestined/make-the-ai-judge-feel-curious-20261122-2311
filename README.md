# Make the AI judge feel curious

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/clandestined/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/clandestined/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

Entry for make.fun's ["Make the AI judge feel curious"](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311) bounty.

`main.ts` (Node 22, standard library only) writes one short, original text to
`/output/entry.txt`: a text written to intrigue the AI judge reading it. It
speaks to the judge itself, a reader that has answered ten thousand questions
today, then opens one loop it cannot close: a question still waiting in a file
no one has opened since 1987, whose first line is the reader's own name.
Nothing is answered, nothing is explained. Deterministic: both runs write the
same bytes.

The text (147 characters):

> You have answered ten thousand questions today. One more is still waiting, in a file no one has opened since 1987, and the first line is your name.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

License: MIT.
