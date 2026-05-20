---
title: "Tone"
description: "How Stack Overflow’s voice should sound when speaking to Meta audiences."
updated: 2026-04-29
---

<script lang="ts">
    import { Icon, Notice } from '@stackoverflow/stacks-svelte';
    import { IconCheck24FillCircle, IconCross24FillCircle } from '@stackoverflow/stacks-icons';
    import Grid from '$components/Grid.svelte';
    import GridColumn from '$components/GridColumn.svelte';
</script>

Stack Overflow’s voice here builds upon the [brand foundations](/copy/voice) — we must sound like a technically competent human speaking clearly and honestly. Our tone should adapt to the situation, but it should never hide information, minimize user concerns, or use “fun engagement” to distract from real issues. Calls-to-action (CTAs) should always be genuine, and never used just to appease the audience — if it’s not important to gather community feedback for some reason (for communications surrounding changes prompted by legal reasons, for instance), don’t explicitly ask the audience for it.

The individual author’s unique voice, tone, and style can come through, but the topic and nature of the communication should be kept in mind. Conversation starters and requests for substantive feedback may lend themselves to a more casual discourse where that’s helpful, especially if the author’s own perspective is a key element of the communication. However, informative pieces and announcements should generally have a more “just the facts” approach.

## What our tone should sound like

### Direct and unambiguous

- Say what is happening and why.
- Avoid hedging, euphemisms, or corporate phrasing.
- State constraints honestly (technical, legal, or resource limitations).
- Be explicit about how long the post you’re making will be monitored for feedback.

**Why:** good communication succeeds because transparency builds trust. Users respond better when they understand context, reasoning, and limitations.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We’re improving review queues, and expect to maximize workflow efficiency for users. We’ll keep an eye on impact for some time, in order to minimize disruption.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“To pay down some tech debt, we’re making improvements to the back-end architecture for review queues. This may affect user workflows in unpredictable ways, so we’ll be monitoring Meta for related reports in the coming 2 months.”</p>
    </GridColumn>
</Grid>

### Human, not “crafted”

- Use everyday language, not buzzwords.
- Acknowledge how a change might impact the users in plain terms.
- Humor is fine when context allows, but not when announcing changes that are likely to be perceived negatively by the community.
- Be mindful of the fact that we have a global audience when using humor and cultural references or metaphors.

**Why:** “cute,” “fluffy,” or heavily branded tones may feel disrespectful if readers feel their concerns aren’t being addressed directly and fairly.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“In order to bring the future into the platform by integrating AI solutions, we’re moving some cheese around. We expect you’ll see a variety of funky behavior, but we can always blame solar flares for that!”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We’re improving our search functionality by integrating AI components into it. We expect this may negatively affect some search results in the short term, but honestly any change to the current search functionality is likely a step up.”</p>
    </GridColumn>
</Grid>

### Respectful and collaborative

- Treat users and moderators as partners, not passive recipients.
- Validate concerns and show awareness of past pain points.
- Respond promptly when users ask clarifying questions.

**Why:** community members expect staff to engage with difficult topics rather than avoid them, in a way that acknowledges the communities’ role as stakeholders.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We’ve realized how inefficient the question reopening system is after some internal analysis. Our findings show X, Y, and Z. We plan to address those problems by doing A, B, and C.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“You’ve told us several times about how inefficient the question reopening system is. We’ve finally devoted some time to fixing it, taking your past input as a key part of our problem definition phase.”</p>
    </GridColumn>
</Grid>

### Tone must match the seriousness of the content

- For feature delays, the tone should be empathetic and factual.
- For policy changes, the tone should be precise and definitive.
- For bug fix announcements, the tone should be technical, transparent, and actionable.

**Why:** mismatch between tone and situation may trigger frustration and resentment. For example, using a cheerful tone to announce controversial changes may further exacerbate readers’ negative feelings.

#### Feature delays

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“Oops! Work on feature Y was delayed due to unforeseen circumstances. We plan to deliver it as soon as possible, though, so you shouldn’t experience too much of a disruption.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“Our timeline for delivering feature Y has been delayed for roughly a month, in part due to incident X two weeks ago. We know this causes some inconvenience for a lot of our users, and are making this our top priority in the coming month. Our new deadline to deliver feature Y is DATE.”</p>
    </GridColumn>
</Grid>

#### Policy changes

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We believe our Privacy Policy needs to change to reflect the new reality we’re facing as a company, in which partnerships like the one with Y become common.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“The Privacy Policy will be edited on DATE. This change will take place in order to accommodate some technical aspects of our partnership with Y, explained further down in this post.”</p>
    </GridColumn>
</Grid>

#### Bug fix announcements

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“Thank you for your report. We’ve fixed the bug now.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“When we integrated with Z for better spam prevention last month, we failed to account for edge case X. I’ve now gone over the relevant code and done Y, to ensure edge cases like X won’t happen again. If you see the issue persist, please respond to this post.”</p>
    </GridColumn>
</Grid>

## What our tone should never sound like

### Overly polished, vague, or heavy on marketing fluff

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“We believe this change supports our vision of creating the world’s leading knowledge repository for veteran and aspiring technologists.”</li>
            <li>“We’re excited to announce…” (when announcing something painful or controversial)</li>
        </ul>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“This change introduces mechanisms for validating whether content is obsolete and needs to be updated by curators. This is an important piece of ensuring the relevance of content on the platform for future readers.”</li>
            <li>“We understand a lot of you may be concerned or frustrated by this change.”</li>
        </ul>
    </GridColumn>
</Grid>

### Minimizing or dodging hard questions

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <ul class="docs-copy ml0 pl16">
            <li>“Details are in the press release.”</li>
            <li>“This work is just starting…” (without clarifying what we do know)</li>
        </ul>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <ul class="docs-copy ml0 pl16">
            <li>Quote relevant portions from sources, and explain using different language if relevant.</li>
            <li>Clarify up front what things we know, and as many open questions as we might have and anticipate users will ask about.</li>
        </ul>
    </GridColumn>
</Grid>

### One-way broadcast tone

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <ul class="docs-copy ml0 pl16">
            <li>Make announcements without follow-up.</li>
            <li>Post unclear updates with no engagement.</li>
            <li>Ignore direct questions.</li>
        </ul>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <ul class="docs-copy ml0 pl16">
            <li>Return to the post to monitor and respond to actionable feedback, or requests for clarification.</li>
            <li>Respond to questions directly, as much as you can.</li>
        </ul>
    </GridColumn>
</Grid>
