---
title: "Textarea"
description: "Multi-line inputs used by users to enter longer text portions."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-textarea--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=4537-49735&amp;m=dev"
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
                            
                                
                                    <code>.s-textarea</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                <em class="fc-black-350">N/A</em>
                            
                        </td>
                    
                    
                        <td>Base textarea style.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-textarea__sm</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                
                                
                                    <code>.s-textarea</code>
                                
                            
                        </td>
                    
                    
                        <td>Apply a small size.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-textarea__lg</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                
                                
                                    <code>.s-textarea</code>
                                
                            
                        </td>
                    
                    
                        <td>Apply a large size.</td>
                    
                </tr>
            
        </tbody>
    </table>
</div>


<!-- Reset all default values -->












</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="base-style">Base style</h2><a class="s-btn s-btn__clear" href="#base-style"><span class="v-visible-sr">Section titled Base style</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex fd-column gy4"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"example-item"</span>&gt;</span>Question body<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ps-relative"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-textarea w100"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-item"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"…"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-form-group">
                <label class="s-label" for="example-item7">Question body</label>
                <div class="d-flex ps-relative">
                    <textarea class="s-textarea ps-relative w100" id="example-item7" placeholder="e.g. The Stack Overflow glyph used to have 6 bars, but now…"></textarea>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="accessibility">Accessibility</h2><a class="s-btn s-btn__clear" href="#accessibility"><span class="v-visible-sr">Section titled Accessibility</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        It is recommended to follow the same accessibility guidance as the <a href="/product/components/inputs/#accessibility">Input component</a>. 
        Including marking Textarea's as <b>required</b> via the <code>.s-required-symbol</code> class.
    </p>
</section>

<section id="states" class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="validation-states">Validation states</h2><a class="s-btn s-btn__clear" href="#validation-states"><span class="v-visible-sr">Section titled Validation states</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Validation states provides the user feedback based on their interaction (or lack of interaction) with a textarea. These styles are applied by applying the appropriate class to the wrapping parent container.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="validation-classes">Validation classes</h3><a class="s-btn s-btn__clear" href="#validation-classes"><span class="v-visible-sr">Section titled Validation classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    
    
    
    


    




    


    


    


    




    




    



    


<div id="docs-table" class="overflow-x-auto s-anchors s-anchors__underlined" tabindex="0">
    <table class="docs-table s-table s-table__bx-simple">
        <thead>
            <tr>
                
                    <th scope="col" class="s-table--cell3">
                        Class
                    </th>
                
                
                    <th scope="col" class="s-table--cell2">
                        Applies to
                    </th>
                
                
                
                    <th scope="col" class="">
                        Description
                    </th>
                
            </tr>
        </thead>
        <tbody class="fs-caption">
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.has-warning</code>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">Parent element</span>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>Used to warn users that the value they’ve entered has a potential problem, but it doesn’t block them from proceeding.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.has-error</code>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">Parent element</span>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>Used to alert users that the value they’ve entered is incorrect, not filled in, or has a problem which will block them from proceeding.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.has-success</code>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">Parent element</span>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>Used to notify users that the value they’ve entered is fine or has been submitted successfully.</td>
                    
                </tr>
            
        </tbody>
    </table>
</div>


