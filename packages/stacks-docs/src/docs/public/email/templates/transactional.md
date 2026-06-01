---
title: Transactional
description: A transactional email is functional. It is triggered by an event and usually is a short single message and call to action.
updated: 2026-06-01
---

<script lang="ts">
    import { Icon } from "@stackoverflow/stacks-svelte";
    import { IconCheckFillCircle } from "@stackoverflow/stacks-icons/icons";
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
</script>

## Requirements

See the overview below outlining the required components, their variations, and any optional add-ons that may be needed.

<div
    class="overflow-x-auto my32"
    tabindex="0"
    role="region"
    aria-label="Transactional template component requirements"
>
    <table class="s-table s-table__bx-simple">
        <thead>
            <tr>
                <th scope="col">Component</th>
                <th scope="col" class="ta-center">Quantity</th>
                <th scope="col">Description</th>
                <th scope="col" class="ta-center">Required</th>
            </tr>
        </thead>
        <tbody class="fs-body1">
            <tr>
                <th scope="row">Header</th>
                <td class="ta-center">x 1</td>
                <td>Use the Stack Overflow wordmark and icon at the top of every email.</td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Headline (2 variants)</th>
                <td class="ta-center">x 1</td>
                <td>
                    Keep headline copy ideally under 50 characters and make the core message clear without relying on body text.
                </td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Text block + primary CTA</th>
                <td class="ta-center">x 1</td>
                <td>
                    Body copy can be longer but should stay concise, include links where needed, and focus on one clear CTA per transactional email.
                </td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Footer</th>
                <td class="ta-center">x 1</td>
                <td>End all emails with a simple branded footer and utility links.</td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Illustration</th>
                <td class="ta-center">x 1</td>
                <td>
                    Optional branded illustration for additional context. Use no more than one.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Alert</th>
                <td class="ta-center">x 1</td>
                <td>
                    Optional secondary message not directly tied to the primary communication. Keep copy under 150 characters where possible and use no more than one.
                </td>
                <td class="ta-center"></td>
            </tr>
        </tbody>
    </table>
</div>

## Short

<StacksEmailEmbed kind="template" slug="transactional" />

## Long

<StacksEmailEmbed kind="template" slug="transactional-long" showTokens={false} />
