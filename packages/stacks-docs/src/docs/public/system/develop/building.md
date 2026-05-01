---
title: Building Stacks
description: The following is a guide to building and running Stacks locally. You'll need to be able to build Stacks to contribute to our documentation or add new classes to our CSS library.
updated: 2025-12-05
---

## Clone the repo

There are two common ways to [clone a repo](https://help.github.com/articles/cloning-a-repository/):

- Use the command line: `git clone https://github.com/StackExchange/Stacks.git`
- Use GitHub's desktop app.
    1. Download and install [GitHub Desktop](https://desktop.github.com).
    2. Login with your GitHub credentials.
    3. Clone the Stacks repo.

## Get Node and NPM installed

We use a bunch of NPM dependencies to process and package up Stacks for delivery. You'll need to install them.

1. Install [Node & NPM](https://nodejs.org/en/download/)
2. Open the Stacks repo in a Terminal window.
3. Install the NPM dependencies. `npm install`

## Running Stacks

That should do it for all our dependencies. You're now able to run Stacks.

1. From the top level of the Stacks repo, run our main script `npm run start -w packages/stacks-docs`
2. Visit your local copy of Stacks at [`http://localhost:8080/`](http://localhost:8080/)

## Getting help

Installing dependencies can be frustrating, and we're here to help. If you're stuck, the Stacks team is always available in #stacks. If that doesn't work, try [opening an issue](https://github.com/StackExchange/Stacks/issues/new).
