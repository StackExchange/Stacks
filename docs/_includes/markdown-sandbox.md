# The Comprehensive Formatting Test

## Code Formatting

-   Inline code formatting or code spans
    -   Normal backticks `System.out.println("Hello World!");`.
    -   Escaped backticks: `` for line in `someCommand`  ``
    -   A single backtick character in a line won't form a code block '`'.
    -   There are two backtick characters ('\`') in this line ('`').
-   Block code formatting

```
System.out.println("Hello World!");
System.out.println("Code Block!");
```

```html
<div class="s-progress s-progress__stepped">
    <div class="s-progress--step is-complete">
        <a href="…" class="s-progress--stop"> @Svg.CheckmarkSm </a>
        <div class="s-progress--bar s-progress--bar__right"></div>
        <a class="s-progress--label">…</a>
    </div>

    <div class="s-progress--step is-complete">
        <a href="…" class="s-progress--stop"> @Svg.CheckmarkSm </a>
        <div class="s-progress--bar s-progress--bar__left"></div>
        <div class="s-progress--bar s-progress--bar__right"></div>
        <a class="s-progress--label">…</a>
    </div>

    <div class="s-progress--step is-active">
        <div class="s-progress--stop"></div>
        <div class="s-progress--bar s-progress--bar__left"></div>
        <div class="s-progress--bar s-progress--bar__right"></div>
        <div class="s-progress--label">…</div>
    </div>

    <div class="s-progress--step">
        <div class="s-progress--stop"></div>
        <div class="s-progress--bar s-progress--bar__left"></div>
        <div class="s-progress--label">…</div>
    </div>
</div>
```

-   HTML and other markdown are not supported within code spans or code blocks.

    ````
    ```
    </code> *Not in code!* <code>
    ```
    ````

    ```
    </code> *Not in code!* <code>
    ```

## Line Breaks

-   This is one line.
    This was intended to be on the next line, but it appears on the same line.

-   This is one paragraph. It has some sentences.

    This is intended to be a second paragraph.

-   This is one line.<br>
    This is intended to be on the next line.

## Italics and Bold

-   This is _italic_ text. This is _italic_ too.
-   This is **bold** text. This is **bold** too.

-   **_underscores only_** and **_asterisks only_** and **_underscore and asterisk_** and **_asterisk and underscore_**.

-   \***\*Four!\*\***
-   **\_**Five!**\_**
-   ****Two and Two!****
-   _*One and One!*_

## Links

