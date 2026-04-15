---
title: "Toggle switch"
description: "A toggle is used to quickly switch between two or more possible states. They are most commonly used for simple “on/off” switches."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=1943-848"
---

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="classes">Classes</h2><a class="s-btn s-btn__clear" href="#classes"><span class="v-visible-sr">Section titled Classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    
    
    
    
    


    





    



    




    



    


    



    


<div id="docs-table" class="overflow-x-auto s-anchors s-anchors__underlined" tabindex="0">
    <table class="docs-table s-table s-table__bx-simple">
        <thead>
            <tr>
                
                    <th scope="col" class="s-table--cell4">
                        Class
                    </th>
                
                
                
                    <th scope="col" class="s-table--cell3">
                        Modifies
                    </th>
                
                
                    <th scope="col" class="">
                        Description
                    </th>
                
            </tr>
        </thead>
        <tbody class="fs-caption">
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-toggle-switch</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                <em class="fc-black-350">N/A</em>
                            
                        </td>
                    
                    
                        <td>Base toggle switch style.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-toggle-switch__multiple</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                
                                
                                    <code>.s-toggle-switch</code>
                                
                            
                        </td>
                    
                    
                        <td>Used to style toggle switches with three or more options.</td>
                    
                </tr>
            
        </tbody>
    </table>
</div>


<!-- Reset all default values -->












