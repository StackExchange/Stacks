---
title: Using Stacks
description: A short guide to Stacks, a robust CSS & JavaScript Pattern library for rapidly building Stack Overflow.
updated: 2025-12-05
---

## Goals

Stacks is built with a unified goal: We should be writing _as little CSS & JavaScript as possible_. To achieve this goal, the Stacks team has created a robust set of reusable components. These include components like buttons, tables, and form elements.

We've also created a powerful set of atomic classes that can be chained together to create just about _any_ layout without writing a single line of _new_ CSS. Further, these atomic classes can be used as modifiers of pre-existing components.

## Installing

Stacks is currently included within various Stack Overflow projects automatically. If you're working on a Stack Overflow project, chances are it's already available for you! If not, reach out to us and we'll work on getting it set up.

To include Stacks in other projects, you can install Stacks via NPM: `npm install --save @stackoverflow/stacks`

You can also include a minified, compiled Stacks CSS style sheet that's delivered via Unpkg, a CDN for NPM packages. This is good for things like Codepen or other quick prototypes. This CDN should not be considered production-ready. `<link rel="stylesheet" href="https://unpkg.com/@stackoverflow/stacks/dist/css/stacks.min.css">`

To use Stack's built-in JavaScript interactivity with your components, refer to the [JavaScript guidelines](/system/develop/javascript/).

> **Warning**: If you're hotlinking to Stacks on the Stack Overflow CDN, **you are doing it wrong**. You are setting yourself up for breaking upstream changes. Instead, you should install via properly versioned package management like NPM. This will keep you pinned to a stable version.

## How to best use Stacks

In order to use Stacks, let's consider the design you'd like to implement.

1. **My design uses existing components**

    Identify if the design you're implementing uses any existing components. Great, it does? Grab the markup from that component's example page and paste that into your view.

2. **My design uses existing components, but has some special cases.**

    _E.g. background colors, border, and font sizes_. Awesome, copy the component's example markup to your view and add an atomic class to override its styling. Practically, this will likely just be adding something like a [`.mb12`](/system/base/spacing) to a button, or hiding something temporarily with [`.d-none`](/system/base/display).

3. **My design uses a new pattern that doesn't have a component yet.**

    No worries, let's build your view by assembling some atomic classes. If you're doing this more than once, you should help us identify a new pattern by [requesting a new component](https://github.com/StackExchange/Stacks/issues/new).

4. **My design is super special and…**

    I'm going to write a lot of custom CSS from scratch in its own `.less` file that I've included in the bundle. You _probably_ shouldn't be doing this. With atomic classes, you can build _most_ of what you're attempting to do without writing a single new line of CSS. The Stacks team would prefer you use these pre-existing classes to build new UI. Every line of CSS you write, the more CSS we have to maintain, the more our users have to download, and the more bytes we have to host.

## Getting help

Need help? Open [an issue](https://github.com/StackExchange/Stacks/issues/new). We'll be happy to help.
