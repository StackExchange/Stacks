---
title: "Empty states"
description: "Empty states are used when there is no data to show. Ideally they orient the user by providing feedback based on the the user’s last interaction or communicate the benefits of a feature. When appropriate, they should explain the next steps the user should take and provide guidance with a clear call-to-action."
svelte: "https://beta.svelte.stackoverflow.design/?path=/docs/components-emptystate--docs"
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18807&amp;p=f&amp;m=dev"
---

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="classes">Classes</h2><a class="s-btn s-btn__clear" href="#classes"><span class="v-visible-sr">Section titled Classes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    
    
    
    
    


    




    



    


    




    




    



    


<div id="docs-table" class="overflow-x-auto s-anchors s-anchors__underlined" tabindex="0">
    <table class="docs-table s-table s-table__bx-simple">
        <thead>
            <tr>
                
                    <th scope="col" class="s-table--cell3">
                        Class
                    </th>
                
                
                
                
                    <th scope="col" class="">
                        Description
                    </th>
                
            </tr>
        </thead>
        <tbody class="fs-caption">
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.s-empty-state</code>
                                
                                
                            
                        </td>
                    
                    
                    
                    
                        <td>Base empty state style.</td>
                    
                </tr>
            
        </tbody>
    </table>
</div>


<!-- Reset all default values -->












</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="no-data-or-results">No data or results</h2><a class="s-btn s-btn__clear" href="#no-data-or-results"><span class="v-visible-sr">Section titled No data or results</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        Typical use-case for an empty state is when a feature has no data or a search/filter operation yields no results.
    </p>
    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="actionable">Actionable</h3><a class="s-btn s-btn__clear" href="#actionable"><span class="v-visible-sr">Section titled Actionable</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        If the user is able to address the situation resulting in an empty state, it is appropriate to include a button for them to do so.
    </p>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-empty-state wmx4 p48"</span>&gt;</span><br>    @Svg.Spot.Empty.With("native")<br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-empty-state--title"</span>&gt;</span>No questions match your result.<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Try refining your search term or trying something more general.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-btn s-btn__tonal"</span>&gt;</span>Clear filters<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-empty-state wmx4 p48">
                <svg width="140" height="140" viewBox="0 0 140 140" class="svg-spot SpotEmpty native" aria-hidden="true"><rect width="100" height="35" x="10" y="95" fill="#9d9cff"></rect><path fill="var(--purple-600)" d="M20 110h80v-5H20zM20 120h50v-5H20zM110 95v4L10 96.46V95z"></path><rect width="100" height="35" x="30" y="60" fill="#0f2466"></rect><path fill="var(--blue-400)" d="M130 60v4L30 61.46V60zM40 75h80v-5H40zM40 85h50v-5H40z"></path><path fill="#998b7a" d="M80 60H10V25h70zm10-2h-5v-3h5zm10 0h-5v-3h5zm10 0h-5v-3h5zm-20-8h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5zM90 40h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5zM90 30h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5z"></path><path fill="var(--black-600)" d="M67 50H18v-5h49zm8-10H18v-5h57z"></path></svg>
                <h4 class="s-empty-state--title">No questions match your result.</h4>
                <p>Try refining your search term or trying something more general.</p>
                <button class="s-btn s-btn__tonal">Clear filters</button>
            </div>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="non-actionable">Non-actionable</h3><a class="s-btn s-btn__clear" href="#non-actionable"><span class="v-visible-sr">Section titled Non-actionable</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        If the user can’t take an action to fix the situation, it’s appropriate to set expectations. 
    </p>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-empty-state wmx4 p48"</span>&gt;</span><br>    @Svg.Spot.Empty.With("native")<br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-empty-state--title"</span>&gt;</span>User trends not ready<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Please check back in a few days.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-empty-state wmx4 p48">
                <svg width="140" height="140" viewBox="0 0 140 140" class="svg-spot SpotEmpty native" aria-hidden="true"><rect width="100" height="35" x="10" y="95" fill="#9d9cff"></rect><path fill="var(--purple-600)" d="M20 110h80v-5H20zM20 120h50v-5H20zM110 95v4L10 96.46V95z"></path><rect width="100" height="35" x="30" y="60" fill="#0f2466"></rect><path fill="var(--blue-400)" d="M130 60v4L30 61.46V60zM40 75h80v-5H40zM40 85h50v-5H40z"></path><path fill="#998b7a" d="M80 60H10V25h70zm10-2h-5v-3h5zm10 0h-5v-3h5zm10 0h-5v-3h5zm-20-8h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5zM90 40h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5zM90 30h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5z"></path><path fill="var(--black-600)" d="M67 50H18v-5h49zm8-10H18v-5h57z"></path></svg>
                <h4 class="s-empty-state--title">User trends not ready</h4>
                <p>Please check back in a few days.</p>
            </div>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="minimal">Minimal</h3><a class="s-btn s-btn__clear" href="#minimal"><span class="v-visible-sr">Section titled Minimal</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        If desired, both the title and call-to-action may be omitted for a minimal look.
    </p>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-empty-state wmx4 p48"</span>&gt;</span><br>    @Svg.Spot.Empty.With("native")<br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>There’s no data associated with <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-link s-link__underlined"</span>&gt;</span>this account<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>.<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
            <div class="s-empty-state wmx4 p48">
                <svg width="140" height="140" viewBox="0 0 140 140" class="svg-spot SpotEmpty native" aria-hidden="true"><rect width="100" height="35" x="10" y="95" fill="#9d9cff"></rect><path fill="var(--purple-600)" d="M20 110h80v-5H20zM20 120h50v-5H20zM110 95v4L10 96.46V95z"></path><rect width="100" height="35" x="30" y="60" fill="#0f2466"></rect><path fill="var(--blue-400)" d="M130 60v4L30 61.46V60zM40 75h80v-5H40zM40 85h50v-5H40z"></path><path fill="#998b7a" d="M80 60H10V25h70zm10-2h-5v-3h5zm10 0h-5v-3h5zm10 0h-5v-3h5zm-20-8h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5zM90 40h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5zM90 30h-5v-5h5zm10 0h-5v-5h5zm10 0h-5v-5h5z"></path><path fill="var(--black-600)" d="M67 50H18v-5h49zm8-10H18v-5h57z"></path></svg>
                <p>There’s no data associated with <a href="#" class="s-link s-link__underlined">this account</a>.</p>
            </div>
        </div>
    </div>
</section>

            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-empty-states"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-empty-states"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-empty-states"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-empty-states"
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
                            form="quick-positive-feedback-empty-states"
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
                            form="quick-negative-feedback-empty-states"
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
                    name="feedback-empty-states"
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
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/components/empty-states.html"
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
