---
title: "Code blocks"
description: "Stacks provides styling for code blocks with syntax highlighting provided by highlight.js. Special care was taken to make sure our light and dark themes felt like Stack Overflow while maintaining near AAA color contrasts and still being distinguishable for those with a color vision deficiency."
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
                            
                                
                                    <code>.s-code-block</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                <em class="fc-black-350">N/A</em>
                            
                        </td>
                    
                    
                        <td>Base code block style.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.linenums</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                
                                
                                    <code>.s-code-block</code>
                                
                            
                        </td>
                    
                    
                        <td>Adds a line numbers column to the code block.</td>
                    
                </tr>
            
                <tr>
                    
                        <td>
                            
                                
                                    <code>.linenums:&lt;n&gt;</code>
                                
                                
                            
                        </td>
                    
                    
                    
                        <td>
                            
                                
                                
                                    <code>.s-code-block</code>
                                
                            
                        </td>
                    
                    
                        <td>Adds a line numbers column to the code block starting at a number <code>&lt;n&gt;</code>.</td>
                    
                </tr>
            
        </tbody>
    </table>
</div>


<!-- Reset all default values -->












</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="language-examples">Language examples</h2><a class="s-btn s-btn__clear" href="#language-examples"><span class="v-visible-sr">Section titled Language examples</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">The following examples are a small subset of the languages that <a href="https://highlightjs.org/static/demo/"><code>highlight.js</code></a> supports.</p>
    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="html">HTML</h3><a class="s-btn s-btn__clear" href="#html"><span class="v-visible-sr">Section titled HTML</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-html"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex gy4 fd-column"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"question-title"</span>&gt;</span>Question title<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex ps-relative"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"question-title"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"e.g. Why doesn’t Stack Overflow use a custom web font?"</span>/&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="javascript">JavaScript</h3><a class="s-btn s-btn__clear" href="#javascript"><span class="v-visible-sr">Section titled JavaScript</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-javascript"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-javascript s-code-block" tabindex="0"><code class="language-javascript s-code-block"><span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>, { <span class="hljs-title class_">Component</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span><br><span class="hljs-keyword">import</span> { <span class="hljs-variable constant_">IP</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'../constants/IP'</span><br><span class="hljs-keyword">import</span> { withAuth0 } <span class="hljs-keyword">from</span> <span class="hljs-string">'@auth0/auth0-react'</span>;<br><br><span class="hljs-keyword">class</span> <span class="hljs-title class_">AddATournament</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">Component</span> {<br>    <span class="hljs-title function_">componentDidMount</span>(<span class="hljs-params"></span>) {<br>        <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">myNewListOfAllTournamentsWithAuth</span>()<br>    }<br>}<br><br><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">withAuth0</span>(<span class="hljs-title class_">AddATournament</span>);</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="css">CSS</h3><a class="s-btn s-btn__clear" href="#css"><span class="v-visible-sr">Section titled CSS</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-css"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-css s-code-block" tabindex="0"><code class="language-css s-code-block"><span class="hljs-selector-class">.s-input</span>,<br><span class="hljs-selector-class">.s-textarea</span> {<br>    -webkit-<span class="hljs-attribute">appearance</span>: none;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.6em</span> <span class="hljs-number">0.7em</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-built_in">var</span>(--bc-darker);<br>    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;<br>    <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--white);<br>    <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--fc-dark);<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">13px</span>;<br>    <span class="hljs-attribute">font-family</span>: inherit;<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">1.15384615</span>;<br>    <span class="hljs-attribute">scrollbar-color</span>: <span class="hljs-built_in">var</span>(--scrollbar) transparent;<br>}<br><span class="hljs-keyword">@supports</span> (<span class="hljs-attribute">-webkit-overflow-scrolling</span>: touch) {<br>    <span class="hljs-selector-class">.s-input</span>,<br>    <span class="hljs-selector-class">.s-textarea</span> {<br>        <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;<br>        <span class="hljs-attribute">padding</span>: <span class="hljs-number">0.36em</span> <span class="hljs-number">0.55em</span>;<br>    }<br>    <span class="hljs-selector-class">.s-input</span>::-webkit-input-placeholder,<br>    .s-textarea::-webkit-input-placeholder {<br>        <span class="hljs-attribute">line-height</span>: normal <span class="hljs-meta">!important</span>;<br>    }<br>}</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="java">Java</h3><a class="s-btn s-btn__clear" href="#java"><span class="v-visible-sr">Section titled Java</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-java"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-java s-code-block" tabindex="0"><code class="language-java s-code-block"><span class="hljs-keyword">package</span> l2f.gameserver.model;<br><br><span class="hljs-keyword">public</span> <span class="hljs-keyword">abstract</span> <span class="hljs-keyword">strictfp</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">L2Char</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_">L2Object</span> {<br>  <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-keyword">final</span> <span class="hljs-type">Short</span> <span class="hljs-variable">ERROR</span> <span class="hljs-operator">=</span> <span class="hljs-number">0x0001</span>;<br><br>  <span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title function_">moveTo</span><span class="hljs-params">(<span class="hljs-type">int</span> x, <span class="hljs-type">int</span> y, <span class="hljs-type">int</span> z)</span> {<br>    _ai = <span class="hljs-literal">null</span>;<br>    log(<span class="hljs-string">"Should not be called"</span>);<br>    <span class="hljs-keyword">if</span> (<span class="hljs-number">1</span> &gt; <span class="hljs-number">5</span>) { <span class="hljs-comment">// what?</span><br>      <span class="hljs-keyword">return</span>;<br>    }<br>  }<br>}</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="ruby">Ruby</h3><a class="s-btn s-btn__clear" href="#ruby"><span class="v-visible-sr">Section titled Ruby</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-ruby"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-ruby s-code-block" tabindex="0"><code class="language-ruby s-code-block"><span class="hljs-comment"># The Greeter class</span><br><span class="hljs-keyword">class</span> <span class="hljs-title class_">Greeter</span><br>  <span class="hljs-keyword">def</span> <span class="hljs-title function_">initialize</span>(<span class="hljs-params">name</span>)<br>    <span class="hljs-variable">@name</span> = name.capitalize<br>  <span class="hljs-keyword">end</span><br><br>  <span class="hljs-keyword">def</span> <span class="hljs-title function_">salute</span><br>    puts <span class="hljs-string">"Hello <span class="hljs-subst">#{<span class="hljs-variable">@name</span>}</span>!"</span><br>  <span class="hljs-keyword">end</span><br><span class="hljs-keyword">end</span><br><br>g = <span class="hljs-title class_">Greeter</span>.new(<span class="hljs-string">"world"</span>)<br>g.salute</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="python">Python</h3><a class="s-btn s-btn__clear" href="#python"><span class="v-visible-sr">Section titled Python</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-python"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-python s-code-block" tabindex="0"><code class="language-python s-code-block"><span class="hljs-keyword">def</span> <span class="hljs-title function_">all_indices</span>(<span class="hljs-params">value, qlist</span>):<br>    indices = []<br>    idx = -<span class="hljs-number">1</span><br>    <span class="hljs-keyword">while</span> <span class="hljs-literal">True</span>:<br>        <span class="hljs-keyword">try</span>:<br>            idx = qlist.index(value, idx+<span class="hljs-number">1</span>)<br>            indices.append(idx)<br>        <span class="hljs-keyword">except</span> ValueError:<br>            <span class="hljs-keyword">break</span><br>    <span class="hljs-keyword">return</span> indices<br><br>all_indices(<span class="hljs-string">"foo"</span>, [<span class="hljs-string">"foo"</span>,<span class="hljs-string">"bar"</span>,<span class="hljs-string">"baz"</span>,<span class="hljs-string">"foo"</span>])</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="objective-c">Objective-C</h3><a class="s-btn s-btn__clear" href="#objective-c"><span class="v-visible-sr">Section titled Objective-C</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-objectivec"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-objectivec s-code-block" tabindex="0"><code class="language-objectivec s-code-block"><span class="hljs-meta">#import <span class="hljs-string">&lt;UIKit/UIKit.h&gt;</span></span><br><span class="hljs-meta">#import <span class="hljs-string">"Dependency.h"</span></span><br><br><span class="hljs-class"><span class="hljs-keyword">@protocol</span> <span class="hljs-title">WorldDataSource</span></span><br><span class="hljs-keyword">@optional</span><br>- (<span class="hljs-built_in">NSString</span>*)worldName;<br><span class="hljs-keyword">@required</span><br>- (<span class="hljs-type">BOOL</span>)allowsToLive;<br><span class="hljs-keyword">@end</span><br><br><span class="hljs-keyword">@property</span> (<span class="hljs-keyword">nonatomic</span>, <span class="hljs-keyword">readonly</span>) <span class="hljs-built_in">NSString</span> *title;<br>- (<span class="hljs-keyword">IBAction</span>) show;<br><span class="hljs-keyword">@end</span><br><br>- (<span class="hljs-built_in">UITextField</span> *) userName {<br>    <span class="hljs-built_in">UITextField</span> *retval = <span class="hljs-literal">nil</span>;<br>    <span class="hljs-keyword">@synchronized</span>(<span class="hljs-keyword">self</span>) {<br>        retval = [[userName <span class="hljs-keyword">retain</span>] autorelease];<br>    }<br>    <span class="hljs-keyword">return</span> retval;<br>}<br><br>- (<span class="hljs-type">void</span>) setUserName:(<span class="hljs-built_in">UITextField</span> *)userName_ {<br>    <span class="hljs-keyword">@synchronized</span>(<span class="hljs-keyword">self</span>) {<br>      [userName_ <span class="hljs-keyword">retain</span>];<br>      [userName release];<br>      userName = userName_;<br>    }<br>}</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="swift">Swift</h3><a class="s-btn s-btn__clear" href="#swift"><span class="v-visible-sr">Section titled Swift</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-swift"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-swift s-code-block" tabindex="0"><code class="language-swift s-code-block"><span class="hljs-keyword">import</span> Foundation<br><br><span class="hljs-keyword">@objc</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">Person</span>: <span class="hljs-title class_ inherited__">Entity</span> {<br>  <span class="hljs-keyword">var</span> name: <span class="hljs-type">String</span>!<br>  <span class="hljs-keyword">var</span> age:  <span class="hljs-type">Int</span>!<br><br>  <span class="hljs-keyword">init</span>(<span class="hljs-params">name</span>: <span class="hljs-type">String</span>, <span class="hljs-params">age</span>: <span class="hljs-type">Int</span>) {<br>    <span class="hljs-comment">/* <span class="hljs-comment">/* ... */</span> */</span><br>  }<br><br>  <span class="hljs-comment">// Return a descriptive string for this person</span><br>  <span class="hljs-keyword">func</span> <span class="hljs-title function_">description</span>(<span class="hljs-params">offset</span>: <span class="hljs-type">Int</span> <span class="hljs-operator">=</span> <span class="hljs-number">0</span>) -&gt; <span class="hljs-type">String</span> {<br>    <span class="hljs-keyword">return</span> <span class="hljs-string">"<span class="hljs-subst">\(name)</span> is <span class="hljs-subst">\(age <span class="hljs-operator">+</span> offset)</span> years old"</span><br>  }<br>}</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="less">Less</h3><a class="s-btn s-btn__clear" href="#less"><span class="v-visible-sr">Section titled Less</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-less"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-less s-code-block" tabindex="0"><code class="language-less s-code-block"><span class="hljs-keyword">@import</span> <span class="hljs-string">"fruits"</span>;<br><br><span class="hljs-variable">@rhythm:</span> <span class="hljs-number">1.5em</span>;<br><br><span class="hljs-keyword">@media</span> screen <span class="hljs-keyword">and</span> (<span class="hljs-attribute">min-resolution</span>: <span class="hljs-number">2dppx</span>) {<br>    <span class="hljs-selector-tag">body</span> {<span class="hljs-attribute">font-size</span>: <span class="hljs-number">125%</span>}<br>}<br><br><span class="hljs-selector-tag">section</span> &gt; <span class="hljs-selector-class">.foo</span> + <span class="hljs-selector-id">#bar</span><span class="hljs-selector-pseudo">:hover</span> <span class="hljs-selector-attr">[href*=<span class="hljs-string">"less"</span>]</span> {<br>    <span class="hljs-attribute">margin</span>:     <span class="hljs-variable">@rhythm</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-variable">@rhythm</span>;<br>    <span class="hljs-attribute">padding</span>:    <span class="hljs-built_in">calc</span>(<span class="hljs-number">5%</span> + <span class="hljs-number">20px</span>);<br>    <span class="hljs-attribute">background</span>: <span class="hljs-number">#f00ba7</span> url(<span class="hljs-string">http://placehold.alpha-centauri/42.png</span>) no-repeat;<br>    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">linear-gradient</span>(-<span class="hljs-number">135deg</span>, wheat, fuchsia) <span class="hljs-meta">!important</span> ;<br>    <span class="hljs-attribute">background-blend-mode</span>: multiply;<br>}<br><br><span class="hljs-keyword">@font-face</span> {<br>    <span class="hljs-attribute">font-family</span>: <span class="hljs-comment">/* ? */</span> <span class="hljs-string">'Omega'</span>;<br>    <span class="hljs-attribute">src</span>: url(<span class="hljs-string">'../fonts/omega-webfont.woff?v=2.0.2'</span>);<br>}<br><br><span class="hljs-selector-class">.icon-baz</span><span class="hljs-selector-pseudo">::before</span> {<br>    <span class="hljs-attribute">display</span>:     inline-block;<br>    <span class="hljs-attribute">font-family</span>: <span class="hljs-string">"Omega"</span>, Alpha, sans-serif;<br>    <span class="hljs-attribute">content</span>:     <span class="hljs-string">"\f085"</span>;<br>    <span class="hljs-attribute">color</span>:       <span class="hljs-built_in">rgba</span>(<span class="hljs-number">98</span>, <span class="hljs-number">76</span> <span class="hljs-comment">/* or 54 */</span>, <span class="hljs-number">231</span>, .<span class="hljs-number">75</span>);<br>}</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="json">Json</h3><a class="s-btn s-btn__clear" href="#json"><span class="v-visible-sr">Section titled Json</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-json"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-json s-code-block" tabindex="0"><code class="language-json s-code-block"><span class="hljs-punctuation">[</span><br>  <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"title"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"apples"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"count"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">12000</span><span class="hljs-punctuation">,</span> <span class="hljs-number">20000</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"description"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><span class="hljs-attr">"text"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"..."</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">"sensitive"</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"title"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"oranges"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"count"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">17500</span><span class="hljs-punctuation">,</span> <span class="hljs-literal"><span class="hljs-keyword">null</span></span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"description"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><span class="hljs-attr">"text"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"..."</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">"sensitive"</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">]</span></code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="c-sharp">C Sharp</h3><a class="s-btn s-btn__clear" href="#c-sharp"><span class="v-visible-sr">Section titled C Sharp</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-csharp"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-csharp s-code-block" tabindex="0"><code class="language-csharp s-code-block"><span class="hljs-keyword">using</span> System.IO.Compression;<br><br><span class="hljs-meta">#<span class="hljs-keyword">pragma</span> <span class="hljs-keyword">warning</span> disable 414, 3021</span><br><br><span class="hljs-keyword">namespace</span> <span class="hljs-title">MyApplication</span><br>{<br>    [<span class="hljs-meta">Obsolete(<span class="hljs-string">"..."</span>)</span>]<br>    <span class="hljs-keyword">class</span> <span class="hljs-title">Program</span> : <span class="hljs-title">IInterface</span><br>    {<br>        <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-title">List</span>&lt;<span class="hljs-title">int</span>&gt; <span class="hljs-title">JustDoIt</span>(<span class="hljs-params"><span class="hljs-built_in">int</span> count</span>)</span><br>        {<br>            Console.WriteLine(<span class="hljs-string">$"Hello <span class="hljs-subst">{Name}</span>!"</span>);<br>            <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> List&lt;<span class="hljs-built_in">int</span>&gt;(<span class="hljs-keyword">new</span> <span class="hljs-built_in">int</span>[] { <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span> })<br>        }<br>    }<br>}</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="sql">SQL</h3><a class="s-btn s-btn__clear" href="#sql"><span class="v-visible-sr">Section titled SQL</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-sql"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-sql s-code-block" tabindex="0"><code class="language-sql s-code-block"><span class="hljs-keyword">CREATE TABLE</span> "topic" (<br>    "id" serial <span class="hljs-keyword">NOT NULL</span> <span class="hljs-keyword">PRIMARY KEY</span>,<br>    "forum_id" <span class="hljs-type">integer</span> <span class="hljs-keyword">NOT NULL</span>,<br>    "subject" <span class="hljs-type">varchar</span>(<span class="hljs-number">255</span>) <span class="hljs-keyword">NOT NULL</span><br>);<br><span class="hljs-keyword">ALTER TABLE</span> "topic"<br><span class="hljs-keyword">ADD CONSTRAINT</span> forum_id <span class="hljs-keyword">FOREIGN KEY</span> ("forum_id")<br><span class="hljs-keyword">REFERENCES</span> "forum" ("id");<br><br><span class="hljs-comment">-- Initials</span><br><span class="hljs-keyword">insert into</span> "topic" ("forum_id", "subject")<br><span class="hljs-keyword">values</span> (<span class="hljs-number">2</span>, <span class="hljs-string">'D''artagnian'</span>);</code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="diff">Diff</h3><a class="s-btn s-btn__clear" href="#diff"><span class="v-visible-sr">Section titled Diff</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-diff"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-diff s-code-block" tabindex="0"><code class="language-diff s-code-block"><span class="hljs-comment">Index: languages/ini.js</span><br><span class="hljs-comment">===================================================================</span><br><span class="hljs-comment">--- languages/ini.js    (revision 199)</span><br><span class="hljs-comment">+++ languages/ini.js    (revision 200)</span><br><span class="hljs-meta">@@ -1,8 +1,7 @@</span><br> hljs.LANGUAGES.ini =<br> {<br>   case_insensitive: true,<br><span class="hljs-deletion">-  defaultMode:</span><br><span class="hljs-deletion">-  {</span><br><span class="hljs-addition">+  defaultMode: {</span><br>     contains: ['comment', 'title', 'setting'],<br>     illegal: '[^\\s]'<br>   },<br><br><span class="hljs-comment">*** /path/to/original timestamp</span><br><span class="hljs-comment">--- /path/to/new      timestamp</span><br><span class="hljs-comment">***************</span><br><span class="hljs-meta">*** 1,3 ****</span><br><span class="hljs-meta">--- 1,9 ----</span><br><span class="hljs-addition">+ This is an important</span><br><span class="hljs-addition">+ notice! It should</span><br><span class="hljs-addition">+ therefore be located at</span><br><span class="hljs-addition">+ the beginning of this</span><br><span class="hljs-addition">+ document!</span><br><br><span class="hljs-addition">! compress the size of the</span><br><span class="hljs-addition">! changes.</span><br><br>  It is important to spell</code></pre>
        </div>
    </div>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="line-numbers">Line numbers</h2><a class="s-btn s-btn__clear" href="#line-numbers"><span class="v-visible-sr">Section titled Line numbers</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Add <code>.linenums</code> to include line numbers on a code block.</p>
    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="default">Default</h3><a class="s-btn s-btn__clear" href="#default"><span class="v-visible-sr">Section titled Default</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-html linenums"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><code class="s-code-block--line-numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></code><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex g4 fd-column"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"full-name"</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"full-name"</span>/&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
        </div>
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="offset">Offset</h3><a class="s-btn s-btn__clear" href="#offset"><span class="v-visible-sr">Section titled Offset</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">Append a number preceeded by <code>:</code> to <code>.linenums</code> to offset the start of the line numbers.</p>
    <div class="docs-preview">
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-code-block language-json linenums:23"</span>&gt;</span><br>    …<br><span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span></code></pre>
        <div class="docs-preview--example">
<pre class="language-json s-code-block" tabindex="0"><code class="language-json s-code-block"><code class="s-code-block--line-numbers"><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div>31</div><div>32</div><div>33</div><div>34</div></code><span class="hljs-punctuation">[</span><br>  <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"title"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"apples"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"count"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">12000</span><span class="hljs-punctuation">,</span> <span class="hljs-number">20000</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"description"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><span class="hljs-attr">"text"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"..."</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">"sensitive"</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span><br>  <span class="hljs-punctuation">{</span><br>    <span class="hljs-attr">"title"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"oranges"</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"count"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">17500</span><span class="hljs-punctuation">,</span> <span class="hljs-literal"><span class="hljs-keyword">null</span></span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><br>    <span class="hljs-attr">"description"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span><span class="hljs-attr">"text"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"..."</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">"sensitive"</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">}</span><br>  <span class="hljs-punctuation">}</span><br><span class="hljs-punctuation">]</span></code></pre>
        </div>
    </div>
</section>


            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-code-block"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-code-block"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-code-block"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-code-block"
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
                            form="quick-positive-feedback-code-block"
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
                            form="quick-negative-feedback-code-block"
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
                    name="feedback-code-block"
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
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/components/code-blocks.html"
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
