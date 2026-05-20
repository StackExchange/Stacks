// Sample HTML for the prose component
const sampleHTMLFragment = `<strong>Markdown</strong> is <em>intended</em> to be as <code>easy-to-read</code> and <code>easy-to-write</code> as is <a href="#">feasible</a>. Readability, however, is emphasized above all else.`;
const sampleListItems = `
<li>${sampleHTMLFragment}</li>
<li>Item 2</li>
  <li>
  <ol>
    <li>${sampleHTMLFragment}</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</li>
<li>Item 4</li>
<li>
    <ul>
    <li>${sampleHTMLFragment}</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</li>
`;

export default `
<h4>Code block</h4>
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><span class="hljs-tag">&lt;<span class="hljs-name">article</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-prose"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Garlic bread with cheese: What the science tells us<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- ... --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span></code></pre>

<h4>Headings</h4>
<h1>Heading 1: ${sampleHTMLFragment}</h1>
<h2>Heading 2: ${sampleHTMLFragment}</h2>
<h3>Heading 3: ${sampleHTMLFragment}</h3>
<h4>Heading 4: ${sampleHTMLFragment}</h4>
<h5>Heading 5: ${sampleHTMLFragment}</h5>
<h6>Heading 6: ${sampleHTMLFragment}</h6>

<h4>Paragraphs</h4>
<p>Paragraph 1: ${sampleHTMLFragment}</p>
<p>Paragraph 2: ${sampleHTMLFragment}</p>

<h4>Unordered list w/ nested ordered list</h4>
<ul>
  ${sampleListItems}
</ul>

<h4>Ordered list w/ nested unordered list</h4>
<ol>
  ${sampleListItems}
</ol>

<h4>Blockquote</h4>
<blockquote>
    <p>This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.</p>
    <p>${sampleHTMLFragment}</p>
</blockquote>

<h4>Image</h4>
<p><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI5MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImNoZWNrZXIiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjxyZWN0IHg9IjEwMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNjY2MiLz48cmVjdCB4PSIwIiB5PSIxMDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjY2NjIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NoZWNrZXIpIi8+PC9zdmc+" alt="Sample checkerboard image"></p>

<h4>Table</h4>
<div class="s-table-container">
  <table class="s-table">
    <thead>
      <tr>
        <th>Wrestler</th>
        <th>Origin</th>
        <th>Finisher</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bret "The Hitman" Hart</td>
        <td>Calgary, AB</td>
        <td>Sharpshooter</td>
      </tr>
      <tr>
        <td>Stone Cold Steve Austin</td>
        <td>Austin, TX</td>
        <td>Stone Cold Stunner</td>
      </tr>
      <tr>
        <td>Randy Savage</td>
        <td>Sarasota, FL</td>
        <td>Elbow Drop</td>
      </tr>
      <tr>
        <td>Vader</td>
        <td>Boulder, CO</td>
        <td>Vader Bomb</td>
      </tr>
      <tr>
        <td>Razor Ramon</td>
        <td>Chuluota, FL</td>
        <td>Razor’s Edge</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>Odd text</h4>
<p>☺🐉 ᵃᵉⁱᵒᵘ ₐₑᵢₒᵤ s̶t̶r̶i̶k̶e̶o̶u̶t̶ Z̸̧̦̥͔̻̞̟͔͒̓̄̓͐͆͋̃̅͆̓͘̚͝͝à̷̛̜͇̺̖̯̭͓̱̱̣̺̲̪̰l̷̢̳̤̮͈͎̩̱̳̱̱̞͆͂̽̀̃͒̿̄̅͊͘͘̚͠͝ͅg̷͙͋o̶̧̩̓̓͌̄͊͐̓̇̏͝ ̶̛͚͖͍̦͕̞͈͆̋̓̈̏̈̓̊̅͆͘͜t̸̬̮̖̖͙͔̮͊̔͊͌́̈́͒̇͒̽̑̎̚̕͠ė̶̖̰̬͙͙̇̈͌͘͜͜x̴͔̎t̶̖́̒̏͒͌̈́̏͊̒̉ͅ ̵̨͍̬͔̼̣̘̖͍͖̘͍͋̑͛̂̾̋ḧ̸̡̘̬̲̣̺́́̿̀̈ͅé̷̦̰̻̤̲̺̠̏͒̉͛̍͌̍ͅr̶̩̯̱̜͆̌̾͌̑̇̊͒̃̀̽̍̚é̴̜̉̇̿̈́͌̕.̸̢̱͔̲̫̇͌̽̌͂͊͊̈́̇</p>
`;
