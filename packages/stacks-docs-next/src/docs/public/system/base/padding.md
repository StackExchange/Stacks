---
title: "Padding"
description: "Stacks provides atomic classes to override padding."
---

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="padding">Padding</h2><a class="s-btn s-btn__clear" href="#padding"><span class="v-visible-sr">Section titled Padding</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Immutable padding utilities are based on a global white space scale defined with custom properties. These can dramatically help reduce the size of large stylesheets and allow for greater flexibility and quicker iteration when designing in the browser.</p>
    <p class="docs-copy">Padding should never be declared outside of these utilities. This is meant to help create consistency and avoid magic numbers. If, for some reason, the default white space scale does not suit your design, customize and extend it before use.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="padding-class-abbreviations">Padding class abbreviations</h3><a class="s-btn s-btn__clear" href="#padding-class-abbreviations"><span class="v-visible-sr">Section titled Padding class abbreviations</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="overflow-x-auto mb32" tabindex="0">
        <table class="docs-table s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th class="s-table--cell2" scope="col">Abbreviation</th>
                    <th scope="col">Property</th>
                    <th class="s-table--cell2 ta-center" scope="col">Responsive?</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <th scope="row">p</th>
                        <td>padding</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr>
                        <th scope="row">pt</th>
                        <td>padding-top</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr>
                        <th scope="row">pr</th>
                        <td>padding-right</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr>
                        <th scope="row">pb</th>
                        <td>padding-bottom</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr>
                        <th scope="row">pl</th>
                        <td>padding-left</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr>
                        <th scope="row">px</th>
                        <td>padding x-axis</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
                    <tr>
                        <th scope="row">py</th>
                        <td>padding y-axis</td>
                        <td class="ta-center">
                            
                                <svg aria-hidden="true" class="svg-icon iconCheckmark fc-green-400" width="18" height="18" viewBox="0 0 18 18"><path d="M16 4.41 14.59 3 6 11.59 2.41 8 1 9.41l5 5z"></path></svg>
                            
                        </td>
                    </tr>
                
            </tbody>
        </table>
    </div>

<div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="padding-classes">Padding classes</h3><a class="s-btn s-btn__clear" href="#padding-classes"><span class="v-visible-sr">Section titled Padding classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>



