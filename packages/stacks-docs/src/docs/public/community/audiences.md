---
title: "Audiences"
description: "The three groups you’ll be writing for on Meta — and how to tailor calls-to-action for each."
updated: 2026-06-23
---

<script lang="ts">
    import { Icon } from '@stackoverflow/stacks-svelte';
    import { IconCheck24FillCircle, IconCross24FillCircle } from '@stackoverflow/stacks-icons';
    import Grid from '$components/Grid.svelte';
    import GridColumn from '$components/GridColumn.svelte';
</script>

[Meta sites](/community/terminology#meta--what-is-it-and-how-does-it-work) are the backbone of Stack Overflow’s Public Platforms — spaces where the communities discuss how their sites should work, raise issues, and influence decisions. For sites with their own domain, you can find the respective Meta sites at `meta.` + the domain (e.g., `meta.stackoverflow.com`); for subdomain sites, you can find them at `sitename.meta.stackexchange.com` (e.g., `math.meta.stackexchange.com`).

## Introduction

Writing on Meta sites involves addressing a few different audiences, sometimes in a single post. When addressing the communities that use the Stack Exchange sites, one task before us is rebuilding trust with a technical, opinioned, and change-averse user base. At the same time, we must inform and entice new or less-seasoned users who are looking to possibly do more. We must also re-engage users who have shifted from being contributors to more passive readers over time. We need to speak to all groups. Communications authors may choose to make any of these groups their primary audience, but we must remain conscious of all groups when writing to have maximum effectiveness.

For the purposes of these guidelines, we’re roughly dividing the people you might need to communicate with into three somewhat arbitrary groups, whose boundaries might be somewhat fuzzy on occasion.

## Seasoned users

**Seasoned users** are perhaps slow to trust or get excited about something that is new, or a shift from “the way things have always been.” Every good public communication is an opportunity to earn their confidence and build trust, and every bad public communication risks confirming their suspicions and fueling skepticism. The goal isn’t just to inform, but to convey that the company understands their craft, respects their investment of time on the platform, and values their opinions. Empathy is key: recognize the disruption that platform changes may cause for seasoned users. When speaking to seasoned users, write as a peer seeking collaboration. Use language that minimizes the emotional distance between you and the reader. **Calls-to-action are for collaboration and feedback.**

This group includes the traditional, somewhat loosely-defined roles we often refer to in product development: active/engaged user, contributor, curator, leader, moderator. When crafting communication focused on actions some of these groups perform (or that we hope they perform), it’s important to understand the role being targeted. But note that there is much overlap in those roles, and an individual user’s actions may fit into multiple roles.

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“We’ve built this new tool.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We understand the pain points you have with the existing workflow. To address X and Y, our proposed solutions are A and B.”</p>
    </GridColumn>
</Grid>

## Newer users

**Newer users** need clear, reassuring, and instructive communication. Fostering a sense of inclusion within the community is key since that’s our big differentiator. The tone can be slightly more enthusiastic and focus on immediate benefits and quick wins. **Calls-to-action should be grounded in the options available and what they can do now/today.**

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“These restrictions have been in place since X, with the intention of preventing Y, and our data has shown that Z, so we’re making the decision to temporarily lower the restrictions.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We’ve lowered these restrictions, and are excited to see a much larger proportion of the community using X!”</p>
    </GridColumn>
</Grid>

## Passively engaged users

**Passively engaged users** (experienced users who have drifted away) bring opportunity for reengagement through general messaging and also targeted messaging. This is a group we have historical data about (as opposed to new users) and so they may be prime for targeted messaging. Communications aimed at this group should focus on the additions that work toward a stronger future, and on the value of new improvements they may not be aware of. **Calls-to-action are “try it out” and asking for feedback, focusing on any kind of engagement** (since that is what we want from this group).

<Grid>
    <GridColumn extraClasses="bg-red-100">
        <h3 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCross24FillCircle} /> Don’t</h3>
        <p class="docs-copy">“X has a new face, and we hope to see engagement from newcomers increase in the coming months.”</p>
    </GridColumn>
    <GridColumn extraClasses="bg-green-100">
        <h3 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheck24FillCircle} /> Do</h3>
        <p class="docs-copy">“We’re excited to get your feedback on this new and improved version of X, which we hope addresses many of the longstanding concerns raised in prior posts over the years [potentially link to relevant posts that indicate community discontentment with a feature, etc.].”</p>
    </GridColumn>
</Grid>
