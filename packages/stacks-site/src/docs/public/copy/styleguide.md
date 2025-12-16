---
updated: 2025-12-11
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheck24FillCircle, IconCross24FillCircle } from '@stackoverflow/stacks-icons'
</script>

This guide covers editorial and style conventions for Stack Overflow content.

## Capitalization rules

### Product names in running text

When Stack Overflow products appear in running text, always capitalize the full product name.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Sign up for stack internal today</li>
      <li>Our stack ads platform reaches millions</li>
      <li>Access stack data licensing</li>
      <li>Your internal knowledge base</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Sign up for Stack Internal today</li>
      <li>Our Stack Ads platform reaches millions</li>
      <li>Access Stack Data Licensing</li>
      <li>Your Stack Internal knowledge base</li>
    </ul>
  </GridColumn>
</Grid>

### Feature names

Feature names should be capitalized when referring to the specific Stack Overflow feature, but lowercase when used generically.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Use enhanced search to find answers</li>
      <li>Join a collective on Stack Overflow</li>
      <li>The Enhanced Search Feature is powered by AI</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Use Enhanced Search to find answers</li>
      <li>Join a Collective on Stack Overflow</li>
      <li>Enhanced Search is powered by AI</li>
      <li>Our enhanced search capabilities help developers...</li>
    </ul>
  </GridColumn>
</Grid>

### Generic vs specific usage

When using product-related terms generically (not referring to the Stack Overflow product), use lowercase.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>We offer Data Licensing to our clients (when not referring to the specific product)</li>
      <li>internal knowledge sharing tools (when specifically referring to Stack Internal)</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Many companies offer data licensing to their clients</li>
      <li>Stack Internal helps teams with internal knowledge sharing</li>
      <li>We provide advertising solutions through Stack Ads</li>
      <li>Companies need advertising solutions to reach developers</li>
    </ul>
  </GridColumn>
</Grid>

## Possessives and plurals

### Possessives

Use standard possessive rules with Stack Overflow and product names.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflows' mission</li>
      <li>Stack Internals' features</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow's mission</li>
      <li>Stack Internal's features</li>
      <li>Stack Ads' reach (or "the reach of Stack Ads")</li>
    </ul>
  </GridColumn>
</Grid>

### Plurals

Avoid pluralizing product names. Use "instances," "deployments," or similar terms instead.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Multiple Stack Internals</li>
      <li>Two Stack Ads</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Multiple Stack Internal instances</li>
      <li>Two Stack Internal deployments</li>
      <li>Several Stack Ads campaigns</li>
    </ul>
  </GridColumn>
</Grid>

## Abbreviations

### External communications

Never use abbreviations in external-facing materials including marketing, documentation, blog posts, or sales materials.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>SO provides data licensing</li>
      <li>Try SI for your team</li>
      <li>SOE and SIE (for tiers)</li>
      <li>SOKS, SDL, or similar acronyms</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Overflow provides data licensing</li>
      <li>Try Stack Internal for your team</li>
      <li>Stack Internal (Enterprise)</li>
      <li>Stack Data Licensing</li>
    </ul>
  </GridColumn>
</Grid>

### Internal communications

In internal Slack, emails, or presentations, abbreviations may be used for brevity once the full name has been established in context. However, defaulting to full names is still preferred.

<Grid>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Acceptable internally</h3>
    <ul class="ml0 pl16">
      <li>SO (for Stack Overflow, after first mention)</li>
      <li>SI (for Stack Internal, after first mention)</li>
      <li>In code: Use descriptive variable names, abbreviations acceptable where conventional</li>
    </ul>
  </GridColumn>
</Grid>

## Compound references

When referring to multiple products together, use "and" and maintain each product's full name.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Stack Internal & Ads customers</li>
      <li>SI/SA users</li>
      <li>Stack Overflow's Internal and Ads products</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Stack Internal and Stack Ads customers</li>
      <li>Customers using Stack Internal, Stack Ads, or Stack Data Licensing</li>
      <li>Stack Overflow Business products</li>
    </ul>
  </GridColumn>
</Grid>

