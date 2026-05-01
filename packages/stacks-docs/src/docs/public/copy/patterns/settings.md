---
title: Settings & preferences
description: Guidelines for writing clear, user-friendly labels and descriptions for settings and preferences.
updated: 2026-02-12
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon, Checkbox, TextInput } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossFillCircle } from '@stackoverflow/stacks-icons'
</script>

## Write labels in the affirmative

Preferences and settings should always be written in the affirmative—even if the preference is meant to disable a feature. When a user checks a feature preference, they should be *getting* that feature.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <div class="d-flex fd-column g16">
      <Checkbox id="affirmative-dont-1" name="affirmative-dont-1" label="Disable sticky header" checked />
      <Checkbox id="affirmative-dont-2" name="affirmative-dont-2" label="Disable left navigation" />
      <Checkbox id="affirmative-dont-3" name="affirmative-dont-3" label="Disable light mode" checked />
      <Checkbox id="affirmative-dont-4" name="affirmative-dont-4" label="Disallow advertising" />
      <Checkbox id="affirmative-dont-5" name="affirmative-dont-5" label="Hide your real name" checked />
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="d-flex fd-column g16">
      <Checkbox id="affirmative-do-1" name="affirmative-do-1" label="Enable sticky header" />
      <Checkbox id="affirmative-do-2" name="affirmative-do-2" label="Enable left navigation" checked />
      <Checkbox id="affirmative-do-3" name="affirmative-do-3" label="Enable dark mode" />
      <Checkbox id="affirmative-do-4" name="affirmative-do-4" label="Allow advertising" checked />
      <Checkbox id="affirmative-do-5" name="affirmative-do-5" label="Show your real name" />
    </div>
  </GridColumn>
</Grid>

## Use descriptions to explain

Descriptions are optional and can supplement a label in a few ways:

- Further define a label
- Explain how the input will be used
- Show an example of a valid input

Avoid using tooltips.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <div class="d-flex fd-column g16">
      <TextInput id="descriptions-dont-1" label="Site name" />
      <TextInput id="descriptions-dont-2" label="App descriptor" />
      <TextInput id="descriptions-dont-3" label="Industries" placeholder="e.g. Advertising, Finance" />
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="d-flex fd-column g16">
      <TextInput id="descriptions-do-1" label="Site name">
        {#snippet description()}Describes the site in the product, emails, integrations, and logs.{/snippet}
      </TextInput>
      <TextInput id="descriptions-do-2" label="App descriptor">
        {#snippet description()}This is automatically generated. You only need to manually set this if you're reinstalling the app.{/snippet}
      </TextInput>
      <TextInput id="descriptions-do-3" label="Industries" placeholder="e.g. Advertising, Finance">
        {#snippet description()}Add up to 4.{/snippet}
      </TextInput>
    </div>
  </GridColumn>
</Grid>

## Don't rely on placeholder text

Placeholder text can be used to show an example of a valid input.

Placeholder text disappears once a character is typed in the input, so the user should be able to complete their task without placeholder text always visible.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <div class="d-flex fd-column g16">
      <TextInput id="placeholder-dont-1" label="Single sign-on Service URL" placeholder="Must be https" />
      <TextInput id="placeholder-dont-2" label="Role" placeholder="Add up to 2 roles" />
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="d-flex fd-column g16">
      <TextInput id="placeholder-do-1" label="Single sign-on Service URL" placeholder="https://...">
        {#snippet description()}Must be https{/snippet}
      </TextInput>
      <TextInput id="placeholder-do-2" label="Role" placeholder="e.g. Full Stack, Back-end">
        {#snippet description()}Add up to 2 roles{/snippet}
      </TextInput>
    </div>
  </GridColumn>
</Grid>