<!-- Reset all default values -->













    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="validation-examples">Validation examples</h3><a class="s-btn s-btn__clear" href="#validation-examples"><span class="v-visible-sr">Section titled Validation examples</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="warning">Warning</h4><a class="s-btn s-btn__clear" href="#warning"><span class="v-visible-sr">Section titled Warning</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-form-group has-warning"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"example-warning"</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ps-relative"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-textarea w100"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-warning"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Please describe your problem"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><br>        @Svg.Alert.With("s-input-icon")<br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-input-message"</span>&gt;</span>Consider entering a description to help us better help you.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-form-group has-warning">
                <label class="s-label" for="example-warning">Description</label>
                <div class="d-flex ps-relative">
                    <textarea class="s-textarea w100" id="example-warning" placeholder="Please describe your problem"></textarea>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconAlert s-input-icon" aria-hidden="true"><path d="M10 2q.41.01.64.37l8.76 14.58a.75.75 0 0 1-.65 1.14H1.25a.75.75 0 0 1-.65-1.14L9.36 2.37l.05-.09A.8.8 0 0 1 10 2M2.57 16.6h14.86L10 4.2zM11 15.52H9v-2h2zm0-2.97H9v-5.5h2z"></path></svg>
                </div>
                <p class="s-input-message">Consider entering a description to help us better help you.</p>
            </div>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="error">Error</h4><a class="s-btn s-btn__clear" href="#error"><span class="v-visible-sr">Section titled Error</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-form-group has-error"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"example-success"</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ps-relative"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-textarea w100"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-success"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Please describe your problem"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><br>        @Svg.AlertCircle.With("s-input-icon")<br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-input-message"</span>&gt;</span>A description must be provided.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-form-group has-error">
                <label class="s-label" for="example-success1">Description</label>
                <div class="d-flex ps-relative">
                    <textarea class="s-textarea w100" id="example-success1" placeholder="Please describe your problem"></textarea>
                    <svg aria-hidden="true" class="svg-icon iconAlertCircle s-input-icon" width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8s3.64-8 8-8 8 3.64 8 8-3.64 8-8 8M8 4v6h2V4zm0 8v2h2v-2z"></path></svg>
                </div>
                <p class="s-input-message">A description must be provided.</p>
            </div>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="success">Success</h4><a class="s-btn s-btn__clear" href="#success"><span class="v-visible-sr">Section titled Success</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-form-group has-success"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"example-success"</span>&gt;</span>Description<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ps-relative"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-textarea w100"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"example-success"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"Please describe your problem"</span>&gt;</span>How do you know your company is ready for a design system? How do you implement one without too many pain points? How do you efficiently maintain one once it’s built?<span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span><br>        @Svg.Checkmark.With("s-input-icon")<br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-input-message"</span>&gt;</span>Thanks for providing a description.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-form-group has-success">
                <label class="s-label" for="example-success2">Description</label>
                <div class="d-flex ps-relative">
                    <textarea class="s-textarea w100" id="example-success2" placeholder="Please describe your problem">How do you know your company is ready for a design system? How do you implement one without too many pain points? How do you efficiently maintain one once it’s built?</textarea>
                    <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconCheck s-input-icon" aria-hidden="true"><path d="m18.16 5-.53.53L7.55 15.61l-.53.53-5.03-5.03 1.06-1.06 3.97 3.97 9.55-9.55.53-.53z"></path></svg>
                </div>
                <p class="s-input-message">Thanks for providing a description.</p>
            </div>
        </div>
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="sizes">Sizes</h2><a class="s-btn s-btn__clear" href="#sizes"><span class="v-visible-sr">Section titled Sizes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    
    
    
    
    
    





    


    


    


    




    






    


<div id="textarea-sizes-table" class="overflow-x-auto s-anchors s-anchors__underlined" tabindex="0">
    <table class="docs-table s-table s-table__bx-simple">
        <thead>
            <tr>
                
                    <th scope="col" class="s-table--cell3">
                        Class
                    </th>
                
                
                    <th scope="col" class="s-table--cell2">
                        Name
                    </th>
                
                
                    <th scope="col" class="s-table--cell2">
                        Size
                    </th>
                
                
                    <th scope="col" class="">
                        Example
                    </th>
                
            </tr>
        </thead>
        <tbody class="fs-caption">
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-textarea__sm</code>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">Small</span>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">13px</span>
                                
                                
                            
                        </td>
                    
                    
                        <td><textarea placeholder="e.g. What is Stacks?" class="s-textarea s-textarea__sm"></textarea></td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                <em class="fc-black-350">N/A</em>
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">Default</span>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">14px</span>
                                
                                
                            
                        </td>
                    
                    
                        <td><textarea placeholder="e.g. What is Stacks?" class="s-textarea"></textarea></td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-textarea__lg</code>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">Large</span>
                                
                                
                            
                        </td>
                    
                    
                        <td>
                            
                                
                                    <span class="ff-mono fs-fine">18px</span>
                                
                                
                            
                        </td>
                    
                    
                        <td><textarea placeholder="e.g. What is Stacks?" class="s-textarea s-textarea__lg"></textarea></td>
                    
                </tr>
            
        </tbody>
    </table>
</div>


<!-- Reset all default values -->












</section>


            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-textarea"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-textarea"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-textarea"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-textarea"
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
                            form="quick-positive-feedback-textarea"
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
                            form="quick-negative-feedback-textarea"
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
                    name="feedback-textarea"
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
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/components/textarea.html"
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