## Sequential mentions

After the first mention of a product name, you may use shortened forms if the context is clear.

<Grid>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>First mention: "Stack Internal provides private knowledge management". Second mention: "Internal helps teams collaborate..".</li>
      <li>First mention: "Stack Overflow Business includes three products". Second mention: "Business customers have access to..".</li>
      <li>Use "the product," "the platform," or "it" when context is unmistakable</li>
    </ul>
  </GridColumn>
</Grid>

## Additional capitalization guidelines

### Headers, subheaders, and tabs

Use sentence case for all headings. This means capitalizing the first word, the first word of a subtitle, and all proper nouns.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>User Roles</li>
      <li>Performance Overview</li>
      <li>Edit Your Profile</li>
      <li>Ask A Question</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>User roles</li>
      <li>Performance overview</li>
      <li>Edit your profile</li>
      <li>Ask a question</li>
    </ul>
  </GridColumn>
</Grid>

### Articles vs articles

Capitalize "Articles" when referring to the specific Stack Overflow feature section, but use lowercase when referring to generic articles.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>I'm writing an article and then I'm going to put it in our team's articles section</li>
      <li>In articles, you can find how-to guides</li>
      <li>Create articles</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>I'm writing an article and then I'm going to put it in our team's Articles section</li>
      <li>In Articles, you can find how-to guides, blog posts, and articles</li>
      <li>Create Articles</li>
    </ul>
  </GridColumn>
</Grid>

### User roles

Always capitalize user roles, no matter the context.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>employees</li>
      <li>Recommended members</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Employees</li>
      <li>Recommended Members</li>
    </ul>
  </GridColumn>
</Grid>

### Collectives vs collectives

Always capitalize "Collective" or "Collectives" when used as a proper noun or when it follows a company name. Use lowercase when referring generically to a collective.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>join the Google Cloud collective</li>
      <li>join an Collective</li>
      <li>A company's Collective page will be located at the top right of the screen</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>join the Google Cloud Collective</li>
      <li>join a collective</li>
      <li>A company's collective page will be located at the top right of the screen</li>
    </ul>
  </GridColumn>
</Grid>

### Communities & Community

Capitalize "Communities" and "Community" when referring to the Stack Internal feature.

<Grid>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>With Communities you can help your teammates know what's trending</li>
      <li>Subscribe to a Community and get notifications for new questions and answers</li>
    </ul>
  </GridColumn>
</Grid>

## Platform terminology and concepts

### Post scores

Questions, answers, and other types of posts have **scores**. A post's score is calculated by subtracting the total number of downvotes from the total number of upvotes.

- In almost all cases when referring to the sum of votes, use the term **score**
- Use **upvote** and **downvote** (one word, no hyphen) when referring to individual types of votes
- Avoid using "points" when referring to score or votes
- The term "votes" to refer to a post's score is only acceptable in the post summary component format `{ScoreValue} votes`

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Highest voted posts</li>
      <li>Total number of votes for this answer</li>
      <li>Only top voted answers are eligible</li>
      <li>8 points</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Highest scored posts</li>
      <li>Total score for this answer</li>
      <li>Only top scored answers are eligible</li>
      <li>8 votes (in post summary component only)</li>
    </ul>
  </GridColumn>
</Grid>

## Grammar and mechanics

### Use active voice (most of the time)

Write in the active voice, particularly if the user needs to do something.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>You should update your profile</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Update your profile</li>
    </ul>
  </GridColumn>
</Grid>

While it's generally best to avoid the passive voice, in certain situations it helps you sound softer without adding too many words. It's especially useful for time-sensitive messages like payment confirmations and error messages.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>We cancelled your order</li>
      <li>We've suspended your account</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Your order has been cancelled</li>
      <li>Your account has been suspended</li>
    </ul>
  </GridColumn>
</Grid>

### Use contractions

Contractions make copy sound more human. Avoid contractions that sound awkward when you say them out loud, or are not commonly used in everyday conversation.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>This'll help you get answers to your questions</li>
      <li>There must've been an error with your order</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>It's designed to help you get answers to your questions</li>
      <li>There's an error with your order</li>
    </ul>
  </GridColumn>