</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="styles">Styles</h2><a class="s-btn s-btn__clear" href="#styles"><span class="v-visible-sr">Section titled Styles</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="basic-toggle">Basic toggle</h3><a class="s-btn s-btn__clear" href="#basic-toggle"><span class="v-visible-sr">Section titled Basic toggle</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Toggle switches take up less space than an “on/off” radio button group and communicate their intended purpose more clearly than a checkbox that toggles functionality. They also provide consistency between desktop and mobile experiences.</p>
    <div class="docs-preview">
    <pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ai-center g8"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"toggle-example-default"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-toggle-switch"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"toggle-example-default"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ai-center g8"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"toggle-example-checked"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-toggle-switch"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"toggle-example-checked"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">checked</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ai-center g8"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"toggle-example-disabled"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-toggle-switch"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"toggle-example-disabled"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">disabled</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ai-center g8"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"toggle-example-checked"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-toggle-switch"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"toggle-example-checked-disabled"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">checked</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example d-flex fw-wrap g16">
            <div class="d-flex ai-center g8">
                <label class="s-label" for="toggle-example-default">Default</label>
                <input class="s-toggle-switch" id="toggle-example-default" type="checkbox">
            </div>
            <div class="d-flex ai-center g8">
                <label class="s-label" for="toggle-example-checked">Checked</label>
                <input class="s-toggle-switch" id="toggle-example-checked" type="checkbox" checked="">
            </div>
            <div class="d-flex ai-center g8">
                <label class="s-label" for="toggle-example-disabled">Disabled</label>
                <input class="s-toggle-switch" id="toggle-example-disabled" type="checkbox" disabled="">
            </div>
            <div class="d-flex ai-center g8">
                <label class="s-label" for="toggle-example-disabled">Checked and disabled</label>
                <input class="s-toggle-switch" id="toggle-example-checked-disabled" type="checkbox" disabled="" checked="">
            </div>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="two-or-more-options-with-icons">Two or more options with icons</h3><a class="s-btn s-btn__clear" href="#two-or-more-options-with-icons"><span class="v-visible-sr">Section titled Two or more options with icons</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Toggles switches can be extended to choose between two or more states where each state is represented by an icon. Using the <code>__multiple</code> toggle instead of a radio group and making sure labels follow their inputs in this case is important.</p>
    <div class="docs-preview">
    <pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">fieldset</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ai-center g8"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">legend</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label c-default"</span>&gt;</span>…<span class="hljs-tag">&lt;/<span class="hljs-name">legend</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-toggle-switch s-toggle-switch__multiple"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"group1"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-1"</span> <span class="hljs-attr">checked</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"value1"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"input-1"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"First value"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"First value"</span>&gt;</span>@Svg.Icon1<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"group1"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-2"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"value2"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"input-2"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Second value"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Second value"</span>&gt;</span>@Svg.Icon2<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"radio"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"group1"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"input-3"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"value3"</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"input-3"</span> <span class="hljs-attr">aria-label</span>=<span class="hljs-string">"Third value"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Third value"</span>&gt;</span>@Svg.Icon3<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">fieldset</span>&gt;</span></code></pre>
        <div class="docs-preview--example d-flex fd-column g24">
            <fieldset>
                <div class="d-flex ai-center g8">
                    <legend class="c-default s-label">Search Style</legend>
                    <div class="s-toggle-switch s-toggle-switch__multiple">
                        <input type="radio" name="example1" id="assistant" checked="" value="ai">
                        <label for="assistant" aria-label="AI Search" title="AI Search"><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconAssistant" aria-hidden="true"><path d="M8 3.5H5.24a.75.75 0 0 0-.75.75v3.01c0 .97-.62 1.8-1.49 2.1v1.27c.87.31 1.49 1.14 1.49 2.1v3.02c0 .41.33.75.75.75H8V18H5.24C4 18 2.99 17 2.99 15.75v-3.01c0-.4-.33-.74-.74-.74H1.5V8h.75c.4 0 .74-.33.74-.74V4.25c0-1.24 1-2.25 2.25-2.25H8zM14.75 2C15.99 2 17 3 17 4.25v3c0 .41.34.75.75.75h.75v4h-.75a.75.75 0 0 0-.75.75v3c0 1.24-1 2.25-2.25 2.25H12v-1.5h2.75c.41 0 .75-.34.75-.75v-3c0-.98.63-1.81 1.5-2.12V9.37a2.25 2.25 0 0 1-1.5-2.12v-3a.75.75 0 0 0-.75-.75H12V2zM8.4 9.75H6.65V8H8.4zm5 0h-1.75V8h1.75z"></path></svg></label>
                        <input type="radio" name="example1" id="search" value="lexical">
                        <label for="search" aria-label="Lexical Search" title="Lexical Search"><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconSearch" aria-hidden="true"><path d="M8.25 1a7.25 7.25 0 0 1 6.67 10.1l-1.17-1.17a5.75 5.75 0 1 0-.94 1.82l1.07 1.07 4.15 4.15-1.06 1.06-4.15-4.15A7.25 7.25 0 1 1 8.25 1"></path></svg></label>
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <div class="d-flex ai-center g8">
                    <legend class="c-default s-label">Export Type</legend>
                    <div class="s-toggle-switch s-toggle-switch__multiple">
                        <input type="radio" name="example2" id="xml" value="xml">
                        <label for="xml" aria-label="XML" title="XML"><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconCodeDocument" aria-hidden="true"><path d="M16 7.1v9.23c0 .86-.66 1.58-1.5 1.66l-.17.01h-8.8v-1.5h8.8q.16-.02.17-.17V7h-3.64V3.5h-5.2q-.15.02-.16.17V16.5H4V3.67C4 2.75 4.75 2 5.67 2H11zm-6.47 2.98-1.47 1.47 1.47 1.47-1.06 1.06-2-2a.75.75 0 0 1 0-1.06l2-2zm4 .94c.3.3.3.77 0 1.06l-2 2-1.06-1.06 1.47-1.47-1.47-1.47 1.06-1.06z"></path></svg></label>
                        <input type="radio" name="example2" id="pdf" checked="" value="pdf">
                        <label for="pdf" aria-label="PDF" title="PDF"><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconDocument" aria-hidden="true"><path d="M16 7.1v9.23c0 .86-.66 1.58-1.5 1.66l-.17.01h-8.8v-1.5h8.8q.16-.02.17-.17V7h-3.64V3.5h-5.2q-.15.02-.16.17V16.5H4V3.67C4 2.75 4.75 2 5.67 2H11zm-2.79 7.4H7V13h6.21zm0-3H7V10h6.21zm-4-3H7V7h2.22z"></path></svg></label>
                        <input type="radio" name="example2" id="json" value="json">
                        <label for="json" aria-label="JSON" title="JSON"><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconComposeDocument" aria-hidden="true"><path d="M14 16.33c0 .86-.66 1.58-1.5 1.66l-.17.01h-8.8v-1.5h8.8q.16-.02.17-.17V14.6H14zM10 3.5H3.67q-.16.02-.17.17V16.5H2V3.67C2 2.75 2.75 2 3.67 2H10zm1.21 11h-6.2V13h6.2zM8 12H5v-1.5h3zm6.72-9.25a2.5 2.5 0 0 1 3.53 0l.17.19c.8.98.75 2.42-.16 3.33L12.56 12H9V8.47zM10.5 9.09v1.41h1.44l3.71-3.73-1.41-1.42zM8 9.5H5V8h3zM9 7H5V5.5h4zm8.2-3.19a1 1 0 0 0-1.42 0l-.48.48L16.7 5.7l.48-.48a1 1 0 0 0 0-1.4"></path></svg></label>
                    </div>
                </div>
            </fieldset>
        </div>
    </div>