<div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"pt4 pr64 pb64 pl64"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="pt4 pr64 pb64 pl64 bg-black-200 p12 ba bc-black-225">
                Example div with different paddings applied
            </div>
        </div>
    </div>
    <div class="overflow-x-auto mb32" tabindex="0">
        <table class="docs-table s-table s-table__bx-simple">
            <thead>
                <tr>
                    <th scope="col"></th>
                    
                        <th scope="col" class="ta-center ff-mono">0</th>
                    
                        <th scope="col" class="ta-center ff-mono">1px</th>
                    
                        <th scope="col" class="ta-center ff-mono">2px</th>
                    
                        <th scope="col" class="ta-center ff-mono">4px</th>
                    
                        <th scope="col" class="ta-center ff-mono">6px</th>
                    
                        <th scope="col" class="ta-center ff-mono">8px</th>
                    
                        <th scope="col" class="ta-center ff-mono">12px</th>
                    
                        <th scope="col" class="ta-center ff-mono">16px</th>
                    
                        <th scope="col" class="ta-center ff-mono">24px</th>
                    
                        <th scope="col" class="ta-center ff-mono">32px</th>
                    
                        <th scope="col" class="ta-center ff-mono">48px</th>
                    
                        <th scope="col" class="ta-center ff-mono">64px</th>
                    
                        <th scope="col" class="ta-center ff-mono">96px</th>
                    
                        <th scope="col" class="ta-center ff-mono">128px</th>
                    
                        <th scope="col" class="ta-center ff-mono">50%</th>
                    
                        <th scope="col" class="ta-center ff-mono">100%</th>
                    
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <th scope="row">p</th>
                        
                            
                                <td><code>.p0</code></td>
                            
                        
                            
                                <td><code>.p1</code></td>
                            
                        
                            
                                <td><code>.p2</code></td>
                            
                        
                            
                                <td><code>.p4</code></td>
                            
                        
                            
                                <td><code>.p6</code></td>
                            
                        
                            
                                <td><code>.p8</code></td>
                            
                        
                            
                                <td><code>.p12</code></td>
                            
                        
                            
                                <td><code>.p16</code></td>
                            
                        
                            
                                <td><code>.p24</code></td>
                            
                        
                            
                                <td><code>.p32</code></td>
                            
                        
                            
                                <td><code>.p48</code></td>
                            
                        
                            
                                <td><code>.p64</code></td>
                            
                        
                            
                                <td><code>.p96</code></td>
                            
                        
                            
                                <td><code>.p128</code></td>
                            
                        
                            
                                <td><code>.p50</code></td>
                            
                        
                            
                                <td><code>.p100</code></td>
                            
                        
                    </tr>
                
                    <tr>
                        <th scope="row">pt</th>
                        
                            
                                <td><code>.pt0</code></td>
                            
                        
                            
                                <td><code>.pt1</code></td>
                            
                        
                            
                                <td><code>.pt2</code></td>
                            
                        
                            
                                <td><code>.pt4</code></td>
                            
                        
                            
                                <td><code>.pt6</code></td>
                            
                        
                            
                                <td><code>.pt8</code></td>
                            
                        
                            
                                <td><code>.pt12</code></td>
                            
                        
                            
                                <td><code>.pt16</code></td>
                            
                        
                            
                                <td><code>.pt24</code></td>
                            
                        
                            
                                <td><code>.pt32</code></td>
                            
                        
                            
                                <td><code>.pt48</code></td>
                            
                        
                            
                                <td><code>.pt64</code></td>
                            
                        
                            
                                <td><code>.pt96</code></td>
                            
                        
                            
                                <td><code>.pt128</code></td>
                            
                        
                            
                                <td><code>.pt50</code></td>
                            
                        
                            
                                <td><code>.pt100</code></td>
                            
                        
                    </tr>
                
                    <tr>
                        <th scope="row">pr</th>
                        
                            
                                <td><code>.pr0</code></td>
                            
                        
                            
                                <td><code>.pr1</code></td>
                            
                        
                            
                                <td><code>.pr2</code></td>
                            
                        
                            
                                <td><code>.pr4</code></td>
                            
                        
                            
                                <td><code>.pr6</code></td>
                            
                        
                            
                                <td><code>.pr8</code></td>
                            
                        
                            
                                <td><code>.pr12</code></td>
                            
                        
                            
                                <td><code>.pr16</code></td>
                            
                        
                            
                                <td><code>.pr24</code></td>
                            
                        
                            
                                <td><code>.pr32</code></td>
                            
                        
                            
                                <td><code>.pr48</code></td>
                            
                        
                            
                                <td><code>.pr64</code></td>
                            
                        
                            
                                <td><code>.pr96</code></td>
                            
                        
                            
                                <td><code>.pr128</code></td>
                            
                        
                            
                                <td><code>.pr50</code></td>
                            
                        
                            
                                <td><code>.pr100</code></td>
                            
                        
                    </tr>
                
                    <tr>
                        <th scope="row">pb</th>
                        
                            
                                <td><code>.pb0</code></td>
                            
                        
                            
                                <td><code>.pb1</code></td>
                            
                        
                            
                                <td><code>.pb2</code></td>
                            
                        
                            
                                <td><code>.pb4</code></td>
                            
                        
                            
                                <td><code>.pb6</code></td>
                            
                        
                            
                                <td><code>.pb8</code></td>
                            
                        
                            
                                <td><code>.pb12</code></td>
                            
                        
                            
                                <td><code>.pb16</code></td>
                            
                        
                            
                                <td><code>.pb24</code></td>
                            
                        
                            
                                <td><code>.pb32</code></td>
                            
                        
                            
                                <td><code>.pb48</code></td>
                            
                        
                            
                                <td><code>.pb64</code></td>
                            
                        
                            
                                <td><code>.pb96</code></td>
                            
                        
                            
                                <td><code>.pb128</code></td>
                            
                        
                            
                                <td><code>.pb50</code></td>
                            
                        
                            
                                <td><code>.pb100</code></td>
                            
                        
                    </tr>
                
                    <tr>
                        <th scope="row">pl</th>
                        
                            
                                <td><code>.pl0</code></td>
                            
                        
                            
                                <td><code>.pl1</code></td>
                            
                        
                            
                                <td><code>.pl2</code></td>
                            
                        
                            
                                <td><code>.pl4</code></td>
                            
                        
                            
                                <td><code>.pl6</code></td>
                            
                        
                            
                                <td><code>.pl8</code></td>
                            
                        
                            
                                <td><code>.pl12</code></td>
                            
                        
                            
                                <td><code>.pl16</code></td>
                            
                        
                            
                                <td><code>.pl24</code></td>
                            
                        
                            
                                <td><code>.pl32</code></td>
                            
                        
                            
                                <td><code>.pl48</code></td>
                            
                        
                            
                                <td><code>.pl64</code></td>
                            
                        
                            
                                <td><code>.pl96</code></td>
                            
                        
                            
                                <td><code>.pl128</code></td>
                            
                        
                            
                                <td><code>.pl50</code></td>
                            
                        
                            
                                <td><code>.pl100</code></td>
                            
                        
                    </tr>
                
                    <tr>
                        <th scope="row">px</th>
                        
                            
                                
                                    <td>-</td>
                                
                            
                        
                            
                                
                                    <td><code>.px1</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px2</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px4</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px6</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px8</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px12</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px16</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px24</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px32</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px48</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px64</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px96</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.px128</code></td>
                                
                            
                        
                            
                                
                                    <td>-</td>
                                
                            
                        
                            
                                
                                    <td>-</td>
                                
                            
                        
                    </tr>
                
                    <tr>
                        <th scope="row">py</th>
                        
                            
                                
                                    <td>-</td>
                                
                            
                        
                            
                                
                                    <td><code>.py1</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py2</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py4</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py6</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py8</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py12</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py16</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py24</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py32</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py48</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py64</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py96</code></td>
                                
                            
                        
                            
                                
                                    <td><code>.py128</code></td>
                                
                            
                        
                            
                                
                                    <td>-</td>
                                
                            
                        
                            
                                
                                    <td>-</td>
                                
                            
                        
                    </tr>
                
            </tbody>
        </table>
    </div>
</section>


            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-padding"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-padding"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-padding"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-padding"
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
                            form="quick-positive-feedback-padding"
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
                            form="quick-negative-feedback-padding"
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
                    name="feedback-padding"
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
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/base/padding.html"
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
