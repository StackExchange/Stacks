---
layout: with-secondary-nav
title: Sidebar Widgets
description: CSS is hard to manage, especially in large projects. Styles are written in a global scope, which is narrowed through complex selectors. Specificity issues, redundancy, bloat, and maintenance can become a nightmare. Atomic CSS enables you to style directly in your views and components, avoiding the headache of managing stylesheets. Instead of declaring a single overarching class, we build our components with a series of small immutable classes. This approach keeps our CSS bundle small and our views flexible.
---

<section class="stacks-section">
    <h2 class="grid fl-jc-space-between fl-ai-center mb0 stacks-title">The Basics</h2>
    
    <p class="stacks-p _section" markdown="1">
        In its simplest form, a sidebar widget is rounded bordered box with some padding. This is defined by a combination of atomic classes. `ba` defines a border on all sides with a border color of `bac-black-3`. The border radius is defined by `bar1` and its pattern is added with `p5`. Additional text overrides were added to the question count.
    </p>
   
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
    
    <p class="stacks-p _section" markdown="1">
        Oftentimes, your widget will be a list of similar, relatively simple items. In this example, we maintain the same border styling and padding in its containing box, but include a repeating row of of similar styling.
    </p>
    
    <p class="stacks-p _section" markdown="1">
        Our rows are constructed with an avatar of vertical text alignment of `va-text-bottom`. These avatars are rounded and include some margin on their right side. Each row is separated by a bottom margin of `mb4`.
    </p>
    
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1 p5">
                <div class="mb4">
                    <img src="https://i.stack.imgur.com/MSY0L.jpg?s=32&amp;g=1" alt="balpha" width="16" height="16" class="va-text-bottom mr3 bar1"><!-- PREVIEW ONLY -->
                    <img src="..." class="va-text-bottom mr3 bar1"><!-- CODE ONLY -->
                    <strong>balpha</strong> contributed 6 edits
                </div>
                <div class="mb4">
                    <img src="https://www.gravatar.com/avatar/13eaa034bcdefa7a6de2776007f43020?s=32&d=identicon&r=PG" alt="Paweł" width="16" height="16" class="va-text-bottom mr3 bar1"><!-- PREVIEW ONLY -->
                    <img src="..." class="va-text-bottom mr3 bar1"><!-- CODE ONLY -->
                    <strong>Paweł</strong> contributed 7 edits
                </div>
                <div>
                    <img src="https://i.stack.imgur.com/nf0QA.jpg?s=32&g=1" alt="Aaron Shekey" width="16" height="16" class="va-text-bottom mr3 bar1"><!-- PREVIEW ONLY -->
                    <img src="..." class="va-text-bottom mr3 bar1"><!-- CODE ONLY -->
                    <strong>Aaron Shekey</strong> contributed 3 edits
                </div>
            </div>
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}

    <h3 class="grid fl-jc-space-between fl-ai-center mb0 mt6 stacks-title _subtitle">Complex Items</h3>

    <p class="stacks-p _section" markdown="1">
        If your items are more complex than that, whitespace may not be enough to separate them clearly. In this case, we've separated each row by subtle divider lines. We've also applied a more rigid grid structure using our flexbox grid classes.
    </p>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
            <div class="ba bac-black-3 bar1">
                <div class="grid _fl0 bb bbc-black-3 p5">
                    <img src="https://i.stack.imgur.com/MSY0L.jpg?s=64&amp;g=1" alt="balpha" width="32" height="32" class="bar1 grid-cell mr4"><!-- PREVIEW ONLY -->
                    <img src="..." class="bar1 grid-cell mr4"><!-- CODE ONLY -->
                    <div class="lh4 grid-cell">
                        <strong>balpha</strong><br>
                        contributed 6 edits<br>
                        joined 8 months ago
                    </div>
                </div>
                <div class="grid _fl0 bb bbc-black-3 p5">
                    <img src="https://www.gravatar.com/avatar/13eaa034bcdefa7a6de2776007f43020?s=64&d=identicon&r=P" alt="Paweł" width="32" height="32" class="bar1 grid-cell mr4"><!-- PREVIEW ONLY -->
                    <img src="..." class="bar1 grid-cell mr4"><!-- CODE ONLY -->
                    <div class="lh4 grid-cell">
                        <strong>Paweł</strong><br>
                        contributed 7 edits<br>
                        joined 1 year 10 months ago
                    </div>
                </div>
                <div class="grid _fl0 p5">
                    <img src="https://i.stack.imgur.com/nf0QA.jpg?s=64&g=1" alt="Aaron Shekey" width="32" height="32" class="bar1 grid-cell mr4"><!-- PREVIEW ONLY -->
                    <img src="..." class="bar1 grid-cell mr4"><!-- CODE ONLY -->
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
    
    <p class="stacks-p _section" markdown="1">
        Headers can be used as a title for the widget. These headers are defined by their background color of `bg-black-025` and their font size of `fs4`.
    </p>

    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->
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
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
    
    
    <p class="stacks-p _section" markdown="1">
        Headers can be also be used to create several sections inside the widget. When used in this context, our headers take a bold font weight `fw-bold` and a smaller text size of `fs2`.
    </p>
    {% capture html %}
        <div style="width: 300px"><!-- PREVIEW ONLY -->    
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
        </div><!-- PREVIEW ONLY -->
    {% endcapture %}{% include example.html html=html %}
</section>