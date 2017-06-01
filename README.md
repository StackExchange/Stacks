# Stacks

Stacks is the Stack Overflow's Pattern Design Library. It is an internal tool used to document user-interface elements, experience design patterns, and establish consistent interaction patterns for our products. This effort provides visibility for all team members into what patterns are being used and supports internal efforts to decrease our product maintainence costs. More importantly, however, a consistent pattern library benefits our users. It lowers their cognitive load and frees them from having to remember multiple patterns which achieve the same goal.

### Table of Contents
 - [Getting Started](#getting-started)
   - [Installing Ruby](#installing-ruby)
   - [Installing Ruby Gems](#installing-ruby-gems)
   - [Installing Jekyll](#installing-jekyll)
 - [Running Stacks Locally](#running-stacks-locally)
 - [Contributing to Stacks](#contributing-to-stacks)
   - [Creating a New Page](#creating-a-new-page)

---

## Getting Started

These instructions assume you are using a Mac and you have a basic level of knowledge with Terminal (i.e. you can copy and paste the commands you're given below). To run this website locally you will need:

 - Sublime (or your preferred text editor)
 - Ruby RVM (OSX comes pre-installed with Ruby, but it would be good to upgrade to the latest stable version)
 - Ruby Gems
 - Jekyll

### Installing Ruby

While you can install Ruby manually, most people use a management tool to take care of this for them. These instructions use RVM. If you'd like to use something else, that's fine.

To install Ruby RVM, run the following command in Terminal:

	\curl -sSL https://get.rvm.io | bash -s stable --ruby

This will install RVM and upgrade Ruby to the latest stable version.

Once this is finished, we need to make sure RVM gets loaded whenever Terminal is loaded so we can use it's commands in the future. To do this you will need to edit your `.bash_profile`. To do this run the following commands in Terminal:

	cd ~/
	sudo subl .bash_profile

You will be prompted for the Administrator password in order to run the `sudo` command. Sudo commands should be used sparingly as they remove all the normal safeguards put in place to keep you from making huge errors. Also note that we're using *Sublime* (`subl`) to edit `.bash_profile`. You can use any text editor you wish here. If this file doesn't exist already, this command will create it for you. Paste the following command at the bottom of the document:

	# This loads RVM into a shell session.
	[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

**Restart Terminal.** This is done by closing and reopening Terminal. Once re-opened, test to make sure RVM is loading correctly. Type:

	rvm

*Optional:* If you'd like progress bars for RVM or Gem downloads, run this command:

	echo progress-bar >> ~/.curlrc


### Installing Ruby Gems

To install Ruby Gems, download the latest version here: [RubyGems Downloads Page](https://rubygems.org/pages/download). Following instructions at the bottom of the page. This should install Ruby Gems.

*If you had Ruby Gems installed previously*, but upgraded Ruby because of the above instructions, you will probably have to update your Ruby Gems install. To do this, run the following commands:

	gem install rubygems-update
	update_rubygems

### Installing Jekyll

Jekyll is a static-page web server that we use to run Stacks at the moment. You will need this to make edits or run the website locally. To install Jekyll, run the following command in Terminal:

	gem install jekyll

This will install all the required files and dependencies.

## Running Stacks Locally

To run Stacks locally, you will need to:

 - Download the repo
 - Once downloaded, navigate to the repo folder within Terminal. Usually this is something like: `cd /Users/[yourUserName]/Sites/stacks-ui`
 - Once you are within your folder, start Jekyll by running the following command: `jekyll serve`

That's it. Now point you local browser to [`http://localhost:4000/stacks-ui/`](http://localhost:4000/stacks-ui/) and you will be able to view the website locally.


## Contributing to Stacks

To contribute to Stacks, you will need to be an authorized Stack Exchange Github user. Contact the SRE team to be added if you are not already.

A couple things to note:

 - All documentation website edits happen on the `gh-pages` branch.
 - Do **not** make edits to the `_site` folder. This is the folder Jekyll compiles the website into, so it is constantly being re-written. Also this folder will not be checked in. 
 - Files relating to the documentation's site wrapper are found within the `_includes` and `_layouts` folders.

### Creating a New Page

Creating a new page within an established section is straight-forward, but requires a few steps.

**Start a new document.**
Fairly straight-forward so far.

**Copy and paste the following "front matter" to the top of your document:**

	---
	layout: default
	title: Page Title
	permalink: parentFolder/permalink
	id: pageTitle
	css: stacks
	---

 - *Layout*: You can change the page's layout by altering this value. Most of the time you'll want to leave it at `default`.
 - *Title*: This is the page's title. Enter what you want.
 - *Permalink*: **This one is important if you want it to show up in the navigation.** You need enter the desired page's URL. Usually this is the parent folder and then page's title without any spaces.
 - *ID*: This is optional. This adds a body-level ID class to your page. This is helpful if the page you are designing requires specific designs.
 - *CSS*: This is redundant and is slated to be removed. For now you most include this and leave it *as-is*.

**Create your file.**
Again, fairly straight-forward here, but now you can add in your page content. Most files follow this pattern:

	<header>
		<h1>Page Title Here</h1>
	</header
	<section class="stacks-section">
		<h2 id="toc-sectionTitle">Section Title</h2>
		<p>Copy here</p>
		<div class="stacks-example">
			<div class="-codeBlock">
	{% highlight html linenos %}
	(Example code syntax here)
	{% endhighlight %}
			</div>
			<div class="-previewBlock">
				(Examples here)
			</div>
		</div>
	</section>

 - The `section` example above can be repeated as times as needed throughout your document.
 - The ID on your section title (`<h2 id="toc-sectionTitle">`) is used for tertiary page navigation. IDs should always be prepended by `toc-` and then a unique section title. This title only needs to be unique to this page.
 - The `{% highlight html linenos %}` area is special plugin that allows us to print example code on-screen and it will highlight the code for you automatically and add line numbers. **This tool respects all whitespace so you must push all code flush left as shown above.**
