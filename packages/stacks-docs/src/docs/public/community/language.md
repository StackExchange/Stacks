---
title: "Language & grammar"
description: "Grammatical guidelines for Meta posts that reduce confusion and improve consistency across teams."
updated: 2026-04-29
---

<script lang="ts">
    import { Icon, Notice } from '@stackoverflow/stacks-svelte';
    import { IconCheck24FillCircle, IconCross24FillCircle } from '@stackoverflow/stacks-icons';
    import Grid from '$components/Grid.svelte';
    import GridColumn from '$components/GridColumn.svelte';
</script>

Language and grammar aren’t just mechanical decisions: they should structure clarity, remove ambiguity, and make messages readable for both novice and experienced users. Our grammatical guidelines should reduce confusion and improve consistency in communication from across teams.

<Notice variant="info" role="note" class="mb16 s-anchors s-anchors__inherit s-anchors__underlined">
    <p>The public <a href="/copy/styleguide">Style guide</a> covers brand-wide grammar and mechanics. The guidance below is specific to Meta posts.</p>
</Notice>

## Prefer active voice over passive voice

**Why:** passive voice hides responsibility and feels evasive, and is strongly associated with “bad communication” examples.

- While it’s generally best to avoid the passive voice, in certain situations it helps you sound softer without adding too many words.
- You can also occasionally use the passive voice to avoid excessively referring to yourself or Stack Overflow — as long as you’ve primarily used active voice (to make it clear we’re taking ownership of our actions).
- However, default to active voice in most cases.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“Comment spoilers have been updated.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We updated comment spoilers to fix keyboard accessibility.”</p>
    </GridColumn>
</Grid>

### Exceptions — when passive can vary the tone

Passive voice can be acceptable to soften an announcement, or to avoid excessive self-reference, as long as active voice dominates.

<Grid>
    <GridColumn>
        <h3>Active (strong / direct)</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“We are delaying the release.”</li>
            <li>“We decided not to move forward with further development.”</li>
        </ul>
    </GridColumn>
    <GridColumn>
        <h3>Passive (softened when needed)</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“The release is being delayed.”</li>
            <li>“A decision has been reached and development will not be moving forward.”</li>
        </ul>
    </GridColumn>
</Grid>

<Grid>
    <GridColumn>
        <h3>Active (strong first person)</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“Our team conducted a research study over six months.”</li>
            <li>“We obscure your personal data to ensure safety.”</li>
        </ul>
    </GridColumn>
    <GridColumn>
        <h3>Passive (avoiding self-reference)</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“A six-month study was conducted to ensure this was the right path.”</li>
            <li>“Your personal data is obscured to ensure safety.”</li>
        </ul>
    </GridColumn>
</Grid>

## Use concrete nouns and verbs, not abstractions

**Why:** abstract language feels like corporate filler. Users want to understand what concrete changes are happening, and their clear implications.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We are moving toward improving user experience.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“This update adds spoiler support in comments.”</p>
    </GridColumn>
</Grid>

## Name the actor, the action, and the impact

Every key paragraph should answer:

- Who is doing it?
- What are we doing?
- Why are we doing it? If we can’t share our reasons, why not?
- How does it affect the reader?

**Why:** this format creates understanding and can be seen in some of the best-received Meta posts; it avoids the confusion seen in “we are doing this thing” announcements that have been less successful.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We are working on custom badges, which will allow you to have that extra special flair on your profile.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“Team X is starting work on a custom badges feature that will allow communities to award users for achievements that are underrepresented or exceptional across the network. You can work with your communities to define what custom badges make sense for each of them.”</p>
    </GridColumn>
</Grid>

## Avoid jargon unless technically necessary

If jargon is required (API, “renderer,” “data dump,” etc.), define it simply (or link to a reliable source where it’s defined) the first time you use it.

**Why:** even highly technical users appreciate clarity. Ambiguity can result in frustration for the reader.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We’re updating the version of the third-party markdown renderer we use in question &amp; answer pages.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We’re updating the version of the third-party markdown renderer (the software that converts Markdown to HTML) we use in question &amp; answer pages.”</p>
    </GridColumn>
