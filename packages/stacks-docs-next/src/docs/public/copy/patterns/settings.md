---
title: Settings & preferences
description: Guidelines for writing clear, user-friendly labels and descriptions for settings and preferences.
updated: 2026-02-12
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossFillCircle } from '@stackoverflow/stacks-icons'
</script>

## Write labels in the affirmative

Preferences and settings should always be written in the affirmative—even if the preference is meant to disable a feature. When a user checks a feature preference, they should be *getting* that feature.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <div class="d-flex fd-column g16">
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-dont-1" checked />
        <label class="s-label fw-normal" for="affirmative-dont-1">Disable sticky header</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-dont-2" />
        <label class="s-label fw-normal" for="affirmative-dont-2">Disable left navigation</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-dont-3" checked />
        <label class="s-label fw-normal" for="affirmative-dont-3">Disable light mode</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-dont-4" />
        <label class="s-label fw-normal" for="affirmative-dont-4">Disallow advertising</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-dont-5" checked />
        <label class="s-label fw-normal" for="affirmative-dont-5">Hide your real name</label>
      </div>
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="d-flex fd-column g16">
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-do-1" />
        <label class="s-label fw-normal" for="affirmative-do-1">Enable sticky header</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-do-2" checked />
        <label class="s-label fw-normal" for="affirmative-do-2">Enable left navigation</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-do-3" />
        <label class="s-label fw-normal" for="affirmative-do-3">Enable dark mode</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-do-4" checked />
        <label class="s-label fw-normal" for="affirmative-do-4">Allow advertising</label>
      </div>
      <div class="d-flex g8 ai-center">
        <input class="s-checkbox" type="checkbox" id="affirmative-do-5" />
        <label class="s-label fw-normal" for="affirmative-do-5">Show your real name</label>
      </div>
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
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="descriptions-dont-1">Site name</label>
        <input class="s-input" id="descriptions-dont-1" type="text" />
      </div>
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="descriptions-dont-2">App descriptor</label>
        <input class="s-input" id="descriptions-dont-2" type="text" />
      </div>
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="descriptions-dont-3">Industries</label>
        <input class="s-input" id="descriptions-dont-3" type="text" placeholder="e.g. Advertising, Finance" />
      </div>
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="d-flex fd-column g16">
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="descriptions-do-1">
          Site name
          <p class="s-description mt2">Describes the site in the product, emails, integrations, and logs.</p>
        </label>
        <input class="s-input" id="descriptions-do-1" type="text" />
      </div>
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="descriptions-do-2">
          App descriptor
          <p class="s-description mt2">This is automatically generated. You only need to manually set this if you're reinstalling the app.</p>
        </label>
        <input class="s-input" id="descriptions-do-2" type="text" />
      </div>
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="descriptions-do-3">
          Industries
          <p class="s-description mt2">Add up to 4.</p>
        </label>
        <input class="s-input" id="descriptions-do-3" type="text" placeholder="e.g. Advertising, Finance" />
      </div>
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
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="placeholder-dont-1">Single sign-on Service URL</label>
        <input class="s-input" id="placeholder-dont-1" type="text" placeholder="Must be https" />
      </div>
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="placeholder-dont-2">Role</label>
        <input class="s-input" id="placeholder-dont-2" type="text" placeholder="Add up to 2 roles" />
      </div>
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="d-flex fd-column g16">
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="placeholder-do-1">
          Single sign-on Service URL
          <p class="s-description mt2">Must be https</p>
        </label>
        <input class="s-input" id="placeholder-do-1" type="text" placeholder="https://..." />
      </div>
      <div class="d-flex gy4 fd-column">
        <label class="d-block s-label" for="placeholder-do-2">
          Role
          <p class="s-description mt2">Add up to 2 roles</p>
        </label>
        <input class="s-input" id="placeholder-do-2" type="text" placeholder="e.g. Full Stack, Back-end" />
      </div>
    </div>
  </GridColumn>
</Grid>
