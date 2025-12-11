---
updated: 2025-12-11
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheck24FillCircle, IconCross24FillCircle } from '@stackoverflow/stacks-icons'
</script>

This guide helps ensure consistent naming across all Stack Overflow communications, products, and materials.

## Components

### Mainbrand: Stack Overflow

The overarching brand that serves as the main identifier for a company and its various products or services. This name is our most valuable asset with nearly two-decades of awareness around it in technology and technology-adjacent fields.

### Sub-brand

Exist as part of the larger parent brand, but often represent or cater to a particular category or market segment.

*I.e., Stack Overflow Public Platforms, Stack Overflow Business*

### Product

Standalone offerings designed to serve a subset of customers. Customers sign up for a product and can opt out if they wish. Products usually combine a set of complimentary features. They are externally facing and could be the subject of marketing.

*E.g., Stack Internal, Stack Ads*

### Feature

Functional aspects of a product or platform, or specific actions customers can take within a product/platform. Customers must sign up for a product in order to make use of a feature. Externally facing, but not as often the subject of marketing.

*E.g., Collectives*

## A (mostly) descriptive system

Our default is a descriptive approach when it comes to naming our brands, products and features. This means we use names that clearly explain what a thing is (or does), often following industry conventions.

*E.g., Reddit Ads, Mozilla VPN, Slack AI*

### Why descriptive?

At the current rate of change, it's simplest to name products descriptively, to keep barriers to understanding as low as possible.

We want to make it as clear as possible to our audiences what our products, brands and features are and do — and what they can expect when interacting with them.

A descriptive naming system is also an easy naming system to scale and roll out across any new brands, products or features that come along in the short to medium-term.

* **Audience friendly** - technologists in particular favour "no bs".
* **Prioritises clarity and simplicity** - we have a lot of historical confusion with naming, this sets up the future holistically and clearly.
* **Keeps the barrier to understanding low** - our products and services are quite technical so this keeps the headline clear.
* **Easiest to scale across new brands, products and features** - things change and will always change in tech, this keeps us adaptable.

### A note on '(Mostly)'

There's still scope to flex with the right associative name if we find it — a name that speaks to the benefits or qualities of a product. But our baseline and benchmark is simplicity and clarity, and we feel in the majority of cases, descriptive names fit that bill the best.

*E.g., Spotify Jam, Atlassian Confluence*

### Why not abstract names?

We feel abstract names — names that don't directly speak to the benefits or qualities of a product — are too far from our heritage, and would likely confuse audiences at this point.

*E.g., Amazon Kindle, Microsoft Azure*

## The company

The legal entity is **Stack Exchange Inc.** However, most of the time we refer to ourselves as **Stack Overflow**. Always ensure the casing and spacing is correct:

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>StackOverflow</li>
      <li>Stackoverflow</li>
      <li>stackoverflow</li>
      <li>Stack overflow</li>
      <li>STACK OVERFLOW</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow</li>
    </ul>
  </GridColumn>
</Grid>

## The public platform vs the company

**Stack Overflow** refers to both the company and the public Q&A platform. In most contexts, this ambiguity is acceptable and even desirable—the platform is our flagship and most recognizable product.

However, when disambiguation is necessary, use these conventions:

<Grid>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> When referring to the company</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow (in most contexts)</li>
      <li>"We at Stack Overflow believe…"</li>
      <li>"Stack Overflow announced today…"</li>
      <li>"Stack Overflow serves millions of developers"</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> When referring to the public platform</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow (in most contexts)</li>
      <li>"the public platform" (when disambiguation is needed)</li>
      <li>"stackoverflow.com" (when being very specific)</li>
      <li>"Ask a question on Stack Overflow"</li>
      <li>"Browse Stack Overflow's questions and answers"</li>
    </ul>
  </GridColumn>
</Grid>

### When disambiguation is needed

Use contextual clues or specific phrasing when you need to make the distinction clear:

<Grid>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>"Stack Overflow offers both a public platform and business products"</li>
      <li>"Visit stackoverflow.com to ask questions, or try Stack Internal for your team"</li>
      <li>"Unlike the public Stack Overflow site, Stack Internal is private to your organization"</li>
      <li>"Stack Overflow's public Q&A platform serves millions daily"</li>
    </ul>
  </GridColumn>
</Grid>

## Stack Overflow Business

The collective name for our business products is **Stack Overflow Business**.

