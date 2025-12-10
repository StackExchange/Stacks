---
updated: 2025-12-09
---

<script>
  import Grid from '$components/Grid.svelte'
  import GridColumn from '$components/GridColumn.svelte'
</script>

This section offers guidance on the core motion principles of our brand and how to roll them out over a variety of assets. By following this we create a unique and cohesive look across all moving assets that connects to our great brand image.

## Motion Principles
The three guiding principles of our motion language align to strengthen our brand vision. All motion revolves around these core ideas.

<Grid>
  <GridColumn padding={false} extraClasses="bg-black-100">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Click</div>
    <iframe class="w100 d-block" style="aspect-ratio: 17/20" src="https://fast.wistia.net/embed/iframe/28fgxk6yvn?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-black-100">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Follow</div>
    <iframe class="w100 d-block" style="aspect-ratio: 17/20" src="https://fast.wistia.net/embed/iframe/tpn4t58k9s?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-black-100">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Snapback</div>
    <iframe class="w100 d-block" style="aspect-ratio: 17/20" src="https://fast.wistia.net/embed/iframe/rxsildvvaj?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>


### Click

For text and hero animations we use a snap motion, defined by steep easings and frame jumps that reflect the mechanics of a key press.

This behavior utilizes hold keyframes to create sharp hits that easing cannot achieve. When applying make sure to leave a 2 frame jump between keyframes to ensure the stagger stays consistent.

This should take place over 12 frames or less: 2 for the intro frame, maximum 10 for the sharp easing. This is in the context of 30fps.

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Click</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/1k9fdbz6ep?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Example</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/byekrmv0ii?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn extraClasses="ta-center bg-black-100">
    <svg width="198" height="186" viewBox="0 0 198 186" fill="none">
      <rect x="2.75391" y="3.2085" width="191.853" height="179.919" stroke="var(--black)" stroke-width="1"/>
      <circle cx="2.75387" cy="183.127" r="2.75387" fill="var(--black)"/>
      <circle cx="194.609" cy="2.75387" r="2.75387" fill="var(--black)"/>
      <path d="M20.1953 3.2085V183.128" stroke="var(--black)" stroke-width="1"/>
      <path d="M20.1953 3.2085L193.689 3.2085" stroke="#FF5E00" stroke-width="2"/>
      <circle cx="20.1953" cy="3.20798" r="1.83591" fill="#FF5E00"/>
      <circle cx="194.609" cy="2.75387" r="2.75387" fill="var(--black)"/>
      <path d="M194.607 3.2085C20.195 3.2085 20.1951 183.128 20.1951 183.128H2.75391" stroke="var(--black)" stroke-width="2"/>
      <circle cx="20.1953" cy="183.127" r="2.75387" fill="var(--black)"/>
    </svg>

    
    Hold Keyframe / 100% out<br/>
    (0, 0, 0, 1)
  </GridColumn>
</Grid>

### Follow

We use the Follow motion behavior for bigger movements such as transitions or when layering multiple animations.

The Follow behavior also features a hold key frame–in the middle–to cut between preceding and following motions.

This should take place over maximum 22 frames and include 1 frame skip in the middle. This is in the context of 30fps.

<Grid>
  <GridColumn padding={false} extraClasses="bg-brand-blue-light">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Follow</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/h0aaraunyo?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Example</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/jsnmmnj735?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn extraClasses="ta-center bg-black-100">
    <svg width="369" height="184" viewBox="0 0 369 184" fill="none">
      <path d="M2.72656 2.72949H365.721V181.043H2.72656V2.72949Z" stroke="#575757" stroke-width="1"/>
      <path d="M192.867 2.2793V180.592" stroke="#575757" stroke-width="1"/>
      <path d="M175.582 2.2793V180.592" stroke="#575757" stroke-width="1"/>
      <circle cx="365.721" cy="2.72928" r="2.72928" fill="#575757"/>
      <path d="M178.314 2.72928C178.314 4.23662 177.092 5.45857 175.585 5.45857C174.077 5.45857 172.855 4.23662 172.855 2.72928C172.855 1.22194 174.077 0 175.585 0C177.092 0 178.314 1.22194 178.314 2.72928Z" fill="#575757"/>
      <circle cx="192.87" cy="180.592" r="2.72928" fill="#575757"/>
      <path d="M3.18359 181.042L175.583 181.042" stroke="#FF5E00" stroke-width="2"/>
      <ellipse cx="175.581" cy="181.043" rx="2" ry="2" fill="#FF5E00"/>
      <ellipse cx="192.868" cy="2.7293" rx="2" ry="2" transform="rotate(180 192.868 2.7293)" fill="#FF5E00"/>
      <path d="M365.27 2.72949L192.87 2.72951" stroke="#FF5E00" stroke-width="2"/>
      <circle cx="2.72928" cy="180.583" r="2.72928" fill="#575757"/>
      <path d="M365.726 2.72949C192.871 2.72949 192.871 180.593 192.871 180.593C185.765 180.593 181.781 180.593 174.676 180.593" stroke="#575757" stroke-width="2"/>
      <path d="M2.72904 181.042C2.72904 181.042 175.582 181.043 175.582 2.72949L175.582 179.678" stroke="#575757" stroke-width="2"/>
      <circle cx="175.585" cy="180.592" r="2.72928" fill="#575757"/>
    </svg>

    
    100% in / Keyframe Jump / 100% out<br/>
    (1,1,0,1) + (0,0,0,1)
  </GridColumn>
