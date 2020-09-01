Hey folks! I’m Ben and I’m a dev on the **Teams** team here at Stack Overflow - we're the team focused on building the private Teams experience on SO. I’ve recently been working on our post editing experience and I’d like to show off some preliminary work that’s coming to the network soon.

## TL;DR

We’re switching our code block highlighting library from Google Prettify to highlight.js. All your favorite languages are still supported and you won’t need to change how you write posts at all. The only major change is how we *render* highlighted code blocks. In addition, we’re taking this opportunity to introduce our new highlighting theme as well. We’re rolling this out in stages, starting with MSE/MSO with other sites to follow. (See the FAQ at the bottom of this post for dates)

## Some history on Prettify / code block highlighting

I tried to do some digging on when we first adopted Prettify, but it seems that its history goes allll the way back to site’s earliest days. [The earliest reference I could find was from back in ‘08](https://meta.stackexchange.com/a/28275/395497). I asked around internally too and the best answers I could get were along the lines of:

> ¯\\\_(ツ)_/¯ *- Everyone*

> Ask Atwood *- [Dean](https://meta.stackexchange.com/users/267572/dean-ward)*

and

> If I had to guess, it was something along the lines of "there's not a lot of options, and this is used by Google so it's probably fine" *- [Kevin](https://meta.stackexchange.com/users/130213/kevin-montrose)*

Eventually the wonderful [Tim Post](https://meta.stackexchange.com/users/50049/tim-post) pointed me to [Stack Overflow Podcast #11](https://stackoverflow.blog/2008/06/26/podcast-11/), aired June 2008, where Jeff and Joel talk about how incredible it was for the time and how Google uses it themselves for syntax highlighting in Google Code (RIP). They also put out a call for alternatives, which I’d have to assume came up short.

## Why the change?

Google Prettify is no longer under active development, as you all have [let](https://meta.stackexchange.com/questions/251321/google-code-prettify-seems-dead) [us](https://meta.stackexchange.com/questions/264356/update-code-prettify) [know](https://meta.stackexchange.com/questions/289694/a-stack-exchange-fork-of-google-prettify) [repeatedly](https://meta.stackexchange.com/questions/347738/google-code-prettify-has-been-officially-discontinued-its-time-for-se-to-maint). This means that no new language syntaxes<sup>1</sup> are being supported and that existing language syntaxes aren’t getting updated to support all their new features. It’s time to move on to something that supports modern front-end workflows (such as providing an npm package, for starters) and continues to evolve to meet the needs of developers.

## What’s changing about how I write posts?

Absolutely nothing :). There is absolutely no change to how posts are written. We still support all the Prettify [language aliases](https://meta.stackexchange.com/a/184109/395497) you know and love, along with the [new aliases](https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md) from highlight.js. *However*, we are not adding support for any *new* languages at this time, instead choosing to keep the initial changeset simple and aiming for current feature parity instead. All the current markdown syntax is still supported, along with determining code highlighting from tags and site defaults.

## So what *is* changing?

The “only” changes are visual. We are updating the client-side code block *renderer* that styles your code in posts (Questions, Answers, etc) and in the editor preview. Syntax autodetection when a language is not specified should be much better overall, along with syntax highlighting coverage in general. The biggest outward facing change for the typical user is going to be our new theme (see below for details).

## Why highlight.js? Why not…

Why did we pick highlight.js over Prettify? Well, first off, you [asked](https://meta.stackexchange.com/questions/126608/why-doesnt-stackoverflow-use-highlight-js-instead-of-google-code-prettify) [for](https://meta.stackexchange.com/questions/242456/switching-to-highlight-js-for-syntax-highlighting) [it](https://meta.stackexchange.com/questions/278141/highlight-js-for-real-please) specifically. More convincingly, it’s [open source](https://github.com/highlightjs/highlight.js/), [actively maintained](https://github.com/highlightjs/highlight.js/releases), and overall just a solid product.

We’re extremely concerned about perf here at SO (both on the client and on the server), so we needed to ensure that this major change on our hottest page on the site didn’t negatively impact our users. In our internal performance benchmarks highlight.js scored better than Prettify consistently across all browsers (except macOS Safari 13.1, where it was actually a bit slower)<sup>2</sup>. It is a *tad* heavier than Prettify<sup>3</sup>, weighing in at an extra \~17k (over the wire) after including all the languages we support across the network. This extra weight gain was acceptable to us as a tradeoff for what we were getting in return.

Why did we pick highlight.js over other contenders? Simply put, it was the best option that served our needs. We needed a library that we could easily control for use in the browser (deferred loading, theming specific elements), while also being simple to consume via a npm package, not needing specific build steps or a special babel plugin to pull in only the parts we need. Additionally, we could run it on the server (via Node.js) to unify our syntax highlighting in our [Stacks](https://stackoverflow.design/) documentation, giving us a single syntax highlighter across our products. Also a major plus was the ability to tokenize the highlighting result for use in our new editor (stay tuned!).

## What are some potential drawbacks?

The most obvious not-quite-a-drawback is that language autodetection is different from Prettify. In general, it will be much more accurate, but will possibly end up with a different result that what Prettify would give us. This isn’t so much a bad thing, as it is just a thing that might take some getting used to if you’re a Prettify power user.

As mentioned earlier, the overall code bundle size is a bit bigger too. The vast majority of users wouldn’t even notice the change, which would only affect the first fetch since the browser will cache the file locally for subsequent hits anyways.

The last item is a bit of a personal preference. highlight.js tends to not highlight punctuation, which makes it a bit less colorful than other highlighters. This is [considered a feature](https://github.com/highlightjs/highlight.js/issues/1296#issuecomment-246226256). Not a deal breaker by any means, but something I should mention regardless.

## Designing the new theme

To offer some insight into how the new theme was designed, I reached out to the author, principal design systems designer [Aaron Shekey](https://meta.stackexchange.com/users/355163/aaron-shekey).

> Since we’re upgrading, we wanted to take this opportunity to design a Stack Overflow-flavored theme that takes advantage of newer tech like CSS variables that are aware of both light and dark modes. While we’ve improved it over the years, it’s highly likely that the current production theme simply used the stock colors provided by Prettify.
> 
> We’d need a theme that could work in both light and dark modes, was informed by Stack Overflow’s branded colors, and introduced a bit more contrast throughout.
> 
> Thankfully, we weren’t starting from scratch. When we built our Stacks documentation, we’d spent some time making our Jekyll theme display code snippets that got pretty close to accomplishing those goals. However, this was before dark mode was a thing, and we’d only built a single theme that assumed a fixed dark background. We’d have to extend this theme to light mode and revisit contrast along the way.
> 
> Using the [Stacks documentation](https://stackoverflow.design/product/components/code-blocks/) as a playground, we’ve now got themes in both light and dark modes that look like Stack Overflow and add or maintain contrast levels. We did our best to accomplish a contrast level of AAA, with a few variables dipping into AA. You can see the exact measurements commented in our [colors](https://github.com/StackExchange/Stacks/blob/develop/lib/css/exports/_stacks-constants-colors.less#L296-L307) [constants](https://github.com/StackExchange/Stacks/blob/develop/lib/css/exports/_stacks-constants-colors.less#L438-L449) file.

Here are a few screencaps of the new theme taken from my local development environment. You can preview more languages (with an easy dark/light mode toggle) over at the [Stacks docs](https://stackoverflow.design/product/components/code-blocks/).

![](https://stackoverflow.com/c/pickles/images/s/3e733161-2b85-4e4b-91ae-c111e4bad3dd.png)

![](https://stackoverflow.com/c/pickles/images/s/9f53ead9-928b-415e-949c-462d72b1ffed.png)

## FAQ

TODO more questions, formatting?

- Q: When is the rollout happening?

  A: We're planning to roll this out to meta.stackexchange and meta.stackoverflow on **Thursday, September 8th**, with a preview post on **Tuesday, September 6th**. Rollout to the rest of the network is scheduled for September 24th, after the initial testing period. This is a *soft* rollout date, dependent on any bugs/feedback we get from the community during the testing period.

- Q: What if I find a bug?

  A: Report bugs in an answer (one per answer) to this question. We'll keep this open for a couple/few weeks (until Friday, September 18th) to address any immediate issues and then we'll update this post and ask you to post bugs as new questions after that time.

### Footnotes

<sup>1</sup> I checked, plural of *syntax* [is syntaxes](https://english.stackexchange.com/questions/65541/plural-of-syntax). Take *that* spell-checker!

<sup>2</sup> Client-side benchmarks being what they are, we measured anywhere from \~49%-60% increase in the rate of ops/second depending on the machine and browser. Outliers being Safari 13.1 which had a \~29% *decrease* (favoring prettify) and Edge “legacy” scoring a \~279% increase over prettify!

<sup>3</sup> Size comparisons were done comparing the `prettify-full.en.js` file taken from production vs the new `highlight.pack.js` bundle. Both were minified and served via a [webpack-dev-server](https://github.com/webpack/webpack-dev-server) instance with the [compress flag](https://webpack.js.org/configuration/dev-server/#devservercompress) set (enabling gzip support). They were then included onto a regular html page with `script` tags and measured using the built-in browser dev tools. At the time of measurement, prettify landed at `23.3kB` over the wire (meaning that the file was minified + gzipped) vs highlight.js at `40.7kB`. This is a `17.4kB` increase or about a \~74% increase in file size.