</section>


            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-toggle-switch"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-toggle-switch"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-toggle-switch"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-toggle-switch"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <div
                        class="s-popover s-popover__tooltip"
                        id="tooltip-feedback-positive"
                        role="tooltip">
                        <div class="s-popover--content">This page is useful</div>
                    </div>
                    <div
                        class="s-popover s-popover__tooltip"
                        id="tooltip-feedback-negative"
                        role="tooltip">
                        <div class="s-popover--content">This page needs improvement</div>
                    </div>
                    <div id="vote-feedback" class="s-vote">
                        <button
                            class="s-vote--btn"
                            type="submit"
                            form="quick-positive-feedback-toggle-switch"
                            aria-describedby="tooltip-feedback-positive"
                            aria-expanded="false"
                            data-controller="s-tooltip"
                            data-s-tooltip-placement="right"
                        >
                            <span class="s-btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteUp" aria-hidden="true"><path d="M10 3q.41.02.64.36l6.9 11.5a.75.75 0 1 1-1.28.78L10 5.21l-5.58 9.3h8.04v-.01h1.1l.97 1.5H3.1a.75.75 0 0 1-.65-1.13l6.9-11.5A.8.8 0 0 1 10 3"/></svg>
                            </span>
                            <span class="s-btn-icon-fill d-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteUpFill" aria-hidden="true"><path d="M10 3h.1a1 1 0 0 1 .42.21l.12.15 6.9 11.5.05.09v.03l.02.04q.04.12.04.26v.03q0 .13-.07.25v.02l-.03.04a1 1 0 0 1-.2.23l-.06.05-.04.01-.04.03-.04.01a1 1 0 0 1-.27.05H3a.75.75 0 0 1-.55-1.13l6.9-11.5A.8.8 0 0 1 10 3"/></svg>
                            </span>
                            <span class="v-visible-sr">upvote</span>
                        </button>
                        <button
                            class="s-vote--btn"
                            type="submit"
                            form="quick-negative-feedback-toggle-switch"
                            aria-describedby="tooltip-feedback-negative"
                            aria-expanded="false"
                            data-controller="s-tooltip"
                            data-s-tooltip-placement="right"
                        >
                            <span class="s-btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteDown" aria-hidden="true"><path d="M10 16a.8.8 0 0 1-.64-.36l-6.9-11.5a.75.75 0 1 1 1.28-.78L10 13.8l5.58-9.3H6.44L5.47 3H16.9a.75.75 0 0 1 .65 1.14l-6.9 11.5A.8.8 0 0 1 10 16"/></svg>
                            </span>
                            <span class="s-btn-icon-fill d-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteDownFill" aria-hidden="true"><path d="M10 16h-.1l-.1-.02a.8.8 0 0 1-.45-.34l-6.9-11.5-.04-.08-.01-.04L2.39 4a1 1 0 0 1-.04-.26V3.7q0-.14.06-.26l.01-.02.02-.04a1 1 0 0 1 .27-.27l.03-.02.05-.02.04-.02A1 1 0 0 1 3.1 3H17a.75.75 0 0 1 .54 1.14l-6.9 11.5A.8.8 0 0 1 10 16"/></svg>
                            </span>
                            <span class="v-visible-sr">downvote</span>
                        </button>
                    </div>
                </div>

                <form
                    class="w100 js-feedback-form"
                    name="feedback-toggle-switch"
                    method="POST"
                    data-netlify="true"
                    action="/success">
                    <fieldset class="d-flex fd-column fl-grow1 g16">
                        <legend class="fs-title fw-bold">How’d we do?</legend>
                        <div class="fs-body2">Anonymously upvote, downvote, or send additional feedback below.</div>

                        <textarea
                            class="s-textarea hmn1"
                            id="feedback-form"
                            name="additional-feedback"
                            placeholder="Tell us how we can improve this page…" required></textarea>

                        <div class="d-flex ai-center fd-row-reverse g8 jc-space-between mln6 sm:d-grid sm:grid__1 sm:ml0">
                            <button
                                type="submit"
                                class="s-btn as-start fl-shrink0">
                                Send feedback
                            </button>
                            <div class="d-flex fw-wrap g8 sm:d-grid sm:grid__1">
                                <a
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/components/toggle-switch.html"
                                    class="s-btn s-btn__clear s-btn__icon s-btn__sm">
                                    <svg aria-hidden="true" class="svg-icon iconPencilSm" width="14" height="14"  viewBox="0 0 14 14"><path fill="#F1B600" d="m2 10.12 6.37-6.43 1.88 1.88L3.88 12H2z"/><path fill="#E87C87" d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0"/></svg>
                                    Edit
                                </a>
                                <a
                                    href="https://github.com/StackExchange/Stacks/issues/new/choose"
                                    class="s-btn s-btn__clear s-btn__icon s-btn__sm">
                                    File an issue
                                </a>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div> -->

            <!-- <div class="ta-right">
                <a href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>
            </div> -->
