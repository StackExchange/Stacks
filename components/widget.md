---
layout: with-secondary-nav
title: Sidebar Widgets
description: Sidebar widgets are widgets that are meant for the sidebar. #TODO: actual description
---
<style>
    ul {
        margin-bottom: 0;
    }
    .example-avatar {
        margin-right: 12px;
        vertical-align: text-bottom;
    }
    .example-stats-table { /* TODO: at the very least, <table class="-content _items"> should be supported */
        border-spacing: 12px;
        margin: -12px;
    }
    .example-stats-table td {
        padding: 0;
    }
    .example-stats-table td:first-child {
        color: #9199a1;
    }
</style>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">The Basics</h2>
    
    <p class="stacks-p _section" markdown="1">
        In its simplest form, the sidebar widget is an element with class `s-widget` and a child of class `-content`.
        This sets up a sidebar widget with the appropriate inner spacing, and you can put into it whatever you want.
    </p>
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="s-widget">
                <div class="-content">
                    <div style="font-size:24px; margin-bottom:8px; line-height:1;">
                        13,672,187
                    </div>
                    questions
                </div>
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}


    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Simple Items</h3>

    <p class="stacks-p _section" markdown="1">
        Oftentimes, your widget will be a list of similar, relatively simple items. By giving the `-content` a modifier class
        `_items`, and giving the items a class of `-item`, the content will be spaced out nicely.
    </p>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="s-widget">
                <div class="-content _items">
                    <div class="-item">
                        <img src="https://i.stack.imgur.com/MSY0L.jpg?s=32&amp;g=1" alt="balpha" width="16" height="16" class="example-avatar"><!-- PREVIEW ONLY -->
                        <img src="..." class="example-avatar"><!-- CODE ONLY -->
                        <strong>balpha</strong> contributed 6 edits
                    </div>
                    <div class="-item">
                        <img src="https://www.gravatar.com/avatar/13eaa034bcdefa7a6de2776007f43020?s=32&d=identicon&r=PG" alt="Paweł" width="16" height="16" class="example-avatar"><!-- PREVIEW ONLY -->
                        <img src="..." class="example-avatar"><!-- CODE ONLY -->
                        <strong>Paweł</strong> contributed 7 edits
                    </div>
                    <div class="-item">
                        <img src="https://i.stack.imgur.com/nf0QA.jpg?s=32&g=1" alt="Aaron Shekey" width="16" height="16" class="example-avatar"><!-- PREVIEW ONLY -->
                        <img src="..." class="example-avatar"><!-- CODE ONLY -->
                        <strong>Aaron Shekey</strong> contributed 3 edits
                    </div>                    
                </div>
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Complex Items</h3>

    <p class="stacks-p _section" markdown="1">
        If your items are more complex than that, whitespace may not be enough to separate them clearly. In this case instead of a single
        `-content _items` with multiple `-item`s, use multiple `-content` elements, which will be separated by subtle divider lines.
    </p>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="s-widget">
                <div class="-content grid">
                    <img src="https://i.stack.imgur.com/MSY0L.jpg?s=64&amp;g=1" alt="balpha" width="32" height="32" class="example-avatar"><!-- PREVIEW ONLY -->
                    <img src="..." class="example-avatar"><!-- CODE ONLY -->
                    <div class="lh4">
                        <strong>balpha</strong><br>
                        contributed 6 edits<br>
                        joined 8 months ago
                    </div>
                </div>
                <div class="-content grid">
                    <img src="https://www.gravatar.com/avatar/13eaa034bcdefa7a6de2776007f43020?s=64&d=identicon&r=P" alt="Paweł" width="32" height="32" class="example-avatar"><!-- PREVIEW ONLY -->
                    <img src="..." class="example-avatar"><!-- CODE ONLY -->
                    <div class="lh4">
                        <strong>Paweł</strong><br>
                        contributed 7 edits<br>
                        joined 1 year 10 months ago
                    </div>
                </div>
                <div class="-content grid">
                    <img src="https://i.stack.imgur.com/nf0QA.jpg?s=64&g=1" alt="Aaron Shekey" width="32" height="32" class="example-avatar"><!-- PREVIEW ONLY -->
                    <img src="..." class="example-avatar"><!-- CODE ONLY -->
                    <div class="lh4">
                        <strong>Aaron Shekey</strong><br>
                        contributed 3 edits<br>
                        joined 5 months ago
                    </div>
                </div>
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Headers</h3>

    <p class="stacks-p _section" markdown="1">
        The other possible child class is `-header`, which unsurprisingly creates a header. Headers can be used both
        as a title for the widget, as well as to create several sections inside the widget. The `_alternate-small-bold`
        modifier is available for headers to modify the text appearance.
    </p>

    {% capture html %}
        <div class="grid fl-jc-space-between"><div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="s-widget">
                <div class="-header">
                    Stats
                </div>
                <div class="-content">
                    <table class="example-stats-table">
                        <tbody>
                            <tr>
                                <td>asked</td>
                                <td>4 years, 4 months ago</td>
                            </tr>
                            <tr>
                                <td>viewed</td>
                                <td>7,437 times</td>
                            </tr>
                            <tr>
                                <td>active</td>
                                <td>2 months ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div><div style="margin-left:32px;width: 300px"><!-- PREVIEW ONLY -->
            
            <div class="s-widget">
                <div class="-header _alternate-small-bold">
                    Stats
                </div>
                <div class="-content">
                    <table class="example-stats-table">
                        <tbody><!-- PREVIEW ONLY -->
                            <tr><!-- PREVIEW ONLY -->
                                <td>created</td><!-- PREVIEW ONLY -->
                                <td>9 years, 1 month ago</td><!-- PREVIEW ONLY -->
                            </tr><!-- PREVIEW ONLY -->
                            <tr><!-- PREVIEW ONLY -->
                                <td>viewed</td><!-- PREVIEW ONLY -->
                                <td>88,020 times</td><!-- PREVIEW ONLY -->
                            </tr><!-- PREVIEW ONLY -->
                            <tr><!-- PREVIEW ONLY -->
                                <td>active</td><!-- PREVIEW ONLY -->
                                <td>3 days ago</td><!-- PREVIEW ONLY -->
                            </tr><!-- PREVIEW ONLY -->
                            <tr><!-- PREVIEW ONLY -->
                                <td>editors</td><!-- PREVIEW ONLY -->
                                <td>164</td><!-- PREVIEW ONLY -->
                            </tr><!-- PREVIEW ONLY -->
                        </tbody><!-- PREVIEW ONLY -->
                        ...<!-- CODE ONLY -->
                    </table>
                </div>                    
                <div class="-header _alternate-small-bold">
                    Recent Hot Answers
                </div>
                <ul class="-content _items">
                    <li class="-item"><a href="#">Currying-in function and ES6 destructing</a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">JSON data concatenate two data </a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">Why addEventListener don`t work </a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">Redux: why using Object.assign if it is not perform deep clone? </a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">Javascript: Why is my optimized loop slower than the more naive one</a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">Currying-in ...</a></li><!-- CODE ONLY -->
                    <li class="-item"><a href="#">JSON data ...</a></li><!-- CODE ONLY -->
                    <li class="-item"><a href="#">Why addEventListener ...</a></li><!-- CODE ONLY -->
                    <li class="-item"><a href="#">Redux: why ...</a></li><!-- CODE ONLY -->
                    <li class="-item"><a href="#">Javascript: Why ...</a></li><!-- CODE ONLY -->
                </ul>
            </div>

        </div></div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
    
</section>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">Alternative Colors</h2>
    
    <p class="stacks-p _section" markdown="1">
        Three modifier classes are available for changing the background color of an `s-widget`: `_alternate-yellow`, `_alternate-blue`,
        and `_alternate-green`.
    </p>

    <p class="stacks-p _section" markdown="1">
        TODO: guidance on when to use what color
    </p>
    
    {% capture html %}
        <div class="grid fl-jc-space-between"><div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="s-widget _alternate-yellow">
                <div class="-header _alternate-small-bold">Featured on Meta</div>
                <ul class="-content _items">
                    <li class="-item">
                        <div class="grid">
                            <img src="https://meta.stackoverflow.com/content/Sites/stackoverflowmeta/img/icon-32.png" alt="Meta Stack Overflow" width="16" height="16" class="mr4"><!-- PREVIEW ONLY -->
                            <img src="..."><!-- CODE ONLY -->
                            <a href="#">Sunsetting Documentation</a>
                        </div>
                    </li>
                    <li class="-item">
                        <div class="grid">
                            <img src="https://meta.stackoverflow.com/content/Sites/stackoverflowmeta/img/icon-32.png" alt="Meta Stack Overflow" width="16" height="16" class="mr4"><!-- PREVIEW ONLY -->
                            <img src="..."><!-- CODE ONLY -->
                            <a href="#">Documentation is read-only. What’s next?</a>
                        </div>
                    </li>
                </ul>
                <div class="-header _alternate-small-bold">Blog</div>
                <ul class="-content _items">
                    <li class="-item"><a href="#">Introducing Channels: Private Q&A for Your Team</a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">Raise Your Voice: Proclaim the Need for Net Neutrality</a></li><!-- PREVIEW ONLY -->
                    <li class="-item"><a href="#">Introducing Channels: ...</a></li><!-- CODE ONLY -->
                    <li class="-item"><a href="#">Raise Your Voice: ...</a></li><!-- CODE ONLY -->
                </ul>
            </div>
            </div><div style="width: 300px"><!-- PREVIEW ONLY -->
            
            <div class="s-widget _alternate-blue">
                <div class="-header">Options</div>
                <div class="-content _items">
                    <a href="#" class="-item button _primary fl-jc-center" style="display: flex">
                        Job preferences
                    </a>
                    <a href="#" class="-item button _outline fl-jc-center" style="display: flex">
                        Save as PDF
                    </a>
                </div>
                <div class="-content">
                    Visibility: Public
                    <a href="#" class="button _clear">Update privacy</a>
                </div>
            </div>
            <br><!-- PREVIEW ONLY -->
            
            <div class="s-widget _alternate-green">
                <div class="-content">
                    Your Developer Story is searchable by employers.
                </div>
            </div>            
        </div></div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
    
</section>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">Navigation</h2>
    
    <p class="stacks-p _section" markdown="1">
        A common use for sidebar widgets is as a navigation block or table of content, including a highlight
        of the page that the user is currently looking at.
    </p>

    <p class="stacks-p _section" markdown="1">
        The recommended pattern, as shown in the example below, is to make the `s-widget` a `<nav>` element,
        and for each group of links to create a `<ul>` with the classes `-content _items`, within which each
        `<li>` is of class `-item`.
    </p>
    
    <p class="stacks-p _section" markdown="1">
        The currently active navigation item should have the `aria-current` attribute set to `"page"` (if it is a direct
        link to the very page that the user is looking at) or `"true"` (in all other cases, e.g. if it is a
        link to a page that is conceptually a parent or the current page). This `aria-current` attribute can be on
        the `<li>` or on the `<a>`.
    </p>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <nav class="s-widget">
                <div class="-header">
                    Personal Information
                </div>
                <ul class="-content _items">
                    <li class="-item"><a href="#">Edit Profile</a></li>
                    <li class="-item" aria-current="page"><a href="#">Developer Story Preferences</a></li><!-- PREVIEW ONLY -->
                    <li class="-item" aria-current="page"><a href="#">Developer Story ...</a></li><!-- CODE ONLY -->
                    <li class="-item"><a href="#">Job Match Preferences</a></li>
                </ul>
                <div class="-header">
                    Site Settings
                </div>
                <ul class="-content _items">
                    <li class="-item"><a href="#">Preferences</a></li>
                    <li class="-item"><a href="#">Flair</a></li>
                </ul>                
            </nav>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <p class="stacks-p _section" markdown="1">
        Multi-level navigation. TODO: explain
    </p>
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <nav class="s-widget">
                <ul class="-content _items">
                    <li class="-item"><a href="#">Asking</a></li>
                    <li class="-item"><a href="#">Privileges</a></li>
                    <li class="-item"><a href="#">Badges</a></li>
                    <li class="-item">
                        <a href="#" aria-current="true">Our model</a>
                        <ul class="-subnav">
                            <li><a href="#">Be nice</a></li>
                            <li aria-current="page">
                                <a href="#">What kind of behavior is expected of users?</a>
                            </li>
                            <li><a href="#">How do I find topics I'm interested in?</a></li>
                        </ul>
                    </li>
                    <li class="-item"><a href="#">Reputation &amp; Moderation</a></li>
                    <li class="-item"><a href="#">Answering</a></li>
                </ul>
            </nav>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}






    
<br><br><br><br><br><br><i>(end of real documentation)</i><br><br><br><br><br><br>
    
<section class="stacks-section">
    <h2 class="stacks-title">Lorem ipsum stuff &ndash; ignore this</h2>
    <h3 class="stacks-title">Introduction</h3>
    
    <p class="stacks-p _section">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
    <p class="stacks-p _section">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor</p>
    <p class="stacks-p _section">sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
    <p class="stacks-p _section">et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="s-widget">
                <div class="-header _alternate-small-bold">
                    <a href="#" class="-action">Action</a>
                    Alternate header style
                </div>
                <div class="-content">
                    <b>This is content.</b>
                    <ul>
                        <li>Content can be more complex</li>
                        <li>than just text.</li>
                    </ul>
                </div>
                <div class="-content">
                    <b>More complex items should</b>
                    <ul>
                        <li>be separated with lines</li>
                        <li>so the boundaries are easy to see.</li>
                    </ul>
                </div>
                <div class="-header _alternate-small-bold _collapsing-control
                            js-collapsing-control" aria-expanded="false"
                            aria-controls="collapsible-example"
                            aria-label="expand this section" tabindex="0">
                    Expandable section
                </div>
                <div class="-collapsible-group-wrapper is-collapsed"
                            id="collapsible-example">
                    <div class="-collapsible-group">
                        <div class="-content">
                            <b>This is content.</b>
                            <ul>
                                <li>Content can be more complex</li>
                                <li>than just text.</li>
                            </ul>
                        </div>
                        <div class="-content">
                            <b>More complex items should</b>
                            <ul>
                                <li>be separated with lines</li>
                                <li>so the boundaries are easy to see.</li>
                            </ul>
                        </div>
                        <div class="-content">
                            <b>This is content.</b>
                            <ul>
                                <li>Content can be more complex</li>
                                <li>than just text.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="-header _alternate-small-bold">
                    Alternate header style
                </div>
            </div>            
        </div><!-- PREVIEW ONLY -->
        {% endcapture %}{% include example.html html=html %}

</section>

<script type="text/javascript">
    // TODO: figure out the right way to share JS alongside the LESS
    window.onload = function () {
        function toggleCollapsing(e) {
            if (e.type == "keydown" && (e.keyCode != 13 && e.keyCode != 32)) {
                return;
            }
            var expanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", expanded ? "false" : "true");
            var l = document.getElementById(this.getAttribute("aria-controls"));
            if (expanded) {
                l.classList.add("is-collapsed");
            } else {
                l.classList.remove("is-collapsed");
            }
            if (e.type === "click") {
                this.blur();
            }
        }
        var cs = document.getElementsByClassName("js-collapsing-control");
        for (var i=0; i < cs.length; i++) {
            cs[i].addEventListener("click", toggleCollapsing);
            cs[i].addEventListener("keydown", toggleCollapsing);
        }
    }
</script>