# Stacks

You’re looking at Stack Overflow’s CSS and Design Pattern Library. This library is in its early stages, but will eventually replace Stack Overflow’s CSS as we near our version 1. To see our progress and milestones, check out our [ongoing projects](https://gh.stackoverflow.com/Design/Stacks/projects).

### Contributing

Stacks is built using [Jekyll](https://jekyllrb.com) and [Grunt](https://gruntjs.com/getting-started). The source files at this repo get mirrored and served from GitHub pages at a [private Repo on GitHub.com](https://github.com/StackExchange/Stacks/). Once changes are committed, approved, and merged into `master` here, the changes are synced to our [private repo](https://github.com/StackExchange/Stacks/) and automatically rebuilt. The website can be viewed at https://stackoverflow.design

To contribute, clone this repository and create a new branch. Open a pull request with your rationale and the team will review your code. Feel free to open pull requests way earlier than you feel comfortable. :sunglasses:

### Running Stacks

Open this repo in your Terminal and type `grunt`.

This will start your Jekyll server and watch for any changes you make. You can now visit the site locally at http://127.0.0.1:4000/

You’ve got errors, you likely need to install [Jekyll](https://jekyllrb.com/) or [Grunt](https://gruntjs.com/getting-started).

### Installing Jekyll

To get started with running Jekyll locally, follow the ["Getting Started"](https://gh.stackoverflow.com/Design/SiteStarterPack#getting-started) instructions from the [**Design/SiteStarterPack**](https://gh.stackoverflow.com/Design/SiteStarterPack) repo.

### Installing Grunt

To use Grunt, you’ll first need to install [Node & NPM](https://nodejs.org/en/download/). Then, install [Grunt](https://gruntjs.com/getting-started) globally on your machine. Once both are installed, open this repo’s directory in your Terminal. Within this repo’s folder, type `npm install`. This will download all the dependencies to a directory called `node_modules`. Now you can type `grunt` into the Terminal and it’ll compile the Less, minify CSS, and serve the site locally. 😎


### Help
If you get stuck, visit [Jekyll's documentation site](https://jekyllrb.com/docs/home/). If you still don't find what you're looking for, you can either [create an issue](https://gh.stackoverflow.com/Design/Stacks/issues/new) or [pop into the **#design-stacks** Slack Channel](https://stackexchange.slack.com/messages/C27RWNQN9/) to ask your question.