</Grid>

### Use American spelling and standards

Use American spelling for all public-facing content. When in doubt, check the [Merriam-Webster dictionary](https://www.merriam-webster.com/) for the preferred spelling of specific terms.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Recognise</li>
      <li>Travelled</li>
      <li>Colour</li>
      <li>9 April 2019</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Recognize</li>
      <li>Traveled</li>
      <li>Color</li>
      <li>April 9, 2019</li>
    </ul>
  </GridColumn>
</Grid>

### Pronouns

Leave off possessives when referring to users or features when possible. If you must use pronouns, refer to users as “you”. Don’t put words in their mouths with phrases that use “I” or “my”.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>My Teams</li>
      <li>My settings</li>
      <li>Change my email settings</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Teams</li>
      <li>Settings</li>
      <li>Change your email settings</li>
    </ul>
  </GridColumn>
</Grid>

When referring to Stack Overflow, use “we”. However, try to avoid inserting Stack Overflow into the content as much as possible.

Use “their” as a singular, gender-neutral pronoun when the gender of the subject is unknown or unimportant. Avoid using gendered terms.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>When a new user is added, he or she will be able to edit content</li>
      <li>We appreciate the guys and gals of Stack Overflow</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>When a new user is added, they'll be able to edit content</li>
      <li>We appreciate the Stack Overflow community</li>
    </ul>
  </GridColumn>
</Grid>

### Mind your verbs and nouns

Take extra care with “login” and “log in”. The former is a noun while the latter is a verb. Do not use "login" as a verb. The same logic applies to "signup" and "sign up".

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Login to ask a question</li>
      <li>Add a log in to your account</li>
      <li>Signup to ask a question</li>
      <li>Complete email sign up</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Log in to ask a question</li>
      <li>Add a login to your account</li>
      <li>Sign up to ask a question</li>
      <li>Complete email signup</li>
    </ul>
  </GridColumn>
</Grid>

### OK

Use the abbreviated version "OK" (fully capitalized in every context). This is preferred to "Okay" and its variants.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Okay</li>
      <li>okay</li>
      <li>Ok</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>OK</li>
    </ul>
  </GridColumn>
</Grid>

## Punctuation

### Ampersands

Don’t use ampersands (&) unless it's part of a branded term. Spell out the word "and" instead.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Update your email address & password</li>
      <li>Stack Overflow Q and A</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Update your email address and password</li>
      <li>Stack Overflow Q&A</li>
    </ul>
  </GridColumn>
</Grid>

### Apostrophes

Use apostrophes to represent omitted letters or numbers (can’t, you’re, ’90s) and to form possessives. See also: [use of curly quotes](#quotation-marks).

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Admins role</li>
      <li>Moderators's tasks</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Admin's role</li>
      <li>Moderators' tasks</li>
    </ul>
  </GridColumn>
</Grid>

### Colons

Avoid using colons unless you're introducing a list. If you need to use a colon in a sentence, Don’t capitalize the first word after it.

### Commas

Use the oxford comma in sentences. Don’t use a comma to separate two distinct phrases (comma splicing). Use two sentences instead.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Our community is rooted in kindness, collaboration and mutual respect</li>
      <li>Thanks for contacting us, we'll be in touch soon</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Our community is rooted in kindness, collaboration, and mutual respect</li>
      <li>Thank you for contacting us. We'll be in touch soon</li>
    </ul>
  </GridColumn>
</Grid>

### Ellipses

The ellipsis (…) can be used in place of missing text. Avoid using ellipses in regular text. Use the real single character ellipsis unicode (…) instead of three periods (...). It's appropriate to use an ellipsis in input placeholder copy.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Avoid subjective questions… stick to fact-based questions</li>
      <li>Search...</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Avoid subjective questions. Stick to fact-based questions</li>
      <li>Search…</li>
    </ul>
  </GridColumn>
</Grid>

### Exclamation points

Don’t use exclamation points unless something is really exciting. If you have to use one, limit yourself to one exclamation mark per page.

### Hyphens and dashes

Use hyphens to combine two words that modify or describe the noun that follows, or join prefixes and suffixes when there are two vowels beside each other.

Use an en dash with no spaces (–) for a fixed range of numbers. Avoid using em dashes in microcopy.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Start your free 14 day trial</li>
      <li>January 7 – 9</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Start your free 14-day trial</li>
      <li>January 7–9</li>
    </ul>
  </GridColumn>
</Grid>

### Periods

Don’t use periods in interface copy unless it's a full sentence or description. Don’t use periods in top-level headings, titles, or buttons. Do use periods in body text, descriptions, and help text.

### Question marks

Avoid using question marks wherever possible. Reword into affirmative statements wherever you can.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>Want to learn more?</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Learn more</li>
    </ul>
  </GridColumn>
</Grid>

### Quotation marks

Always use [smart/typographers/curly quotes](https://practicaltypography.com/straight-and-curly-quotes.html) not vertical, straight quotes. Place punctuation marks outside quotation marks.

#### Shortcuts

| Symbol                             | Description          | Alt Code   | Mac Shortcut         | HTML Entity   |
| ---------------------------------- | -------------------- | ---------- | -------------------- | ------------- |
| <span class="fs-display2">‘</span> | Opening single quote | `alt 0145` | `option + ]`         | `&amp;lsquo;` |
| <span class="fs-display2">’</span> | Closing single quote | `alt 0146` | `option + shift + ]` | `&amp;rsquo;` |
| <span class="fs-display2">“</span> | Opening double quote | `alt 0147` | `option + [`         | `&amp;ldquo;` |
| <span class="fs-display2">”</span> | Closing double quote | `alt 0148` | `option + shift + [` | `&amp;rdquo;` |

### Semicolons

Avoid using semicolons. When connecting two closely related ideas, use a comma or write two sentences.

## Date and time

### Dates

Use the month’s full name where possible (e.g., October). If there are space constraints, use 3-letter abbreviations with the exception of May (e.g., Oct.). Always write out the full year.

Don’t write dates numerically since differing international standards can lead to confusion. There is no need to add superscripts (st, nd, th, rd) to dates.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>September 2, '19</li>
      <li>9-2-19</li>
      <li>September 2nd</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>September 2, 2019</li>
      <li>Sep. 2, 2019</li>
      <li>September 2</li>
    </ul>
  </GridColumn>
</Grid>

### Time

Use the 12-hour clock, followed by am or pm. Include a space after the last number (e.g., 1:20 pm). Time should be relative to the user’s time zone (not UTC).

If indicating both date and time, separate them with the word “at” rather than a comma or @ symbol.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>15:30</li>
      <li>September 2, 2019 @ 4:35 pm</li>
      <li>September 2, 2019, 4:35 pm</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>3:30 pm</li>
      <li>September 2, 2019 at 4:35 pm</li>
    </ul>
  </GridColumn>
</Grid>

### Relative dates and times

In most cases, use relative dates and times (e.g., 3 minutes ago) with the exact date and time in the title attribute. When possible, use the longhand time (e.g., 7 years ago). If there are space constraints, use abbreviations: 7y, 3mo, 6d, 6h, 5min, 12s.

## UI components

### Buttons and links

Buttons and links should be clear and predictable. Button and link text should be sentence case and action-led (starting with a verb). Use a verb+noun format except for common actions like Save or Close.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
    <ul class="ml0 pl16">
      <li>New team</li>
      <li>Settings</li>
      <li>Post Job</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
    <ul class="ml0 pl16">
      <li>Create new team</li>
      <li>View settings</li>
      <li>Post job</li>
    </ul>
  </GridColumn>
</Grid>

### Headings and subheadings

All headings or subheadings should be concise, scannable, and sentence case. Don’t use periods at the end of headings. If a subheading is a full sentence, you may use a period.

### Lists

When writing lists:

- Use a colon (:) to introduce an unordered list
- Use sentence case
- If any list item contains two or more sentences, punctuate all list items
- If all list items are one sentence or fragments, don’t punctuate
