---
title: "Code blocks"
description: "Stacks provides styling for code blocks with syntax highlighting provided by highlight.js. Special care was taken to make sure our light and dark themes felt like Stack Overflow while maintaining near AAA color contrasts and still being distinguishable for those with a color vision deficiency."
figma: "https://www.figma.com/design/do4Ug0Yws8xCfRjHe9cJfZ/Project-SHINE---Product-UI?node-id=610-18805"
---

<script lang="ts">
    import ClassTable from '$components/ClassTable.svelte';
    import Example from '$components/Example.svelte';
    import type { ClassTableRow } from '$components/ClassTable.svelte';

    const classes: ClassTableRow[] = [
        { class: '.s-code-block',  modifies: 'N/A',           description: 'Base code block style.' },
        { class: '.linenums',      modifies: '.s-code-block', description: 'Adds a line numbers column to the code block.' },
        { class: '.linenums:<n>',  modifies: '.s-code-block', description: 'Adds a line numbers column to the code block starting at a number <n>.' },
    ];
</script>

## Classes

<ClassTable {classes} />

## Language examples

The following examples are a small subset of the languages that `highlight.js` supports.

### HTML

```html
<pre class="s-code-block language-html">
    …
</pre>
```

<Example>

```html
<form class="d-flex gy4 fd-column">
    <label class="s-label" for="question-title">Question title</label>
    <div class="d-flex ps-relative">
        <input class="s-input" type="text" id="question-title" placeholder="e.g. Why doesn't Stack Overflow use a custom web font?"/>
    </div>
</form>
```

</Example>

### JavaScript

```html
<pre class="s-code-block language-javascript">
    …
</pre>
```

<Example>

```javascript
import React, { Component } from 'react'
import { IP } from '../constants/IP'
import { withAuth0 } from '@auth0/auth0-react';

class AddATournament extends Component {
    componentDidMount() {
        this.myNewListOfAllTournamentsWithAuth()
    }
}

export default withAuth0(AddATournament);
```

</Example>

### CSS

```html
<pre class="s-code-block language-css">
    …
</pre>
```

<Example>

```css
.s-input,
.s-textarea {
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    padding: 0.6em 0.7em;
    border: 1px solid var(--bc-darker);
    border-radius: 3px;
    background-color: var(--white);
    color: var(--fc-dark);
    font-size: 13px;
    font-family: inherit;
    line-height: 1.15384615;
    scrollbar-color: var(--scrollbar) transparent;
}
@supports (-webkit-overflow-scrolling: touch) {
    .s-input,
    .s-textarea {
        font-size: 16px;
        padding: 0.36em 0.55em;
    }
    .s-input::-webkit-input-placeholder,
    .s-textarea::-webkit-input-placeholder {
        line-height: normal !important;
    }
}
```

</Example>

### Java

```html
<pre class="s-code-block language-java">
    …
</pre>
```

<Example>

```java
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // what?
      return;
    }
  }
}
```

</Example>

### Ruby

```html
<pre class="s-code-block language-ruby">
    …
</pre>
```

<Example>

```ruby
# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute
```

</Example>

### Python

```html
<pre class="s-code-block language-python">
    …
</pre>
```

<Example>

```python
def all_indices(value, qlist):
    indices = []
    idx = -1
    while True:
        try:
            idx = qlist.index(value, idx+1)
            indices.append(idx)
        except ValueError:
            break
    return indices

all_indices("foo", ["foo","bar","baz","foo"])
```

</Example>

### Objective-C

```html
<pre class="s-code-block language-objectivec">
    …
</pre>
```

<Example>

```objectivec
#import <UIKit/UIKit.h>
#import "Dependency.h"

@protocol WorldDataSource
@optional
- (NSString*)worldName;
@required
- (BOOL)allowsToLive;
@end

@property (nonatomic, readonly) NSString *title;
- (IBAction) show;
@end

- (UITextField *) userName {
    UITextField *retval = nil;
    @synchronized(self) {
        retval = [[userName retain] autorelease];
    }
    return retval;
}

- (void) setUserName:(UITextField *)userName_ {
    @synchronized(self) {
      [userName_ retain];
      [userName release];
      userName = userName_;
    }
}
```

</Example>