-   Inline links:

    -   [Meta Stack Exchange](https://meta.stackexchange.com)
    -   [Meta Stack Exchange with tooltip](https://meta.stackexchange.com "TopQuestions")
    -   [Meta Stack Exchange with tooltip](https://meta.stackexchange.com "TopQuestions")
    -   [Meta Stack Exchange with tooltip](https://meta.stackexchange.com "TopQuestions")
    -   \[Escaped link to Meta Stack Exchange](https://meta.stackexchange.com)
    -   [No protocol link to Meta Stack Exchange](meta.stackexchange.com)

-   Reference links:

    -   [Meta Stack Exchange][1]

-   Bare URLs
    -   Bare URLs get turned into links. http://example.com
    -   Angle brackets force links. <https://www.google.com>

## Images

-   Inline images, similar to links but with leading `!`:
    -   A normal image<br>
        ![An image of a unicorn](https://i.stack.imgur.com/7I1jg.jpg)
    -   An image with a tooltip<br>
        ![An image of a unicorn](https://i.stack.imgur.com/7I1jg.jpg "Unicorn!")
    -   Escaped image so as to not render the actual image\
        !\[An image of a unicorn](https://i.stack.imgur.com/7I1jg.jpg (Unicorn!))
-   Reference images:
    -   ![image of a unicorn][2]
-   Image links - surround an image with a link.
    [![An image of a unicorn](https://i.stack.imgur.com/7I1jg.jpg)](http://example.com)
-   A bunch of images in a row
    <img src="https://i.stack.imgur.com/7I1jg.jpg" width="100"><img src="https://i.stack.imgur.com/7I1jg.jpg" width="100"><img src="https://i.stack.imgur.com/7I1jg.jpg" width="100">

## Headers

-   # Heading 1
-   ## Heading 2
-   ### Heading 3
-   #### Heading 4
-   ##### Heading 5
-   ###### Heading 6
-   Escaped `#` \# Not a heading
-   # _Italic_ Header

## Horizontal Rules

---

## Blockquotes

> A general quote
> With multiple lines
>
> First level!
>
> > Second level!
> >
> > > Third level!
> >
> > Need blank line and one less
> > Spanning a blank line

-   > A quote within a list item

-   One can nest blockquotes with multiple `>` characters.

    > First level!
    >
    > > Second level!
    > >
    > > > Third level!
    > >
    > > Need blank line and one less < to go back to second.
    >
    > Same idea for back to first.

-   Escape a `>` character with a backslash.

    \> I want a `>`!

-   Markdown within a blockquote

    > Enjoy **this** `unicorn`!
    >
    > ![image of a unicorn](https://i.stack.imgur.com/7I1jg.jpg)

-   Code formatting works within a blockquote. Indenting requires 5 spaces: 1 for the blockquote, and 4 for the code indention.

    >     System.out.println("Hello World!");

    > Inline: `System.out.println("Hello World!");`

    > Code fence:
    >
    > ```
    > System.out.println("Hello World!");
    > ```

## Lists

-   Unordered Lists
    -   One
    -   Two
    -   Three

1. Ordered Lists
    1. One
    2. Two
    3. Three

-   Multiple lines within list items: indent 4 spaces, or do we need to?

1. Same line
   Continuation of the same line
1. Next line
   Not indented
1. Next line
   Continuation of the same line

-   Nested lists: indent 4 spaces.

1. Top level
    - Mid level
        1. Bottom level
    - Mid level
        - Bottom level
1. Top level
    1. Mid level
        - Bottom level

-   List item

    List paragraph

-   List item

    List paragraph

    -   Subitem
    -   Subitem

    List paragraph

*   Code within list items: indention requires blank line then 4 additional spaces beyond list indention level.

1. Top level

    ```
    System.out.println("Code fence");
    ```

    Inline: `System.out.println("Inline");`

-   Blockquote within list items: blank line then indent 4 spaces.

1. Top level
    > Quote is indented.

## Markdown Escapes

\\ \` \* \_ \{ \} \[ \] \( \) \# \+ \- \. \!

## Tables

<div class="s-table-container">
    <table class="s-table">
        <thead>
            <tr>
                <th>Syntax</th>
                <th>Whatever</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Title</td>
                <td>Title</td>
            </tr>
            <tr>
                <td>Title</td>
                <td>Title</td>
            </tr>
        </tbody>
    </table>
</div>

## Strikethrough

~~Incorrect~~

## Spoilers

-   Create a spoiler with `>!`:

<blockquote class="spoiler js-spoiler" data-spoiler="Reveal spoiler">
    <p>Tyler Durden is <a href="#">Luke Skywalker’s</a> father.</p>
    <p>Keyser Söze was dead the whole time.</p>
</blockquote>

<blockquote class="spoiler js-spoiler" data-spoiler="Reveal spoiler">
    <img src="https://i.stack.imgur.com/7I1jg.jpg" alt="image of unicorn" title="Tooltip">
</blockquote>

<!-- ## Stack Exchange Extensions to Markdown

### Tags

- Enclose in brackets `[]` and text is prefixed with `tag:`.  Letters get lowercased.  They link to the main site's tag page for that tag.

        [tag:mytag] [tag:UPPERCASE] [tag:with1number]

    [tag:mytag] [tag:UPPERCASE] [tag:with1number]

- Allowed characters: alphanumeric plus limited punctuation: Individual `-`, `#`, and `.` characters are allowed.

        [tag:abcdefghijklmnopqrstuvwxyz-#.ABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789]

    [tag:abcdefghijklmnopqrstuvwxyz-#.ABCEDFGHIJKLMNOPQRSTUVWXYZ0123456789]

    - Leading and trailing `-` are stripped off, but the tag still forms.

            [tag:c-] [tag:c--] [tag:-c] [tag:--c] [tag:-----c] [tag:c-------]

        [tag:c-] [tag:c--] [tag:-c] [tag:--c] [tag:-----c] [tag:c-------]

    - Trailing `.` are stripped off, but the tag still forms.

            [tag:c.] [tag:c..] [tag:.c] [tag:..c] [tag:.....c] [tag:c.......]

        [tag:c.] [tag:c..] [tag:.c] [tag:..c] [tag:.....c] [tag:c.......]

    - Leading `#` are stripped off, but the tag still forms.

            [tag:c#] [tag:c##] [tag:#c] [tag:##c] [tag:#####c] [tag:c#######]

        [tag:c#] [tag:c##] [tag:#c] [tag:##c] [tag:#####c] [tag:c#######]

- The `+` character is allowed, but if they're in the middle, there must be as least 2 of them.

        [tag:abc+def] [tag:abc++def] [tag:abc++++++++++++++++++++def]

    [tag:abc+def] [tag:abc++def] [tag:abc++++++++++++++++++++def]

    - Leading `+` are stripped off, but the tag still forms.

            [tag:c+] [tag:c++] [tag:+c] [tag:++c] [tag:+++++c] [tag:c+++++++]

        [tag:c+] [tag:c++] [tag:+c] [tag:++c] [tag:+++++c] [tag:c+++++++]

- Meta-tags: Use the `meta-tag:` prefix.  They link to the meta site's tag page for that tag.

        [meta-tag:blah]

    [meta-tag:blah]

    - Certain meta tag names are given special styling.

        [meta-tag:bug] [meta-tag:discussion] [meta-tag:feature-request] [meta-tag:support]

        [meta-tag:community-ads] [meta-tag:faq] [meta-tag:featured] [meta-tag:status-bydesign] [meta-tag:status-declined] [meta-tag:status-deferred] [meta-tag:status-completed] [meta-tag:status-norepro] [meta-tag:status-planned] [meta-tag:status-review] [meta-tag:status-reproduced]

- Certain words, regardless of case, don't form tags, regardless of capitalization or whether it's a meta tag.  There are no other words, 4 letters or less, that don't form tags.  The words "and" and "or" won't form tags.  In preview, "not" won't form a tag but the actual post will render it.  The preview renders them as the text is, e.g. `[tag:Or]` but the post will render it `or`.

    ```
    [tag:an] [tag:and] [tag:AND] [tag:band]
    [tag:no] [tag:not] [tag:noT] [tag:note]
    [meta-tag:o] [meta-tag:or] [meta-tag:Or] [meta-tag:ore]
    [tag:and-not-or]
    ```

    [tag:an] [tag:and] [tag:AND] [tag:band]
    [tag:no] [tag:not] [tag:noT] [tag:note]
    [meta-tag:o] [meta-tag:or] [meta-tag:Or] [meta-tag:ore]
    [tag:and-not-or]

-->

## Allowed HTML

Only some [basic HTML elements are whitelisted](https://meta.stackexchange.com/questions/1777/what-html-tags-are-allowed-on-stack-exchange-sites). Also, only some attributes within those tags are whitelisted as well. If specified, they must be in order! Those that don't meet these requirements are completely stripped from the content.

<!-- language-all: lang-html -->

-   `<a>`: `href` then `title`

    <a href="http://meta.stackexchange.com/" title="Tooltip">_Meta Stack Exchange_</a>

-   `<b>` or `<strong>`: no attributes

    <b>Bold</b> and <strong>Strong</strong>

-   `<blockquote>`: no attributes

    <blockquote>To be or not to be, that is the question.</blockquote>

-   `<br>`: no attributes

    You can<br>break to<br>the next line.

-   `<del>` or `<strike>`: no attributes

    <del>That's not right.</del> <strike>That's not even wrong.</strike> Correct.

-   `<dl>`, `<dt>`, and `<dd>`: no attributes

      <dl>
        <dt>SO</dt>
        <dd>Stack Overflow</dd>
        <dt>SE</dt>
        <dd>Stack Exchange</dd>
      </dl>

-   `<em>` or `<i>`: no attributes

    <em>Emphasis</em> and <i>Italic</i>

-   `<h1>`, `<h2>`, and `<h3>`: no attributes

    <h1>Header One</h1>
    <h2>Header Two</h2>
    <h3>Header Three</h3>
    <h4>Header Four</h4>
    <h5>Header Five</h5>
    <h6>Header Six</h6>

-   `<hr>`: no attributes
    <hr>

-   `<img>`: `src` then `width` then `height` then `alt` then `title`

    <img src="https://i.stack.imgur.com/7I1jg.jpg" alt="image of unicorn" title="Tooltip">

    -   Specifying one of `width` or `height` scales the image; must specify both to change the aspect ratio. They can't be `px` and they max out at 999.

        <img src="https://i.stack.imgur.com/7I1jg.jpg" width="999">

        <img src="https://i.stack.imgur.com/7I1jg.jpg" width="100">

        <img src="https://i.stack.imgur.com/7I1jg.jpg" height="999">

        <img src="https://i.stack.imgur.com/7I1jg.jpg" width="999" height="100">

        <img src="https://i.stack.imgur.com/7I1jg.jpg" width="100" height="999">

        -   Animated gifs are supported

            <img src="https://i.stack.imgur.com/AXtId.gif">

-   `<kbd>`: no attributes

    <kbd>abcdefghijklmnopqrstuvwxyz!@#$%^&\*()-\_=+`~[{]}\|;:'",<.>/?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</kbd>

    -   Nested `<kbd>` elements are allowed.

        <kbd>Outer<kbd>Nested</kbd></kbd>

-   `<ol>` or `<ul>` with `<li>`: `<ol>` can have `start`

    ```
    <ol><li>First</li><li>Second</li></ol> <ul><li>Something</li><li>Else</li></ul>
    ```

      <ol><li>First</li><li>Second</li></ol> <ul><li>Something</li><li>Else</li></ul>

    -   Start at desired number up to 2<sup>31</sup> - 1.

        ```
        <ol start="2147483647"><li>First</li></ol>
        ```

          <ol start="2147483647"><li>First</li></ol>

-   `<p>`: no attributes

    ```
    <p>Paragraph1</p><p>Paragraph2</p>
    ```

      <p>Paragraph1</p><p>Paragraph2</p>

-   `<pre>`: no attributes

    ```
    <pre>System.out.println("Hello World!");</pre>
    ```

      <pre>System.out.println("Hello World!");</pre>

-   `<sup>` and `<sub>`: no attributes

    ```
    x<sup>2</sup> + A<sub>0</sub>
    ```

    x<sup>2</sup> + A<sub>0</sub>

    -   They can be nested.

        ```
        a<sup>b<sup>c<sup>d<sub>e<sup>f</sup></sub></sup></sup></sup>
        ```

        a<sup>b<sup>c<sup>d<sub>e<sup>f</sup></sub></sup></sup></sup>

-   Escape your `<>`

    ```
    HashMap<String, Object>
    ```

    HashMap<String, Object>

    ```
    `HashMap<String, Object>`
    ```

    `HashMap<String, Object>`

    ```
    HashMap&lt;String, Object&gt;
    ```

    HashMap&lt;String, Object&gt;

## Unicode

### Emojis

&#9786;&#x1F409;

### Right-to-left

&#8238;ABCDEF

### Superscript, subscript, strikeout

ᵃᵉⁱᵒᵘ ₐₑᵢₒᵤ s̶t̶r̶i̶k̶e̶o̶u̶t̶

### Zalgo

Z̸̧̦̥͔̻̞̟͔͒̓̄̓͐͆͋̃̅͆̓͘̚͝͝à̷̛̜͇̺̖̯̭͓̱̱̣̺̲̪̰l̷̢̳̤̮͈͎̩̱̳̱̱̞͆͂̽̀̃͒̿̄̅͊͘͘̚͠͝ͅg̷͙͋o̶̧̩̓̓͌̄͊͐̓̇̏͝ ̶̛͚͖͍̦͕̞͈͆̋̓̈̏̈̓̊̅͆͘͜t̸̬̮̖̖͙͔̮͊̔͊͌́̈́͒̇͒̽̑̎̚̕͠ė̶̖̰̬͙͙̇̈͌͘͜͜x̴͔̎t̶̖́̒̏͒͌̈́̏͊̒̉ͅ ̵̨͍̬͔̼̣̘̖͍͖̘͍͋̑͛̂̾̋ḧ̸̡̘̬̲̣̺́́̿̀̈ͅé̷̦̰̻̤̲̺̠̏͒̉͛̍͌̍ͅr̶̩̯̱̜͆̌̾͌̑̇̊͒̃̀̽̍̚é̴̜̉̇̿̈́͌̕.̸̢̱͔̲̫̇͌̽̌͂͊͊̈́̇

[1]: https://meta.stackexchange.com
[2]: https://i.stack.imgur.com/7I1jg.jpg
[3]: https://i.stack.imgur.com/AXtId.gif