</Grid>

### Snapback

The Snapback principle mimics the return movement of a key press to give objects weight and signify the end of the motion.

This motion behavior uses a subtle overshoot, then a held keyframe, and a final snapback to it’s resting point. This is a 2 frame hold to allow for it to settle and click back into place.

This should never be longer than 20 frames to keep the final movement as a snap and not a bounce. This is in the context of 30fps.

<Grid>
  <GridColumn padding={false} extraClasses="bg-brand-blue-light">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Snapback</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/ue7m1oqrud?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4 fc-white">Example</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/fgecwkcjnm?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn extraClasses="ta-center bg-black-100">
    <svg width="402" height="183" viewBox="0 0 402 183" fill="none">
      <path d="M362.496 2.25928V178.999" stroke="#575757" stroke-width="1"/>
      <path d="M380.531 2.25928V178.999" stroke="#575757" stroke-width="1"/>
      <path d="M191.168 2.25928V178.999" stroke="#575757" stroke-width="1"/>
      <path d="M174.035 2.25928V178.999" stroke="#575757" stroke-width="1"/>
      <rect x="2.70312" y="2.70508" width="395.862" height="176.74" stroke="#575757" stroke-width="1"/>
      <path d="M3.15625 179.446L174.034 179.446" stroke="#FF5E00" stroke-width="2"/>
      <ellipse cx="174.034" cy="179.445" rx="1.80346" ry="1.80348" fill="#FF5E00"/>
      <ellipse cx="191.165" cy="2.70628" rx="1.80345" ry="1.80349" transform="rotate(180 191.165 2.70628)" fill="#FF5E00"/>
      <path d="M362.047 2.70605L191.169 2.70607" stroke="#FF5E00" stroke-width="2"/>
      <path d="M174.035 178.999H191.168C191.168 178.999 191.168 2.70508 362.498 2.70508H398.567" stroke="#575757" stroke-width="2"/>
      <path d="M2.70547 179.445C2.70547 179.445 174.035 179.445 174.035 2.70508L174.035 179.445" stroke="#575757" stroke-width="2"/>
      <circle cx="174.033" cy="178.999" r="2.70521" fill="#575757"/>
      <circle cx="2.70521" cy="179.437" r="2.70521" fill="#575757"/>
      <circle cx="362.498" cy="2.70521" r="2.70521" fill="#575757"/>
      <path d="M401.274 2.70521C401.274 4.19925 400.063 5.41041 398.568 5.41041C397.074 5.41041 395.863 4.19925 395.863 2.70521C395.863 1.21116 397.074 0 398.568 0C400.063 0 401.274 1.21116 401.274 2.70521Z" fill="#575757"/>
      <circle cx="174.034" cy="2.7063" r="1.24553" fill="#575757" stroke="#575757" stroke-width="2"/>
      <circle cx="191.166" cy="178.999" r="2.70521" fill="#575757"/>
    </svg>


    100% in / Keyframe Jump / 100% out / Keyframe Jump<br/>
    (1,1,0,1) + (0,0,0,1)
  </GridColumn>
</Grid>

## Logo Animations

The symbol and lockup animations utilize a combination of the behaviors above.

<Grid>
  <GridColumn padding={false}>
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Primary lockup</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/2q9lik1lub?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false}>
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Symbol</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/6o2q3yxa0t?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

## Type Animations

Type animations utilize the Click behavior. While headlines animate word-by-word, body copy should animate paragraph by paragraph. When animating two or more lines of text there is a subtle horizontal movement to emulate tabulating mechanics.

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Headlines</div>
    <iframe class="w100 d-block mb12" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/jxwt1j6kk6?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>

    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/y94ibtjy0q?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-brand-blue-light">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Body copy</div>
    <iframe class="w100 d-block" style="aspect-ratio: 5/4" src="https://fast.wistia.net/embed/iframe/y1u9b8p9qt?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