### Swift

```html
<pre class="s-code-block language-swift">
    …
</pre>
```

<Example>

```swift
import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\(name) is \(age + offset) years old"
  }
}
```

</Example>

### Less

```html
<pre class="s-code-block language-less">
    …
</pre>
```

<Example>

```less
@import "fruits";

@rhythm: 1.5em;

@media screen and (min-resolution: 2dppx) {
    body {font-size: 125%}
}

section > .foo + #bar:hover [href*="less"] {
    margin:     @rhythm 0 0 @rhythm;
    padding:    calc(5% + 20px);
    background: #f00ba7 url(http://placehold.alpha-centauri/42.png) no-repeat;
    background-image: linear-gradient(-135deg, wheat, fuchsia) !important ;
    background-blend-mode: multiply;
}

@font-face {
    font-family: /* ? */ 'Omega';
    src: url('../fonts/omega-webfont.woff?v=2.0.2');
}

.icon-baz::before {
    display:     inline-block;
    font-family: "Omega", Alpha, sans-serif;
    content:     "\f085";
    color:       rgba(98, 76 /* or 54 */, 231, .75);
}
```

</Example>

### JSON

```html
<pre class="s-code-block language-json">
    …
</pre>
```

<Example>

```json
[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
```

</Example>

### C#

```html
<pre class="s-code-block language-csharp">
    …
</pre>
```

<Example>

```csharp
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
```

</Example>

### SQL

```html
<pre class="s-code-block language-sql">
    …
</pre>
```

<Example>

```sql
CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
```

</Example>

### Diff

```html
<pre class="s-code-block language-diff">
    …
</pre>
```

<Example>

```diff
Index: languages/ini.js
===================================================================
--- languages/ini.js    (revision 199)
+++ languages/ini.js    (revision 200)
@@ -1,8 +1,7 @@
 hljs.LANGUAGES.ini =
 {
   case_insensitive: true,
-  defaultMode:
-  {
+  defaultMode: {
     contains: ['comment', 'title', 'setting'],
     illegal: '[^\\s]'
   },

*** /path/to/original timestamp
--- /path/to/new      timestamp
***************
*** 1,3 ****
--- 1,9 ----
+ This is an important
+ notice! It should
+ therefore be located at
+ the beginning of this
+ document!

! compress the size of the
! changes.

  It is important to spell
```

</Example>

## Line numbers

Add `.linenums` to include line numbers on a code block.

### Default

```html
<pre class="s-code-block language-html linenums">
    …
</pre>
```

<Example>
<pre class="language-html s-code-block" tabindex="0"><code class="language-html s-code-block"><code class="s-code-block--line-numbers"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></code><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex g4 fd-column"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"full-name"</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"s-input"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"full-name"</span>/&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span></code></pre>
</Example>

### Offset

Append a number preceeded by `:` to `.linenums` to offset the start of the line numbers.

```html
<pre class="s-code-block language-json linenums:23">
    …
</pre>
```

<Example>
<pre class="language-json s-code-block" tabindex="0"><code class="language-json s-code-block"><code class="s-code-block--line-numbers"><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div><div>31</div><div>32</div><div>33</div><div>34</div></code>[<br>  &#123;<br>    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"apples"</span>,<br>    <span class="hljs-attr">"count"</span>: [<span class="hljs-number">12000</span>, <span class="hljs-number">20000</span>],<br>    <span class="hljs-attr">"description"</span>: &#123;<span class="hljs-attr">"text"</span>: <span class="hljs-string">"..."</span>, <span class="hljs-attr">"sensitive"</span>: <span class="hljs-literal">false</span>&#125;<br>  &#125;,<br>  &#123;<br>    <span class="hljs-attr">"title"</span>: <span class="hljs-string">"oranges"</span>,<br>    <span class="hljs-attr">"count"</span>: [<span class="hljs-number">17500</span>, <span class="hljs-literal">null</span>],<br>    <span class="hljs-attr">"description"</span>: &#123;<span class="hljs-attr">"text"</span>: <span class="hljs-string">"..."</span>, <span class="hljs-attr">"sensitive"</span>: <span class="hljs-literal">false</span>&#125;<br>  &#125;<br>]</code></pre>
</Example>