</Grid>

## Do not imply certainty when something is still in progress

If a product or feature is being released in phases, be specific about which phase you’re referring to (alpha, beta, etc.). If a roll-out is planned to take place for different portions of the user base at different times, be specific about the roll-out strategy. Whichever the case, it might be beneficial to define what the release plan is in the context of the particular product, feature, or project you’re communicating about.

**Why:** when a product or feature is presented as “done” or “released” or “available,” the community assumes that no further work will be done on it to address bug reports, user complaints, or community needs.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“This week we’ll be finalizing work on a new-and-improved version of the tag synonyms page, which is planned for release next week.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy mb16">“Starting next week, an alpha version of the tag synonyms page we’ve been working on will be made available for testing for users who’ve signed up for it. The current plan is to follow up with a beta version on DATE, which will be made available to all logged-in users.”</p>
        <p class="docs-copy mb16">“Starting next week, the new version of the tag synonyms page we’ve been working on will be made available to 10% of users. The page will be made available to the rest of the user base in 10% daily increments over the following weeks, assuming we don’t see a significant number of reports about the page’s usage.”</p>
        <p class="docs-copy">“Starting next week, we’ll be rolling out an experiment on the tag synonyms page. For two weeks we’ll monitor performance against the control group (which will be using the current version of the page). We’ll evaluate whether to graduate the feature depending on what we see in the data.”</p>
    </GridColumn>
</Grid>

## Be explicit about limitations

Do not hide the downsides. Avoid using spin (offering a particular interpretation or point of view intended to create a favorable impression) to soften the blow. Avoiding spin can be as simple as choosing the right words, but it’s also good to wholly avoid vague statements that are just aiming to balance out a downside. If what would follow a “but” is a solid statement, let it stand on its own as a separate sentence. If you find yourself writing “It’s possible we will…,” this means it’s just as possible that we won’t do that, and it’s not very reassuring — unless there are immediate plans to explore that thing, don’t use this kind of attempt at reassurance.

**Why:** open acknowledgement of limitations increases trust. It also avoids users contacting the support channel requesting clarifications about something confusing.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“This version may not support X, but it’s possible we will explore that in a future update.”</li>
            <li>“There might be some accessibility issues with the new rollout.”</li>
        </ul>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“This version does not support X.”</li>
            <li>“Accessibility issues remain, and we are tracking them here.”</li>
        </ul>
    </GridColumn>
</Grid>

## Keep sentences short and scannable

**Why:** short sentences reduce misinterpretation, especially in high-tension announcements.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“Given the importance of Y, by DATE we are planning to roll out an addendum to our Terms of Usage that will accommodate scenario X.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We’re working on an addendum to our Terms of Usage that will accommodate scenario X. This is an important addition because of Y. As per our current timeline, we plan to have the change deployed by DATE.”</p>
    </GridColumn>
</Grid>

## Use their language, not ours

Community members have developed key names by which they refer to parts of our public platform product that may not have a formal name. Those names may differ from our internal informal names (codenames, project nicknames, etc.) for those parts of the product. Always use the terms that community members are familiar with.

When they exist, make sure you refer to our public products by the names we market them under (“Stack Overflow,” “Stack Exchange,” “Stack Internal,” etc.). If necessary, disambiguate.

**Why:**

- Users don’t refer to features or projects by their internal codenames or project names. They’re not familiar with the structure of our product team(s), or which team works on which part of the product, so it’s better to simply refer to the relevant staff by their area of focus, not by non-descriptive team names.
- If we market a public product under a specific name, we should use that name consistently.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“Bonfire”</li>
            <li>“The post has X votes”</li>
            <li>“Disco” (or any other team name which you haven’t introduced previously)</li>
            <li>“Channels”</li>
        </ul>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“Chat”</li>
            <li>“The post’s score is X”</li>
            <li>“The developers”</li>
            <li>“Stack Internal (formerly known as Stack Overflow for Teams)”</li>
        </ul>
    </GridColumn>
</Grid>
