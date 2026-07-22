---
title: Newsletter
description: A newsletter is a recurring pieces of comms that may contain various items and call to actions.
updated: 2026-06-01
---

<script lang="ts">
    import { Icon } from "@stackoverflow/stacks-svelte";
    import { IconCheckFillCircle } from "@stackoverflow/stacks-icons/icons";
    import StacksEmailEmbed from "$components/StacksEmailEmbed.svelte";
    import EmailOptionsTable from "$components/EmailOptionsTable.svelte";
</script>

## Requirements

See the overview below outlining the required components, their variations, and any optional add-ons that may be needed.

<div
    class="overflow-x-auto my32"
    tabindex="0"
    role="region"
    aria-label="Newsletter template component requirements"
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
                <th scope="row">Header component</th>
                <td class="ta-center">1</td>
                <td>
                    Use the Stack Overflow wordmark and icon on every email. For B2B-focused sends, use the Stack Overflow Business header.
                </td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Headline components (5 variants)</th>
                <td class="ta-center">1</td>
                <td>
                    Choose the headline variant that fits the newsletter type. Keep headline copy concise and update visuals across editions where appropriate.
                </td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Footer</th>
                <td class="ta-center">1</td>
                <td>All emails end with a simple branded footer.</td>
                <td class="ta-center">
                    <Icon src={IconCheckFillCircle} class="fc-green-500" title="Required" />
                </td>
            </tr>
            <tr>
                <th scope="row">Text block (2 variants)</th>
                <td class="ta-center">0-1</td>
                <td>
                    Optional text block for supporting copy. Keep content concise and include links/CTA only where needed.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Secondary content</th>
                <td class="ta-center">0-1</td>
                <td>
                    Optional secondary module for additional but unrelated content.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Dividers</th>
                <td class="ta-center">As needed</td>
                <td>
                    Use visual dividers to separate repeated simple-card style sections.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">CTA cards</th>
                <td class="ta-center">0-2</td>
                <td>
                    Optional graphic-led card modules combining short copy and a CTA.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Link cards</th>
                <td class="ta-center">0-4</td>
                <td>
                    Optional cards for highlighting resources without additional asset-heavy context.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Secondary information (3 variants)</th>
                <td class="ta-center">0-1</td>
                <td>
                    Optional secondary information block with variant styles for different contexts.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Quote</th>
                <td class="ta-center">0-1</td>
                <td>
                    Optional quote block for extra context or color, limited to one per email.
                </td>
                <td class="ta-center"></td>
            </tr>
            <tr>
                <th scope="row">Highlights</th>
                <td class="ta-center">0-1</td>
                <td>
                    Optional text-and-illustration highlight section for a strong ending block.
                </td>
                <td class="ta-center"></td>
            </tr>
        </tbody>
    </table>
</div>

## Preview

<StacksEmailEmbed kind="template" slug="newsletter" showTokens={false} />

## Options

Props accepted when compiling the template, for example `compileEmailTemplate({ slug: "newsletter", props })`.

<EmailOptionsTable templateSlug="newsletter" />
