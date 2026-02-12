---
title: Error & success messages
description: Guidelines for writing clear, helpful error and success messages that guide users effectively.
updated: 2026-02-12
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'

  import { Icon } from '@stackoverflow/stacks-svelte';
  import { IconCheckFillCircle, IconCrossFillCircle } from '@stackoverflow/stacks-icons'
</script>

## Error messages

Things don't always run smoothly. Our systems can fail. It's important to craft clear, logical, and accessible error messages that help folks get things done.

### Understand the error

Before writing anything, make sure you know the answers to these questions:

- What happened?
- How did it happen?
- How can it be fixed?
- Is it a user or system error, or both?

How can we expect a user to know what's going on and how to fix something if *we* don't?

### Set a basic structure

A good error message structure explains what happened and what can be done about it. A good error message has the following structure:

<div class="p16 bar-md bg-black-100 ba bc-black-225 mb16">
  <span class="fs-body2 ff-mono d-block">[The error]</span>
  <span class="fs-body2 ff-mono d-block">[How to fix it]</span>
</div>

Here's an example of an inline form error message:

<div class="d-flex fd-column g8 p16 bar-md bg-black-100 has-error mb16 ba bc-black-225">
  <div>
    <div class="s-input-message fs-body2">This SVG file is invalid.</div>
    <div class="fs-body2 ff-mono mt8">[The error]</div>
  </div>
  <div>
    <div class="s-input-message fs-body2">Check its syntax or <a href="#">pick another file</a>.</div>
    <div class="fs-body2 ff-mono mt8">[How to fix it]</div>
  </div>
</div>

If we can't place the specific error, we're deliberately vague. The best we can do is tell the user how they might fix it.

<div class="d-flex fd-column g8 p16 bar-md bg-black-100 has-error mb16 ba bc-black-225">
  <div>
    <div class="s-input-message fs-body2">There was a problem syncing data.</div>
    <div class="fs-body2 ff-mono mt8">[The error]</div>
  </div>
  <div>
    <div class="s-input-message fs-body2">Check your database configuration and try again.</div>
    <div class="fs-body2 ff-mono mt8">[How to fix it]</div>
  </div>
</div>

### Keep it short and simple

We want to help folks fix errors quickly, so error messages should be concise. Strip out unnecessary words. Keep detail only when it's relevant.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"Can't create 'Engineering' because a team with that name already exists. Specify a different name."</li>
      <li>"Your notification failed and needs to be re-authorized."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"'Engineering' already exists. Try another team name."</li>
      <li>"Notification failed, please <a href="#">re-authorize it</a>."</li>
    </ul>
  </GridColumn>
</Grid>

### Consider etiquette

#### System error

Apologize when it's the system's fault and let the user know it's not their fault. Use an active voice to accept responsibility. For example:

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"Your changes couldn't be saved."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"We couldn't save your changes."</li>
    </ul>
  </GridColumn>
</Grid>

#### User error

Sometimes it's the user's fault, but there are ways to tell them without sounding like we're pointing the finger. For example, we can focus on the desired action rather than telling the user they've messed up:

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"You've missed your name."</li>
      <li>"You can't leave this blank."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"Please enter your name."</li>
      <li>"Please enter a team name."</li>
    </ul>
  </GridColumn>
</Grid>

A passive voice can work for more serious user errors, such as "This card was declined".

### Use the right tone

Tone is how you say something. A message's tone should depend on how serious the error is. Warmth is great for less serious errors, but avoid anything too lighthearted for serious errors.

**Avoid mechanical language and jargon, opting for plain language at all times**. The aim is to make a user feel like you're there, helping them solve the error.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"The password entered does not match our records. Please re-enter your password."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"That password's not right. Try again."</li>
    </ul>
  </GridColumn>
</Grid>

At the same time, error messages are not the place to be clever or make jokes. This will only muddy your message and add to your user's frustration.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"Whoops! Looks like your card was declined. Better ask Mom for another one."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"This card was declined. Try another payment method."</li>
    </ul>
  </GridColumn>
</Grid>

### What happens next

Some errors might need a button or link to fix or dismiss the message.

