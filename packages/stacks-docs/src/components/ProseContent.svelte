<p>Stacks adds a new <code>s-prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:</p>
<pre><code class="language-html">&lt;article class="s-prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;For years parents have espoused the health benefits of eating garlic bread…&lt;/p&gt;
&lt;/article&gt;</code></pre>

<h2>What to expect from here on out</h2>
<p>What follows from here is just a bunch of absolute nonsense we've written to dogfood the component itself. It includes every sensible typographic element we could think of, like <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.</p>
<p>It's important to cover all of these use cases for a few reasons:</p>
<ol>
    <li>We want everything to look good out of the box.</li>
    <li>Really just the first reason, that's the whole point of the plugin.</li>
    <li>Here's a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
</ol>

<h3>Typography should be easy</h3>
<p>So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.</p>
<p>Something a wise person once told me about typography is:</p>
<blockquote><p>Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.</p></blockquote>
<p>It's probably important that images look okay here by default as well:</p>
<img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="two people performing a transaction at a counter on either side of a point of sale system in a trendy salon" />
<p>Now I'm going to show you an example of an unordered list to make sure that looks good, too:</p>
<ul>
    <li>So here is the first item in this list.</li>
    <li>In this example we're keeping the items short.</li>
    <li>Later, we'll use longer, more complex list items.</li>
</ul>

<h2>What if we stack headings?</h2>
<h3>We should make sure that looks good, too.</h3>
<p>Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be.</p>
<h3>When a heading comes after a paragraph…</h3>
<p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like.</p>
<ul>
    <li>
        <p><strong>I often do this thing where list items have headings.</strong></p>
        <p>For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right.</p>
    </li>
    <li>
        <p><strong>Since this is a list, I need at least two items.</strong></p>
        <p>I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item.</p>
    </li>
</ul>

<h2>Code should look okay by default.</h2>
<p>Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:</p>
<pre><code class="language-js">module.exports = &#123;
  purge: [],
  theme: &#123; extend: &#123;&#125; &#125;,
  variants: &#123;&#125;,
  plugins: [],
&#125;</code></pre>
<p>Hopefully that looks good enough to you.</p>

<h2>There are other elements we need to style</h2>
<p>I almost forgot to mention links, like <a href="https://stackoverflow.com">Stack Overflow</a>.</p>
<p>We even included table styles, check it out:</p>
<div class="s-table-container">
    <table class="s-table">
        <thead>
            <tr><th>Wrestler</th><th>Origin</th><th>Finisher</th></tr>
        </thead>
        <tbody>
            <tr><td>Bret "The Hitman" Hart</td><td>Calgary, AB</td><td>Sharpshooter</td></tr>
            <tr><td>Stone Cold Steve Austin</td><td>Austin, TX</td><td>Stone Cold Stunner</td></tr>
            <tr><td>Randy Savage</td><td>Sarasota, FL</td><td>Elbow Drop</td></tr>
        </tbody>
    </table>
</div>
<p>We also need to make sure inline code looks good, like if I wanted to talk about <code>&lt;span&gt;</code> elements or tell you the good news about <code>@tailwindcss/typography</code>.</p>
<h3>Sometimes I even use <code>code</code> in headings</h3>
<p>Even though it's probably a bad idea, and historically I've had a hard time making it look good. This <em>"wrap the code blocks in backticks"</em> approach is the best we've come up with.</p>
<h3>We haven't used an <code>hr</code> yet</h3>
<hr />
<p>We just used one. What do you think? Pretty nice, right?</p>
