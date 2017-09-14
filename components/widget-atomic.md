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
    .post-tag {
        color: #39739d;
        background-color: #E1ECF4;
        display: inline-block;
        padding: .4em .5em;
        margin: 4px 4px 4px 0;
        white-space: nowrap;
    }
    .tag-list {
        margin: -4px -4px -4px 0;
    }
</style>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">The Basics</h2>
   
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1 p5">
                <div class="fs8 mb3 lh1">
                    13,672,187
                </div>
                questions
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}


    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Simple Items</h3>
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1 p5">
                <div class="">
                    <div class="mb4 va-middle">
                        <img src="https://i.stack.imgur.com/MSY0L.jpg?s=32&amp;g=1" alt="balpha" width="16" height="16" class="mr3 bar1"><!-- PREVIEW ONLY -->
                        <img src="..." class="mr3 bar1"><!-- CODE ONLY -->
                        <strong>balpha</strong> contributed 6 edits
                    </div>
                    <div class="mb4 va-middle">
                        <img src="https://www.gravatar.com/avatar/13eaa034bcdefa7a6de2776007f43020?s=32&d=identicon&r=PG" alt="Paweł" width="16" height="16" class="mr3 bar1"><!-- PREVIEW ONLY -->
                        <img src="..." class="mr3 bar1"><!-- CODE ONLY -->
                        <strong>Paweł</strong> contributed 7 edits
                    </div>
                    <div class="">
                        <img src="https://i.stack.imgur.com/nf0QA.jpg?s=32&g=1" alt="Aaron Shekey" width="16" height="16" class="mr3"><!-- PREVIEW ONLY -->
                        <img src="..." class="mr3 bar1"><!-- CODE ONLY -->
                        <strong>Aaron Shekey</strong> contributed 3 edits
                    </div>
                </div>
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <p class="stacks-p _section" markdown="1">
        There is built-in support for `<table>` content. The `<table>` element should have the classes `-content _items`, and the `<tr>`
        elements should be `-item`. See the [section on headers](#headers) for an example.
    </p>

    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Complex Items</h3>

    <p class="stacks-p _section" markdown="1">
        If your items are more complex than that, whitespace may not be enough to separate them clearly. In this case instead of a single
        `-content _items` with multiple `-item`s, use multiple `-content` elements, which will be separated by subtle divider lines.
    </p>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1">
                <div class="grid _fl0 bb bbc-black-3 p5">
                    <div class="grid-cell mr4">
                        <img src="https://i.stack.imgur.com/MSY0L.jpg?s=64&amp;g=1" alt="balpha" width="32" height="32" class="bar1"><!-- PREVIEW ONLY -->
                        <img src="..." class="bar1"><!-- CODE ONLY -->
                    </div>
                    <div class="lh4 grid-cell">
                        <strong>balpha</strong><br>
                        contributed 6 edits<br>
                        joined 8 months ago
                    </div>
                </div>
                <div class="grid _fl0 bb bbc-black-3 p5">
                    <div class="grid-cell mr4">
                        <img src="https://www.gravatar.com/avatar/13eaa034bcdefa7a6de2776007f43020?s=64&d=identicon&r=P" alt="Paweł" width="32" height="32" class="bar1"><!-- PREVIEW ONLY -->
                        <img src="..." class="bar1"><!-- CODE ONLY -->
                    </div>
                    <div class="lh4 grid-cell">
                        <strong>Paweł</strong><br>
                        contributed 7 edits<br>
                        joined 1 year 10 months ago
                    </div>
                </div>
                <div class="grid _fl0 p5">
                    <div class="grid-cell mr4">
                        <img src="https://i.stack.imgur.com/nf0QA.jpg?s=64&g=1" alt="Aaron Shekey" width="32" height="32" class="bar1"><!-- PREVIEW ONLY -->
                        <img src="..." class="bar1"><!-- CODE ONLY -->
                    </div>
                    <div class="lh4 grid-cell">
                        <strong>Aaron Shekey</strong><br>
                        contributed 3 edits<br>
                        joined 5 months ago
                    </div>
                </div>
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Headers</h3>

    {% capture html %}
        <div class="grid fl-jc-space-between"><div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1">
                <div class="px5 py4 bb bbc-black-3 bg-black-025 btr1 tc-black-500 fs4">
                    Stats
                </div>
                <table class="p5">
                    <tbody>
                        <tr>
                            <td class="tc-black-350 pr5 pb3">asked</td>
                            <td class="pb3">4 years, 4 months ago</td>
                        </tr>
                        <tr>
                            <td class="tc-black-350 pr5 pb3">viewed</td>
                            <td class="pb3">7,437 times</td>
                        </tr>
                        <tr>
                            <td class="tc-black-350 pr5">active</td>
                            <td>2 months ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div><div style="margin-left:32px;width: 300px"><!-- PREVIEW ONLY -->
            
            <div class="ba bac-black-3 bar1">
                <div class="px5 py4 bb bbc-black-3 bg-black-025 btr1 fs2 fw-bold tc-black-500">
                    Stats
                </div>
                <table class="p5">
                    <tbody><!-- PREVIEW ONLY -->
                        <tr><!-- PREVIEW ONLY -->
                            <td class="tc-black-350 pr5 pb3">created</td><!-- PREVIEW ONLY -->
                            <td class="pb3">9 years, 1 month ago</td><!-- PREVIEW ONLY -->
                        </tr><!-- PREVIEW ONLY -->
                        <tr><!-- PREVIEW ONLY -->
                            <td class="tc-black-350 pr5 pb3">viewed</td><!-- PREVIEW ONLY -->
                            <td class="pb3">88,020 times</td><!-- PREVIEW ONLY -->
                        </tr><!-- PREVIEW ONLY -->
                        <tr><!-- PREVIEW ONLY -->
                            <td class="tc-black-350 pr5 pb3">active</td><!-- PREVIEW ONLY -->
                            <td class="pb3">3 days ago</td><!-- PREVIEW ONLY -->
                        </tr><!-- PREVIEW ONLY -->
                        <tr><!-- PREVIEW ONLY -->
                            <td class="tc-black-350 pr5 pb3">editors</td><!-- PREVIEW ONLY -->
                            <td class="pb3">164</td><!-- PREVIEW ONLY -->
                        </tr><!-- PREVIEW ONLY -->
                    </tbody><!-- PREVIEW ONLY -->
                    ...<!-- CODE ONLY -->
                </table>
                <div class="px5 py4 bt btw1 btc-black-3 bb bbc-black-3 bg-black-025 fs2 fw-bold tc-black-500">
                    Recent Hot Answers
                </div>
                <ul class="list-ls-none p5 m0">
                    <li class="mb4"><a href="#" class="tc-black-500">Currying-in function and ES6 destructing</a></li><!-- PREVIEW ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">JSON data concatenate two data </a></li><!-- PREVIEW ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">Why addEventListener don`t work </a></li><!-- PREVIEW ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">Redux: why using Object.assign if it is not perform deep clone? </a></li><!-- PREVIEW ONLY -->
                    <li><a href="#" class="tc-black-500">Javascript: Why is my optimized loop slower than the more naive one</a></li><!-- PREVIEW ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">Currying-in ...</a></li><!-- CODE ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">JSON data ...</a></li><!-- CODE ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">Why addEventListener ...</a></li><!-- CODE ONLY -->
                    <li class="mb4"><a href="#" class="tc-black-500">Redux: why ...</a></li><!-- CODE ONLY -->
                    <li><a href="#" class="tc-black-500">Javascript: Why ...</a></li><!-- CODE ONLY -->
                </ul>
            </div>

        </div></div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
    
</section>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">Alternative Colors</h2>
    
    {% capture html %}
        <div class="grid fl-jc-space-between">
            <div style="width: 300px"><!-- PREVIEW ONLY -->
                <div class="ba bac-yellow-3 bar1 bg-yellow-100">
                    <div class="px5 py4 bb bbc-yellow-3 bg-yellow-200 btr1 fs2 fw-bold tc-yellow-900">
                        Featured on Meta
                    </div>
                    <ul class="list-ls-none p5 m0">
                        <li class="mb4">
                            <img src="https://meta.stackoverflow.com/content/Sites/stackoverflowmeta/img/icon-32.png" alt="Meta Stack Overflow" width="16" height="16" class="mr3"><!-- PREVIEW ONLY -->
                            <img src="..."><!-- CODE ONLY -->
                            <a href="#" class="tc-yellow-800">Sunsetting Documentation</a>
                        </li>
                        <li class="mb4">
                            <img src="https://meta.stackoverflow.com/content/Sites/stackoverflowmeta/img/icon-32.png" alt="Meta Stack Overflow" width="16" height="16" class="mr3"><!-- PREVIEW ONLY -->
                            <img src="..."><!-- CODE ONLY -->
                            <a href="#" class="tc-yellow-800">Documentation is read-only. What’s next?</a>
                        </li>
                    </ul>
                    <div class="px5 py4 bt btw1 btc-yellow-3 bb bbc-yellow-3 bg-yellow-200 fs2 fw-bold tc-yellow-900">
                        Blog
                    </div>
                    <ul class="list-ls-none p5 m0">
                        <li class="mb4"><a href="#" class="tc-yellow-800">Introducing Channels: Private Q&A for Your Team</a></li><!-- PREVIEW ONLY -->
                        <li><a href="#" class="tc-yellow-800">Raise Your Voice: Proclaim the Need for Net Neutrality</a></li><!-- PREVIEW ONLY -->
                        <li class="mb4"><a href="#" class="tc-yellow-800">Introducing Channels: ...</a></li><!-- CODE ONLY -->
                        <li><a href="#" class="tc-yellow-800">Raise Your Voice: ...</a></li><!-- CODE ONLY -->
                    </ul>
                </div>
            </div>
            <div style="width: 300px"><!-- PREVIEW ONLY -->
                <div class="ba bac-blue-3 bar1 bg-blue-100">
                    <div class="px5 py4 bb bbc-blue-3 bg-blue-200 btr1 tc-blue-900">
                        Options
                    </div>
                    <div class="p5 grid fl-col-nowrap gs4">
                        <button class="grid-cell fl-jc-center button _primary" type="button">Job preferences</button>
                        <button class="grid-cell fl-jc-center button _outline" type="button">Save as PDF</button>
                    </div>
                    <div class="p5 bt btc-blue-3">
                        Visibility: Public
                        <a href="#" class="button _clear">Update privacy</a>
                    </div>
                </div>
            <br><!-- PREVIEW ONLY -->
            
            <div class="ba bac-green-3 bar1 bg-green-100 p5">
                Your Developer Story is searchable by employers.
            </div>
        </div></div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
    
</section>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">Navigation</h2>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <nav class="ba bac-black-3 bar1">
                <div class="px5 py4 bb bbc-black-3 bg-black-025 btr1 tc-black-500 fs4">
                    Personal Information
                </div>
                <ul class="list-ls-none p0 m0">
                    <li class="px5 py3 mt3"><a href="#" class="tc-black-500">Edit Profile</a></li>
                    <li class="bl blc-orange-2 blw2 px5 py3 fw-bold" aria-current="page"><a href="#" class="tc-black-500">Developer Story Preferences</a></li><!-- PREVIEW ONLY -->
                    <li class="bl blc-orange-2 blw2 px5 py3 fw-bold" aria-current="page"><a href="#" class="tc-black-500">Developer Story ...</a></li><!-- CODE ONLY -->
                    <li class="px5 py3 mb3"><a href="#" class="tc-black-500">Job Match Preferences</a></li>
                </ul>
                <div class="px5 py4 bt btc-black-3 bb bbc-black-3 bg-black-025 tc-black-500 fs4">
                    Site Settings
                </div>
                <ul class="list-ls-none p0 m0">
                    <li class="px5 py3 mt3"><a href="#" class="tc-black-500">Preferences</a></li>
                    <li class="px5 py3 mb3"><a href="#" class="tc-black-500">Flair</a></li>
                </ul>                
            </nav>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Second-level navigation</h3>

    <p class="stacks-p _section" markdown="1">
        If you have a second level of navigation, you can add a `<ul>` of class `-subnav` to the top-level item.
        Highlighting the currently active navigation is a little more constrained in this case:
    </p>
    
    <p class="stacks-p _section" markdown="1">
        If the currently active top-level element has a subnavigation, the top-level `aria-current` **must** be on the
        `<a>`, *not* the `<li>`.
    </p>
    
    <p class="stacks-p _section" markdown="1">
        The currently active second-level element **must** have its `aria-current` on the
        `<li>`, *not* the `<a>`.
    </p>    
    
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <nav class="ba bac-black-3 bar1">
                <ul class="list-ls-none p0 m0">
                    <li class="px5 py3 mt3"><a href="#" class="tc-black-500">Asking</a></li>
                    <li class="px5 py3"><a href="#" class="tc-black-500">Privileges</a></li>
                    <li class="px5 py3"><a href="#" class="tc-black-500">Badges</a></li>
                    <li class="px5 py3">
                        <a class="mxn5 px5 py3 bl blc-orange-2 blw2 px5 py3 fw-bold tc-black-500" href="#" aria-current="true">Our model</a>
                        <ul class="list-ls-none p0 m0 mt3">
                            <li class="px5 py3">
                                <a href="#" class="tc-black-500">
                                    <svg role="icon" class="svg-icon iconArrowRightAlt va-bottom tc-black-100" width="18" height="18" viewBox="0 0 18 18"><path d="M6.41 2L5 3.41 10.59 9 5 14.59 6.41 16l7-7z"></path></svg>
                                    Be nice
                                </a>
                            </li>
                            <li class="px5 py3" aria-current="page">
                                <a href="#" class="tc-black-500 fw-bold">
                                    <svg role="icon" class="svg-icon iconArrowRightAlt va-bottom tc-orange-500" width="18" height="18" viewBox="0 0 18 18"><path d="M6.41 2L5 3.41 10.59 9 5 14.59 6.41 16l7-7z"></path></svg>
                                    What kind of behavior is expected of users?
                                </a>
                            </li>
                            <li class="px5 py3">
                                <a href="#" class="tc-black-500">
                                    <svg role="icon" class="svg-icon iconArrowRightAlt va-bottom tc-black-100" width="18" height="18" viewBox="0 0 18 18"><path d="M6.41 2L5 3.41 10.59 9 5 14.59 6.41 16l7-7z"></path></svg>
                                    How do I find topics I'm interested in?
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="px5 py3"><a href="#" class="tc-black-500">Reputation &amp; Moderation</a></li>
                    <li class="px5 py3 mb3"><a href="#" class="tc-black-500">Answering</a></li>
                </ul>
            </nav>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

</section>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">Header Actions</h2>
    
    {% capture html %}
        <div class="grid fl-jc-space-between"><div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1">
                <div class="px5 py4 bb bbc-black-3 bg-black-025 btr1 tc-black-500 fs4 grid fl-row-reverse fl-jc-space-between">
                    <a class="fs1" href="#">
                        edit
                    </a>
                    Favorite Tags
                </div>
                <div class="p5">
                    <div class="">
                        <a class="post-tag" href="#">css</a>
                        <a class="post-tag" href="#">html</a>
                        <a class="post-tag" href="#">accessibility</a>
                    </div>
                </div>
                <div class="px5 py4 bt btc-black-3 bb bbc-black-3 bg-black-025 tc-black-500 fs4 grid fl-row-reverse fl-jc-space-between">
                    <a class="fs1" href="#">
                        edit
                    </a>
                    Ignored Tags
                </div>
                <div class="p5">
                    <div class="tag-list">
                        <a class="post-tag" href="#">twitter-bootstrap</a>
                        <a class="post-tag" href="#">web-component</a>
                        <a class="post-tag" href="#">internet-explorer</a>
                    </div>
                </div>
            </div>
        </div><div style="width: 300px"><!-- PREVIEW ONLY -->
        
            <div class="ba bac-black-3 bar1">
                <div class="px5 py4 bb bbc-black-3 bg-black-025 btr1 tc-black-500 grid fl-row-reverse fl-jc-space-between">
                    <a class="fs1" href="#">
                        clear
                    </a>
                    <span class="fs2 fw-bold">2 Recent Searches</span>
                </div>
                <table class="p5">
                    <tbody>
                        <tr>
                            <td class="tc-orange ta-right va-top fs1 pr3 pb3">64</td>
                            <td class="pb3"><a href="#">remote jobs</a></td>
                        </tr>
                        <tr>
                            <td class="tc-orange ta-right va-top fs1 pr3">238</td>
                            <td><a href="#">jobs in Berlin, Deutschland (within 20 km)</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div></div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
</section>

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">Accordions</h2>

    <p class="stacks-p _section" markdown="1">
        In order to create an accordion, i.e. to make part of the sidebar widget expandable / collapsible,
        you can do the following.
    </p>
    
    <ul class="stacks-list _section">
        <li>
            <p class="stacks-p" markdown="1">The `-header` element that controls the accordion needs</p>
            <ul>
                <li><p class="stacks-p" markdown="1">a modifier class of `_collapsing-control` in order to display the expander arrow</p></li>
                <li><p class="stacks-p" markdown="1">An `aria-expanded` attribute with value `true` or `false`; this is not only necessary for
                    accessiblity, but also controls the rotation of the expander arrow. The value must be in sync with the wrapper's `is-collapsed`
                    class (see below).</p></li>
                <li><p class="stacks-p" markdown="1">an `aria-label` attribute that makes it clear that this is a collapsing control, *unless*
                    this is already clear from the header's text content</p></li>
                <li><p class="stacks-p" markdown="1">an `aria-controls` attribute whose value is the `id` of the `-collapsible-group-wrapper` (see below)</p></li>
                <li><p class="stacks-p" markdown="1">a non-negatvie `tabindex`, usually `0`, so it can be focused via keyboard navigation</p></li>
            </ul>
        </li>
        <li>
            <p class="stacks-p" markdown="1">
                The (one or more) content elements that are meant to be collapsed must be wrapped in an
                element of class `-collapsible-group-wrapper`, which has the following properties:
            </p>
            <ul>
                <li><p class="stacks-p" markdown="1">This element must have an `id`, so it can be referred to by the header's
                    `aria-controls` attribute (see above).</p></li>
                <li><p class="stacks-p" markdown="1">If (and only if) the accordion is collapsed, this element has the state class
                    `is-collapsed`. The presence of this class must be synchronized with the header's `aria-expanded` value.</p></li>
            </ul>
        </li>
        <li>
            <p class="stacks-p" markdown="1">
                Directly inside this wrapper element there must be an element of class `-collapsible-group`. This can be the same element
                as the `-content` element (if there's only one content element that is meant to be collapsed), or it can be an additional
                wrapper element *around* the content element(s).
            </p>
        </li>
    </ul>
    
    <p class="stacks-p _section" markdown="1">
        A note on the examples below: There is an additional `js-collapsing-control` class on the headers. This page includes JavaScript
        code that correctly handles keyboard and click events on elements with this class. We should eventually make such JavaScript
        functionality universally available together with the Stacks CSS, but currently this is not the case.
    </p>    
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
        
            <div class="ba bac-black-3 bar1">
                <div class="px5 py4 bb bbc-black-3 bg-black-025 btr1 tc-black-500 grid fl-row-reverse fl-jc-space-between
                            js-collapsing-control"
                            aria-expanded="true"
                            aria-controls="recent-searches"
                            aria-label="toggle recent searches"
                            tabindex="0">
                    <a class="fs1" href="#">
                        clear
                    </a>
                    <span class="fs2 fw-bold">2 Recent Searches</span>
                </div>
                <div class="-collapsible-group-wrapper" id="recent-searches">
                    <div class="-collapsible-group">                
                        <table class="p5">
                            <tbody>
                                <tr>
                                    <td class="tc-orange ta-right va-top fs1 pr3 pb3">64</td>
                                    <td class="pb3"><a href="#">remote jobs</a></td>
                                </tr>
                                <tr>
                                    <td class="tc-orange ta-right va-top fs1 pr3">238</td>
                                    <td><a href="#">jobs in Berlin, Deutschland (within 20 km)</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="px5 py4 bt btc-black-3 bb bbc-black-3 bg-black-025 tc-black-500 fs2 fw-bold
                            js-collapsing-control"
                            aria-expanded="false"
                            aria-controls="favorites"
                            aria-label="toggle favorites"
                            tabindex="0">
                    0 Favorites
                </div>
                <div class="-collapsible-group-wrapper is-collapsed" id="favorites">
                    <div class="p5 -collapsible-group">
                        <i>You have no favorite jobs</i>
                    </div>
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
            if (e.target.classList.contains("-action")) {
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
            } else {
                e.preventDefault();
            }
        }
        var cs = document.getElementsByClassName("js-collapsing-control");
        for (var i=0; i < cs.length; i++) {
            cs[i].addEventListener("click", toggleCollapsing);
            cs[i].addEventListener("keydown", toggleCollapsing);
        }
    };
</script>