## Video Toolkit

### Transitions

We use these transitions to wipe screens or swap between content at a scale. We should use vertical motion by default, but where needed we can opt for right-to-left motion.

<Grid>
  <GridColumn padding={false}>
    <iframe class="w100 h100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/4osarroq6a?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false}>
    <iframe class="w100 h100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/id6yyvkqfm?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false}>
    <iframe class="w100 h100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/cdzzmxff3b?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

The above transitions can also be applied to more complex layouts.

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <iframe class="w100 d-block mb12" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/p3hpmpgot2?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>

    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/gkqcf0z5bv?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-brand-blue-light">
    <iframe class="w100 d-block" style="aspect-ratio: 4/5" src="https://fast.wistia.net/embed/iframe/8mv15a6lln?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>


### Lower Thirds

When introducing people or suppling the viewers with additional information in videos we use these lower thirds. The logo animation on the right is optional.

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <iframe class="w100 d-block mb12" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/ji7oteathr?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

### Intro/Outro Cards

The logo animations can also be used to start or end longer videos.

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Intro card</div>
    <iframe class="w100 d-block mb12" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/xd1zatj2ke?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Outro card</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/12pgc0g82i?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

### Cursor Animations

Our bespoke cursor animations can be used to show interactions both on desktop and mobile. 

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4 fc-white">Desktop</div>
    <iframe class="w100 d-block mb12" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/dk1fi092c3?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    The desktop cursor animation follows a combination of our principles. The position movement uses the easings set in the <strong>Follow</strong> behavior, while the rotation animates with a <strong>Snapback</strong> movement. On click, the cursor scales down with a slight overshoot and changes color to Stack Orange for roughly 10 frames.
  </GridColumn>
</Grid>

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Mobile</div>
    <iframe class="w100 d-block mb12" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/ufxmr7ae9l?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    The mobile cursor animation uses slightly smoother easings than the desktop cursor (70%-100%, rather than 100%-100%). Similarly to the desktop cursor, it changes color on click (to off-black) and on hold/drag (to Stack Orange). In addition to this color change, when dragging content the mobile cursor animates with a simple smear over the duration of the position movement.
  </GridColumn>
</Grid>

### Cursor Behaviors

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Dragging</div>
    <iframe class="w100 d-block mb12" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/12cgoz73l2?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Pressing</div>
    <iframe class="w100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/2g1j94svnw?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Interaction</div>
    <iframe class="w100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/zx1k96pkud?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

### UI Animations

Our core motion principles can also be applied to UI when showing digital interactions.

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Body copy</div>
    <iframe class="w100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/7sci6jd34v?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Headlines</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/s4ljdixhzq?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>

    <Grid>
      <GridColumn padding={false} extraClasses="bg-white">
        <iframe class="w100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/cxm024kmq4?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
      </GridColumn>

      <GridColumn padding={false} extraClasses="bg-white">
        <iframe class="w100 d-block" style="aspect-ratio: 1/1" src="https://fast.wistia.net/embed/iframe/yn4pqdd1s6?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
      </GridColumn>
    </Grid>
  </GridColumn>
</Grid>

## Bringing it together

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <iframe class="w100 d-block mb12" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/lhh1ncm5r3?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

## Things to avoid

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not use easings other than the ones provided</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/czzxnqu77y?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not start text animation too far from its final position</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/vqjbjcnpe8?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not use different accent colors on type </div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/pirbuxhbci?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not animate body copy line-by-line</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/nrf4cp3ufz?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not disregard reading timings</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/z4vituq2li?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not transition elements in opposite directions</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/y17gwoecol?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not use different accent colors on cursor</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/6uvspyuxoa?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not exaggerate the cursor rotation</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/ac1jxmn30l?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>

<Grid>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not rotate the mobile cursor</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/bd6c9m5hab?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white">
    <div class="bg-black ps-absolute fs-fine fc-white t0 l0 px6 py4">Do not use fades</div>
    <iframe class="w100 d-block" style="aspect-ratio: 16/9" src="https://fast.wistia.net/embed/iframe/dl2ai670kw?seo=false&videoFoam=true&doNotTrack=true&seo=false&videoFoam=false&fitStrategy=fill&autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&volumeControl=false&fullscreenButton=false&silentAutoPlay=true&settingsControl=false&plugin[captions-v1]=false&smallPlayButton=false&endVideoBehavior=loop" frameborder="0" scrolling="no" allow="autoplay" loading="lazy"/>
  </GridColumn>
</Grid>