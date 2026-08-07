---
title: "Terminology"
description: "Community-specific terminology used across Stack Overflow."
updated: 2026-06-23
---

<script lang="ts">
    import { Notice } from '@stackoverflow/stacks-svelte';
</script>

<Notice variant="info" role="note" class="mb16 s-anchors s-anchors__inherit s-anchors__underlined">
    <p>For product and brand naming (Stack Overflow, Stack Internal, Stack Ads, etc.), see the public <a href="/copy/naming">Naming guidelines</a>. This page covers terms specific to community and Meta contexts. Source: <a href="https://meta.stackexchange.com/questions/40353/stack-exchange-glossary-dictionary-of-commonly-used-terms">Meta Stack Exchange</a>.</p>
</Notice>

## Meta — what is it, and how does it work?

The term “meta” usually refers to the subsite that every site has to handle technical support, feature requests, and discussions about it. For sites with their own domain, Meta is at `meta.` plus the domain (for example, `meta.stackoverflow.com`). For subdomain sites, Meta is at `sitename.meta.stackexchange.com` (for example, `math.meta.stackexchange.com`). [Meta Stack Exchange](https://meta.stackexchange.com) (Meta.SE, MSE) is for questions that apply to the whole network.

Every site has a help center article that further explains what “meta” is and how it works — [Meta Stack Exchange article](https://meta.stackexchange.com/help/whats-meta) and [stackoverflow.com’s article](https://stackoverflow.com/help/whats-meta).

The term should be capitalized if referring to a specific meta site, such as using “Meta” in clear reference to Meta Stack Exchange. It should not be capitalized when used in a more generic sense, like a directive to “post on the site’s meta if you have a question.”

## Stack Exchange

In 2026 we formalized what had been theoretically [true for over a decade](https://stackoverflow.blog/2015/09/15/were-changing-our-name-back-to-stack-overflow/) by updating our use of language to reflect the fact that the Stack Exchange Network is part of Stack Overflow, rather than Stack Exchange being the parent of Stack Overflow.

For naming usage, see the Naming guide:

- [The flagship site vs the network](/copy/naming#the-flagship-site-vs-the-network): Stack Overflow vs Stack Overflow Public Platforms
- [Shorthand for individual sites](/copy/naming#shorthand-for-individual-sites): “a site,” “the site,” “sites”
- [Where “Stack Exchange” still applies](/copy/naming#where-stack-exchange-still-applies): legal entity, site name pattern, domains

## Community vs. communities

Stack Overflow, in its entirety, comprises 180+ sites, and for every one of them there is a corresponding community that formed by bringing that site to life. For that reason, you should generally avoid using the term “community” in its singular form to refer to the whole of users who use the sites.

You should also avoid using possessive determiners (“_our_ communities”) when referring to the communities or sites, since the company doesn’t own the communities.

## Network account vs. site profile

The terms “account” and “profile” are sometimes used interchangeably, but they actually have different meanings. For users to participate on any site, they need to create a profile on that site — which we usually refer to as a “site profile.” If a user chooses to participate on multiple sites, they’ll create a profile for each of the sites they want to participate on. Assuming they use the same email address/credentials for all of these, they will all be tied to the same overarching account — which we usually refer to as a “network account.”

## Site suspensions, chat suspensions, and post bans (question/answer blocks)

The term “suspension” or “site suspension” usually refers to suspensions manually applied by site moderators when they determine that a user’s actions are detrimental to the particular site they moderate. During this time “in the penalty box,” the user will not be able to post questions or answers or perform any other action on that particular site, and their reputation will be locked at 1 until the suspension expires. Any rep they gained over the ban time is gained when the suspension ends, at which point a reputation recount takes place.

The term “ban” can refer to the automatic question bans and answer bans, automated or manual editing and reviewing bans, which prevent users from doing those activities only (on a specific site).

The term “ban” or “suspension” can also apply to chat suspensions (which affect all chat rooms under the same domain).

## Votes vs. post scores vs. user reputation

Votes are the main way by which users can signal content quality. Clicking the up arrow next to a question or answer registers an upvote, and awards 10 rep to the author. Clicking the down arrow registers a downvote. For most answers, downvoting subtracts 2 rep from the author and 1 rep from the downvoter. For questions there is no penalty for the downvoter.

Voting affects the post’s score, which is the total number of upvotes minus the total number of downvotes. For example: an answer with 8 upvotes and 3 downvotes has a score of 5. (The number displayed to the left of each post is the net score.)

Having one’s posts voted on affects their reputation, which is a rough measurement of how much the community trusts that user. Basic use of the site, including asking questions, answering most questions, and suggesting edits, does not require any reputation at all. But the more reputation one earns, the more [privileges](https://meta.stackoverflow.com/privileges) one gains. The primary way to gain reputation is by posting good questions and useful answers.

## Moderators (usually elected, sometimes appointed) vs. community moderation actions

A “moderator,” “diamond moderator,” or “mod” for short, is a user that has been elected (or appointed) and has additional powers to oversee a site. They can merge questions, do mass-re-tagging, and have other abilities regular site users don’t. They’re distinguishable by the ♦ after their names on all posts, comments, and chat messages, and on their profile. Some Stack Overflow employees also have the ♦ and moderator powers across [all sites](https://stackexchange.com/sites), along with a “staff” marker.

The term “moderators” is also sometimes colloquially used to refer to users with 10k+ reputation points, who have certain moderation privileges, and do perform some moderation or curation tasks.

Regular (non-mod) users can perform a variety of actions (such as editing, approving review, closing and reopening posts, etc.) on site despite not having the moderators’ heightened powers, which can also be referred to as “moderation actions” or “curation actions.”

## [status-*] tags and their usage

Certain tags on Meta, denoted by their red color, can only be added to a question by a moderator or staff member. Of these tags, the subset of tags that start with `[status-*]` are reserved for the purpose of giving a feature request or bug an official status from staff. The current relevant tags and their usage were introduced in [this Meta post](https://meta.stackexchange.com/questions/402121/bringing-clarity-to-status-tag-usage-on-meta-sites).