Always say what happens next. Buttons and links should make sense when read in isolation. Avoid just using things like "OK". "OK" can be used to dismiss a message or take an action. Be clear to the user what they're saying "OK" to.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <div class="ba bc-black-225 bar-md p16">
      <h3 class="fs-subheading lh-sm fc-dark mb6">Can't display metrics</h3>
      <p class="fs-body1 fc-medium mb16">You need to restart your data sync.</p>
      <div class="d-flex gx8 ai-center">
        <button class="s-btn s-btn__filled" type="button">OK</button>
        <button class="s-btn" type="button">Cancel</button>
      </div>
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="ba bc-black-225 bar-md p16">
      <h3 class="fs-subheading lh-sm fc-dark mb6">Can't display metrics</h3>
      <p class="fs-body1 fc-medium mb16">You need to restart your data sync.</p>
      <div class="d-flex gx8 ai-center">
        <button class="s-btn s-btn__filled" type="button">OK, restart sync</button>
        <button class="s-btn" type="button">Cancel</button>
      </div>
    </div>
  </GridColumn>
</Grid>

### Design, placement, and timing

Error messages should take the whole user experience into consideration. It should be clear what triggers an error message and what it's related to.

- [Inline validation](/system/forms/inputs) styles are best for displaying errors in **UI with form fields**.
- [Inline notifications](/system/components/notices) are best for displaying errors in **UI without form fields**. They should be located within close proximity of items that affect a feature.
- [Modals](/system/components/modals) are best when you want to ensure you **capture someone's focus**.

[Toast notifications](/system/components/notices) are best for confirming that an action someone performed is taking place or successfully completed. Since they appear away from the layout and disappear after a few seconds, toast notifications aren't recommended for error messages.

## Success messages

It's important that we keep users informed when actions are successfully completed. Success states throughout the user flow let users know that they're either getting closer to achieving the goal, or have completed it.

### Understand the situation

Before writing anything, make sure you know the answers to these questions:

- How close is the user to achieving the intended goal?
- What does the user need to do next?
- Is this message likely to appear frequently or is it unique?

### Be specific

A good success message provides clear information that the performed action was completed. It's fine to let users know that what they did was successful, but even better to be specific about the action they took.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"Successfully saved."</li>
      <li>"Upgrade complete."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"Your account details have been saved."</li>
      <li>"You've upgraded to the Business tier of Teams."</li>
    </ul>
  </GridColumn>
</Grid>

### Use the right tone

Tone is how you say something. Excitement makes sense for successfully finishing a large task, but avoid overdoing it for a regular system success. Limit exclamation marks to one per page.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <ul class="ml0 pl16">
      <li>"Thanks for updating your email."</li>
      <li>"Account created."</li>
    </ul>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <ul class="ml0 pl16">
      <li>"Your email has been updated."</li>
      <li>"Thanks for signing up. Your account has been created."</li>
    </ul>
  </GridColumn>
</Grid>

### What happens next

Is the successful action part of a larger goal? Are there other recommended actions that need to be performed? Success messages can be a good way to guide the user to the next action for a more seamless interaction.

<Grid>
  <GridColumn extraClasses="bg-red-100">
    <h4 class="d-flex ai-center g8 fc-red-500 mb16"><Icon src={IconCrossFillCircle} /> Don't</h4>
    <div class="ba bc-black-225 bar-md p16 mb8">
      <p class="mb8">"We've saved your profile changes."</p>
      <button class="s-btn s-btn__filled" type="button">OK</button>
    </div>
    <div class="ba bc-black-225 bar-md p16">
      <p class="mb8">"Your payment is complete."</p>
      <button class="s-btn s-btn__filled" type="button">OK</button>
    </div>
  </GridColumn>
  <GridColumn extraClasses="bg-green-100">
    <h4 class="d-flex ai-center g8 fc-green-500 mb16"><Icon src={IconCheckFillCircle} /> Do</h4>
    <div class="ba bc-black-225 bar-md p16 mb8">
      <p class="mb8">"We've saved your profile changes."</p>
      <button class="s-btn s-btn__filled" type="button">View profile</button>
    </div>
    <div class="ba bc-black-225 bar-md p16">
      <p class="mb8">"Your payment is complete."</p>
      <button class="s-btn s-btn__filled" type="button">View receipt</button>
    </div>
  </GridColumn>
</Grid>

### Design, placement, and timing

- [Inline validation](/system/forms/inputs) styles are best for displaying success in **UI with form fields**.
- [Toasts](/system/components/notices) are best for **common success messages**. Since they appear away from the layout and disappear after a few seconds, these are great for simple actions that were successfully completed.
- [Modals](/system/components/modals) are best when you want to ensure you **capture someone's focus** for a decision.