Business products do not have distinct logos but there are [differences with color usage](/brand/color#business-vs-general-palettes). If further differentiation is needed, a [Stack Overflow Business](/brand/logo#sub-brand-lockups) logo is available—contact the brand design team for help.

### Stack Data Licensing

Our data licensing product provides access to Stack Overflow's vast knowledge base.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow Knowledge Solutions</li>
      <li>SOKS</li>
      <li>OverflowAPI</li>
      <li>OverflowAI</li>
      <li>Data Licensing</li>
      <li>Stack Licensing</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Data Licensing</li>
    </ul>
  </GridColumn>
</Grid>

### Stack Ads

Our advertising platform for reaching developers and technologists.

**Note:** Collectives on Stack Overflow is no longer part of the Stack Ads offering.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow Talent</li>
      <li>Stack Overflow Employer Branding</li>
      <li>Stack Overflow Advertising</li>
      <li>SO Ads</li>
      <li>Overflow Ads</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Ads</li>
    </ul>
  </GridColumn>
</Grid>

### Stack Internal

Our private knowledge management and collaboration platform for teams and enterprises.

In November 2025 we renamed **Stack Overflow for Teams** to **Stack Internal**.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow for Teams</li>
      <li>SO4T</li>
      <li>SOE</li>
      <li>SIE</li>
      <li>SIB</li>
      <li>Stack Overflow for Business</li>
      <li>Stack Overflow for Enterprise</li>
      <li>Stack Teams</li>
      <li>Internal</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Internal</li>
    </ul>
  </GridColumn>
</Grid>

## Stack Overflow vs Stack

Both **Stack \_\_\_** and **Stack Overflow \_\_\_** are acceptable when referring to our products, but default to the shorter form.

<Grid>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Use Stack ___</h3>
    <ul class="ml0 pl16">
      <li>Internal communications (presentations, emails, Slack)</li>
      <li>Official social media posts from company accounts</li>
      <li>On our own web properties</li>
      <li>When clearly speaking as the company or an employee</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Use Stack Overflow ___</h3>
    <ul class="ml0 pl16">
      <li>External communications where context is unclear</li>
      <li>First mention of a product in outreach materials</li>
      <li>App stores, marketplaces, and review sites</li>
      <li>When comparing with Stack Overflow (the public platform)</li>
      <li>Legal or formal documentation</li>
    </ul>
  </GridColumn>
</Grid>

## Stack Internal tiers and plans

Stack Internal tier names are unchanged from previous naming.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow Enterprise</li>
      <li>Stack Overflow for Enterprise</li>
      <li>Stack Overflow Business</li>
      <li>Stack Overflow for Business</li>
      <li>SOE, SOB, SIE, SIB (abbreviations in external documents)</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Internal (Enterprise)</li>
      <li>Stack Internal (Business)</li>
      <li>Use tier name alone after first full mention (e.g., "Enterprise")</li>
    </ul>
  </GridColumn>
</Grid>

## Stack Internal terminology

When referring to Stack Internal instances and users in product contexts:

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Team (capitalized when referring to an instance)</li>
      <li>Members</li>
      <li>Users</li>
      <li>Collaborators</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>team (lowercase, where "Stack Internal" is too formal)</li>
      <li>teammates (for the collective name of users)</li>
      <li>Stack Internal (when being specific e.g., …your Stack Internal…)</li>
    </ul>
  </GridColumn>
</Grid>

## AI features

The OverflowAI brand has been retired. When referring to AI functionality:

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>OverflowAI</li>
      <li>Overflow AI</li>
      <li>Stack AI</li>
      <li>AI Suite</li>
      <li>AI Tools (as a product name)</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Refer to specific features by name (e.g., "Enhanced Search")</li>
      <li>Use "Stack Internal's AI features" when referring collectively</li>
      <li>Avoid collective references when possible</li>
    </ul>
  </GridColumn>
</Grid>

## Retired brands and visual elements

The following brands and visual identities have been retired:

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow Labs visual identity</li>
      <li>Collectives on Stack Overflow visual identity</li>
      <li>Old style product logos (i.e., Teams, Talent, Advertising)</li>
      <li>Custom or unofficial product logos</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Refer to these products in text when contextually appropriate</li>
      <li>Link to historical content (blog posts, documentation)</li>
      <li>Use approved current brand assets from the brand design team</li>
    </ul>
  </GridColumn>
</Grid>

## Stack Exchange

The Stack Exchange brand name is being phased out in favor of Stack Overflow.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don't</h3>
    <ul class="ml0 pl16">
      <li>Stack Exchange (when referring to the company)</li>
      <li>“I work at Stack Exchange”</li>
      <li>Stack Exchange products</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Exchange Inc. (legal contexts only)</li>
      <li>“I work at Stack Overflow”</li>
      <li>Stack Overflow (in all other contexts)</li>
    </ul>
  </GridColumn>
</Grid>