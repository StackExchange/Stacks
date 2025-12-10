---
title: JavaScript
description: This is an introduction to the JavaScript functionality provided by Stacks.
updated: 2025-12-05
---

## Including the Stacks JavaScript

While Stacks is first and foremost a CSS library, it also provides commonly used functionality for some components via JavaScript. This functionality is optional. If you only need the styling parts of Stack, you're free to ignore the provided JavaScript. The converse is not true: The JavaScript components work under the assumption that the Stacks CSS is available.

Stacks JavaScript is currently included within various Stack Overflow projects automatically. If you're working on a Stack Overflow project, chances are it's already available for you! If not, reach out to us and we'll work on getting it setup.

To include Stacks JavaScript in other projects, do the following.

- Include the file `dist/js/stacks.min.js` in your page. For example, if you use the unpkg CDN, add the tag `<script src="https://unpkg.com/@stackoverflow/stacks/dist/js/stacks.min.js"></script>` to your HTML. See [Using Stacks](/system/develop/using-stacks) for more information on Unpkg and installing Stacks via NPM.

## Using the Stacks JavaScript

The Stacks JavaScript components are provided as Stimulus controllers. [Stimulus](https://stimulus.hotwired.dev/) is a library created by [Basecamp](https://basecamp.com).

Stimulus allows you to add functionality to your markup in a way that is similar to how you add styling to your markup: by modifying HTML attributes.

Just as you style components by adding classes to the `class` attribute, with Stacks JavaScript, you'll give components optional functionality by adding `data-…` attributes to the HTML.

The basic functional unit of Stimulus, and of a Stacks JavaScript component, is a **controller**. Controllers are identified by their name, and all Stacks-provided controller names are prefixed with `s-…`, just like component CSS classes. You give functionality to an HTML element by setting its `data-controller` attribute.

```html
<div
    class="s-magic-widget s-magic-widget__awesome"
    data-controller="s-magic-widget"
></div>
```

Refer to the documentation of individual components on how to configure a component's behavior.

## Creating your own Stimulus controllers

A side effect of including the Stacks JavaScript in your project is that you also have Stimulus available in your page. This means you can not only use Stacks-provided controllers, but also create your own.

For general information about writing code with Stimulus, refer to the [official documentation](https://stimulusjs.org/handbook/introduction). That documentation generally assumes that you're writing ES6 code. In order to make it useful without ES6-to-ES5 transpilation, Stacks provides a helper that allows you to write controllers using old-fashioned JavaScript syntax.

This helper is called `Stacks.addController` and takes two arguments: The name ("identifier") of the controller, and an object that is analogous to the ES6 class that you would write for your controller, except that it's a plain JavaScript object. All own enumerable properties of that object will be made available on the controller prototype, with the exception of the `targets` property, which will be available on the controller constructor itself, i.e. statically.

With that, you can create and register the final [Hello World controller example](https://stimulusjs.org/handbook/hello-stimulus#controllers-simplify-refactoring) from the official documentation like this:

```javascript
Stacks.addController("greeter", {
    targets: ["name"],

    greet: function () {
        console.log("Hello, " + this.name + "!");
    },

    get name() {
        return this.nameTarget.value;
    },
});
```

## JavaScript classnames

We prefix our JavaScript target classes with `.js-` so that changing or adding a class name for styling purposes doesn't inadvertently break our JS. This allows us to style elements with any chain of atomic or component classes from Stacks without breaking any additional JavaScript interactivity.

We also try to avoid IDs for _both_ visual styling and JavaScript targeting. They aren't reusable, visual styling can't be overwritten by atomic classes, and, like non-`.js-` classes, we can't tell if there is JavaScript interactivity attached at a glance.

### ✓ Do

```html
<div class="s-card bs-lg js-copy">…</div>
```

```js
var button = document.querySelector('.js-copy');
button.addEventListener('click', function() {
    …
});
```

### ✗ Don't

```html
<div class="s-card bs-lg">…</div>
```

```js
var button = document.querySelector('.s-card');
button.addEventListener('click', function() {
    …
});
```

```css
.s-card {
    …
}
```

### ✗ Don't

```html
<div id="card">…</div>
```

```js
var button = document.querySelector('#card');
button.addEventListener('click', function() {
    …
});
```

```css
#card {
    …
}
```
