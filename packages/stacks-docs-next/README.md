# Stacks Documentation

Stack Overflow's design system documentation site, powered by SvelteKit.

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev -w packages/stacks-docs-next

```

## Building

This site is deployed to Netlify, but to create a production version of your app locally:

```sh
npm run build -w packages/stacks-docs-next
```

You can preview the production build with `npm run preview`.

## Documentation

### Navigation

The site navigation is controlled by `src/structure.yaml`. This file defines:
- Top-level sections (Brand, Copywriting, Product, etc.)
- Navigation hierarchy and nesting
- Page titles, slugs, and metadata
- Which pages are marked as private (employee-only)

Example structure:
```yaml
navigation:
  - title: "Brand"
    slug: "brand"
    description: "Visual patterns and guidelines"
    items:
      - title: "Logo"
        slug: "logo"
        image: "/images/heros/logo.svg"

      - title: "Brand strategy"
        slug: "strategy"
        private: true  # Employee-only content
```

### Markdown processing

Documentation is built using [mdsvex](https://mdsvex.pngwn.io/), which allows you to use Svelte components within Markdown files. The build process automatically adds several features:

**Automatically Added:**
- **Table of Contents** - Extracted from headings and exposed via `toc` in frontmatter
- **Heading IDs** - All headings get slug IDs for direct linking (e.g., `## Color hierarchy` → `id="color-hierarchy"`)
- **Section wrappers** - Content is automatically wrapped in `<section>` elements
- **Heading links** - Headings are automatically wrapped in anchor links
- **Syntax highlighting** - Code blocks are highlighted using highlight.js with Stacks styling
- **Table styling** - Tables automatically get Stacks table classes (`s-table`)
- **Image path resolution** - Relative image paths are resolved to absolute URLs

**Svelte Components in Markdown:**
You can import and use Svelte components directly in your markdown:
```markdown
<script>
  import ColorSwatch from './ColorSwatch.svelte'
</script>

## Color palette

<ColorSwatch />
```

See `svelte.config.js` for the complete mdsvex configuration.

### Content

Documentation content lives in two directories:

#### Public (`src/docs/public`)

Public-facing documentation accessible to everyone. The directory structure maps directly to URL routes:

**Route Patterns:**
- `src/docs/public/brand/logo.md` → `/brand/logo`
- `src/docs/public/brand/color/index.md` → `/brand/color`

**Files can be organized in two ways:**
1. **Single file:** `route.md` for simple pages
2. **Directory with index:** `route/index.md` for pages with supporting files

**Supporting Files:**
You can place images, Svelte components, YAML data, and other assets alongside your markdown:
```
src/docs/public/brand/color/
├── index.md                    # Main content
├── ColorSwatch.svelte          # Interactive component
├── colors.yaml                 # Data file
└── stack-color-combos.svg      # Image asset
```

**Image Handling:**
Images and non-markdown files are automatically copied from `src/docs/` to `static/docs/` during build by the Vite plugin in `vite.config.ts`. Reference them in markdown using relative paths:
```markdown
![Color palette](./stack-color-combos.svg)
```

#### Private (`src/docs/private`)

Employee-only documentation lives in a seperate repo: https://github.com/StackEng/StacksDocsPrivate

This is a **git submodule** that requires Stack Overflow employee access. To set it up:

```sh
git submodule init
git submodule update
```

The private docs follow the same structure and conventions as public docs. Mark pages as private in `structure.yaml` with `private: true`.

### Adding a New Page

1. **Create the content file** in the appropriate location:
   ```sh
   # Simple page
   touch src/docs/public/brand/new-page.md

   # Page with supporting files
   mkdir src/docs/public/brand/new-page
   touch src/docs/public/brand/new-page/index.md
   ```

2. **Add the page to navigation** in `src/structure.yaml`:
   ```yaml
   - title: "Brand"
     slug: "brand"
     items:
       - title: "New Page"
         slug: "new-page"
         image: "/images/heros/new-page.svg"  # Optional, relative to 'static' director
   ```

3. **Add any images or assets** to the same directory as your markdown file

4. **Reference assets** using relative paths (e.g., `./image.svg`) in your markdown
