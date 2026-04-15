---
title: "Accessibility"
description: "A non-comprehensive guide to accessibility best practices when using Stacks."
---

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="target">Target</h2><a class="s-btn s-btn__clear" href="#target"><span class="v-visible-sr">Section titled Target</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">All Stack Overflow product UIs must conform to the AA conformance level of the Web Content Accessibility Guidelines (WCAG) 2.2 with a few exceptions around color contrast documented below.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="high-contrast-modes">High contrast modes</h3><a class="s-btn s-btn__clear" href="#high-contrast-modes"><span class="v-visible-sr">Section titled High contrast modes</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">When high contrast mode is enabled, Stack Overflow product UIs must meet or exceed the <a href="https://www.w3.org/TR/WCAG22/#contrast-enhanced">Success Criterion 1.4.6 Contrast (Enhanced)</a> of the <a href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG) 2.2</a> and should conform to the remaining <a href="https://www.w3.org/TR/WCAG22/#cc1">AAA conformance level rules</a> when reasonably achievable. This only applies to the subset of Stack Overflow products that provide high contrast modes. <strong>Note: not all Stack Overflow products are expected to support high contrast modes</strong>.</p>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="visual-accessibility">Visual accessibility</h2><a class="s-btn s-btn__clear" href="#visual-accessibility"><span class="v-visible-sr">Section titled Visual accessibility</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Stack Overflow product UIs MUST conform to a custom conformance level of the Accessible Perceptual Contrast Algorithm (APCA). This custom conformance level replaces the <a href="https://www.w3.org/TR/WCAG22/#cc1">AA conformance level</a> of the <a href="https://www.w3.org/TR/WCAG22/">Web Content Accessibility Guidelines (WCAG) 2.2</a> for color contrast.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="color-&amp;-contrast">Color &amp; contrast</h3><a class="s-btn s-btn__clear" href="#color-&amp;-contrast"><span class="v-visible-sr">Section titled Color &amp; contrast</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Stacks aims to equip you with an accessible color palette and has been tested against WCAG AA, WCAG AAA and the newer APCA color standards. Most of our color combinations meet WCAG AA and APCA levels defined below. We also offer high contrast mode which offers a greater level of contrast.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="contrast-ratios">Contrast ratios</h4><a class="s-btn s-btn__clear" href="#contrast-ratios"><span class="v-visible-sr">Section titled Contrast ratios</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Contrast is the difference in luminance or color between any two elements. All visual readers require ample luminance contrast for fluent readability. Stack Overflow products must conform to a custom conformance level of the Accessible Perceptual Contrast Algorithm (APCA). Based on our custom conformance level, all text must have a Lightness contrast (Lc) value of 60, body copy must have a Lc value of 75, icons must have a Lc value of 45, and placeholder and disabled text must have a Lc of 30. These numbers will be negative when calculating for dark mode.</p>

    

    

    

<div class="d-grid grid__2 sm:grid__1 g32 my16">
  
  
      
      
      <div class="bg-black-100 bar-md overflow-hidden w100">
          <div class="d-flex fd-column ai-center g16 p24">
            
        <button class="s-btn" role="presentation">Button</button>
        <div class="bar-pill ta-center px8 py2 bg-green-400 fc-white">Robots</div>
    
          </div>
          <div class="bg-green-100 d-flex fd-column fs-body2 g16 h100 p24">
              <div class="d-flex ai-center g8 fs-subheading fw-bold">
                  
                      <svg aria-hidden="true" class="svg-icon iconCheckmarkSm fc-green-500" width="14" height="14" viewBox="0 0 14 14"><path d="M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4z"></path></svg> Do
                  
              </div>
              Use luminance contrast that meets our standards as defined above.
          </div>
      </div>
  
      
      
          
      
      <div class="bg-black-100 bar-md overflow-hidden w100">
          <div class="d-flex fd-column ai-center g16 p24">
            
        <button class="s-btn bg-theme-secondary-200" role="presentation">Button</button>
        <div class="bar-pill ta-center px8 py2 bg-green-400 fc-green-300">Robots</div>
    
          </div>
          <div class="bg-red-100 d-flex fd-column fs-body2 g16 h100 p24">
              <div class="d-flex ai-center g8 fs-subheading fw-bold">
                  
                      <svg aria-hidden="true" class="svg-icon iconClearSm fc-red-500" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg> Don't
                  
              </div>
              Use low luminance contrast that fail our standards.
          </div>
      </div>
  
</div>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="visual-cues">Visual cues</h4><a class="s-btn s-btn__clear" href="#visual-cues"><span class="v-visible-sr">Section titled Visual cues</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Visual readers with color vision deficiency (CVD) have problems differentiating some hues and therefore these users need help discerning differences between items. This means that color (hue) should never be the sole means of communicating information and should always be paired with a non-color dependent indicator to accommodate all visual users.</p>

    

    

    

<div class="d-grid grid__2 sm:grid__1 g32 my16">
  
  
      
      
      <div class="bg-black-100 bar-md overflow-hidden w100">
          <div class="d-flex fd-column ai-center g16 p24">
            
        <div class="d-flex ps-relative w100 has-error">
            <input class="s-input" type="text" placeholder="placeholder" role="presentation">
            <svg aria-hidden="true" class="svg-icon iconAlertCircle s-input-icon" width="18" height="18" viewBox="0 0 18 18"><path d="M9 17c-4.36 0-8-3.64-8-8s3.64-8 8-8 8 3.64 8 8-3.64 8-8 8M8 4v6h2V4zm0 8v2h2v-2z"></path></svg>
        </div>
    
          </div>
          <div class="bg-green-100 d-flex fd-column fs-body2 g16 h100 p24">
              <div class="d-flex ai-center g8 fs-subheading fw-bold">
                  
                      <svg aria-hidden="true" class="svg-icon iconCheckmarkSm fc-green-500" width="14" height="14" viewBox="0 0 14 14"><path d="M13 3.41 11.59 2 5 8.59 2.41 6 1 7.41l4 4z"></path></svg> Do
                  
              </div>
              Use an icon alongside color to convey meaning.
          </div>
      </div>
  
      
      
          
      
      <div class="bg-black-100 bar-md overflow-hidden w100">
          <div class="d-flex fd-column ai-center g16 p24">
            
        <div class="d-flex ps-relative w100 has-error">
            <input class="s-input" type="text" placeholder="placeholder" role="presentation">
        </div>
    
          </div>
          <div class="bg-red-100 d-flex fd-column fs-body2 g16 h100 p24">
              <div class="d-flex ai-center g8 fs-subheading fw-bold">
                  
                      <svg aria-hidden="true" class="svg-icon iconClearSm fc-red-500" width="14" height="14" viewBox="0 0 14 14"><path d="M12 3.41 10.59 2 7 5.59 3.41 2 2 3.41 5.59 7 2 10.59 3.41 12 7 8.41 10.59 12 12 10.59 8.41 7z"></path></svg> Don't
                  
              </div>
              Use color alone to convey meaning.
          </div>
      </div>
  
</div>

</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="focus-states">Focus states</h2><a class="s-btn s-btn__clear" href="#focus-states"><span class="v-visible-sr">Section titled Focus states</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Some people navigate through a website by using a keyboard or other device (instead of a mouse). A focus state should clearly let users know which item they’re on and is ready to interact with. Stack’s has taken a hybrid approach in using both the browser’s default styles (smaller interactive components like text links) and a custom focus ring.</p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="foundation-for-custom-approach">Foundation for custom approach</h3><a class="s-btn s-btn__clear" href="#foundation-for-custom-approach"><span class="v-visible-sr">Section titled Foundation for custom approach</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">
        The custom approach adds two different outline rings on the inside of the component. The outer ring color uses <code>secondary-theme-400</code>
        



<span class="bg-theme-secondary-400 h16 w16 d-inline-block bar-md mbn2">
  <span class="v-visible-sr">theme-secondary-400</span>
</span>

        (matching the primary button color) and the inner ring color uses <code>white</code>
        



<span class="bg-white h16 w16 d-inline-block bar-md ba bc-black-200 bs-sm mbn2">
  <span class="v-visible-sr">white</span>
</span>
 (matching the background).
    </p>

    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__2 mb32">
        
            <div class="ta-center">
                <button class="s-btn s-btn__dropdown s-btn__icon " role="presentation">
                    <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg> Button
                </button>
                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Default</div>
</div>

            </div>
        
            <div class="ta-center">
                <button class="s-btn s-btn__dropdown s-btn__icon focus-inset-bordered" role="presentation">
                    <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg> Button
                </button>
                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Focus</div>
</div>

            </div>
        
    </div>

    <p class="docs-copy">
        The outer ring color will always display as the theme color even when applied to a <code>muted</code> or <code>danger</code> styled button. This ensures the focus ring maintains a 3:1 color contrast ratio for any adjacent colors (WCAG level AA) within any theme (assuming the <code>secondary-theme</code> color
        



<span class="bg-theme-secondary-400 h16 w16 d-inline-block bar-md mbn2">
  <span class="v-visible-sr">theme-secondary-400</span>
</span>

        already passes the 3:1 contrast ratio).
    </p>

    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__4 md:grid__2">
        
            <div class="ta-center">
                <button class="s-btn s-btn__dropdown s-btn__icon s-btn__tonal" role="presentation">
                    <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg>
                    Button
                </button>
                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Tonal default</div>
</div>

            </div>
        
            <div class="ta-center">
                <button class="s-btn s-btn__dropdown s-btn__icon s-btn__tonal focus-inset-bordered" role="presentation">
                    <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg>
                    Button
                </button>
                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Tonal focus</div>
</div>

            </div>
        
            <div class="ta-center">
                <button class="s-btn s-btn__dropdown s-btn__icon s-btn__danger" role="presentation">
                    <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg>
                    Button
                </button>
                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Danger default</div>
</div>

            </div>
        
            <div class="ta-center">
                <button class="s-btn s-btn__dropdown s-btn__icon s-btn__danger focus-inset-bordered" role="presentation">
                    <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg>
                    Button
                </button>
                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Danger focus</div>
</div>

            </div>
        
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="meeting-level-aaa">Meeting level AAA</h3><a class="s-btn s-btn__clear" href="#meeting-level-aaa"><span class="v-visible-sr">Section titled Meeting level AAA</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Both focus rings are always 2px thick. This allows the focus state to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html">WCAG 2.4.13 Focus Appearance (AAA)</a> standards for High Contrast mode. Whenever possible, the rings should be added to the inside of the component so we can better ensure that the rings don't get accidentally cut off by the surrounding layout (which helps us to meet <a href="https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html">WCAG 2.4.11 Focus Not Obscured AA</a>). However, this does result in a padding reduction within the element, surrounding the text. When choosing to set the focus rings on the inside (inset), the component must have at least 4px of padding at the smallest size. This has been applied to buttons, navigation, and pagination.</p>

    <p class="docs-copy">When the padding amount is not sufficient enough to support a double ring on the inside of the component, the rings are placed on the outside. The components included are tags, toggles, form elements (input fields, selects, radio/checkboxes…), block links and the editor.</p>


    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__4 md:grid__2">
        
            <div class="ta-center">
                
                    <span class="s-tag " role="presentation">javascript</span>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Tag default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <span class="s-tag focus-bordered" role="presentation">javascript</span>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Tag focus</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <input class="s-toggle-switch " type="checkbox" role="presentation">
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Toggle default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <input class="s-toggle-switch focus" type="checkbox" role="presentation">
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Toggle focused</div>
</div>

            </div>
        
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="consistent-style-patterns">Consistent style patterns</h3><a class="s-btn s-btn__clear" href="#consistent-style-patterns"><span class="v-visible-sr">Section titled Consistent style patterns</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="filled">Filled</h4><a class="s-btn s-btn__clear" href="#filled"><span class="v-visible-sr">Section titled Filled</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Any component that already has an existing background color that fills the shape will maintain its original fill color.</p>

    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__4 md:grid__2">
        
            <div class="ta-center">
                
                    <div class="d-flex ai-center jc-center h32">
                        <ul class="s-navigation" role="presentation">
                            <li class="m-auto">
                                <a href="#" class="s-navigation--item is-selected ">
                                    <span class="s-navigation--item-text" data-text="Product">Product</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Navigation active default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <div class="d-flex ai-center jc-center h32">
                        <ul class="s-navigation" role="presentation">
                            <li class="m-auto">
                                <a href="#" class="s-navigation--item is-selected focus-inset">
                                    <span class="s-navigation--item-text" data-text="Product">Product</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Navigation active focus</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    
                    <div class="d-flex ai-center jc-center h32">
                        <div class="d-flex jc-space-around">
                            <div class="s-toggle-switch s-toggle-switch__multiple">
                                <input type="radio" name="toggle-(multi)-default" id="toggle-(multi)-default-four" checked="">
                                <label for="four" class="s-toggle-switch--label-off ">Off</label>
                                <input type="radio" name="toggle-(multi)-default" id="toggle-(multi)-default-one">
                                <label for="one">Weekly</label>
                            </div>
                        </div>
                    </div>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Toggle (multi) default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    
                    <div class="d-flex ai-center jc-center h32">
                        <div class="d-flex jc-space-around">
                            <div class="s-toggle-switch s-toggle-switch__multiple">
                                <input type="radio" name="toggle-(multi)-focused" id="toggle-(multi)-focused-four" checked="">
                                <label for="four" class="s-toggle-switch--label-off focus-inset">Off</label>
                                <input type="radio" name="toggle-(multi)-focused" id="toggle-(multi)-focused-one">
                                <label for="one">Weekly</label>
                            </div>
                        </div>
                    </div>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Toggle (multi) focused</div>
</div>

            </div>
        
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="bordered">Bordered</h4><a class="s-btn s-btn__clear" href="#bordered"><span class="v-visible-sr">Section titled Bordered</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">For components that have an existing border around the component when not in focus, a background fill color is added in addition to the focus rings. This ensures there’s a strong enough visual difference between the non-focus and focus state. These patterns are maintained across all components for consistency.</p>

    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__4 md:grid__2">
        
            <div class="ta-center">
                <div class="s-pagination">
                    <span class="s-pagination--item m-auto " role="presentation">
                        <span class="v-visible-sr">page</span>
                        2
                    </span>
                </div>

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Pagination default</div>
</div>

            </div>
        
            <div class="ta-center">
                <div class="s-pagination">
                    <span class="s-pagination--item m-auto focus-inset-bordered" role="presentation">
                        <span class="v-visible-sr">page</span>
                        2
                    </span>
                </div>

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Pagination focus</div>
</div>

            </div>
        
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="floating">Floating</h4><a class="s-btn s-btn__clear" href="#floating"><span class="v-visible-sr">Section titled Floating</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Components without an existing fill or border will only display the double rings on focus. Since the inner ring matches the background color in most cases, this will visually appear like a single ring around the perimeter of the component.</p>

    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__4 md:grid__2">
        
            <div class="ta-center">
                
                    <div class="d-flex ai-center jc-center h32">
                        
                            <button class="s-btn s-btn__clear bar0 p1 s-btn__dropdown pr12" role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconHeader" width="18" height="18" viewBox="0 0 18 18"><path d="M13.62 10.08 12.1 4.66h-.06l-1.5 5.42zM5.7 11.13 4.53 7.02h-.08l-1.13 4.11zM17.31 15h-2.25l-.95-3.25h-4.07L9.09 15H6.84l-.69-2.33H2.87L2.17 15H0l3.3-9.59h2.5l2.17 6.34L10.86 3h2.52l3.94 12z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconBold" width="18" height="18" viewBox="0 0 18 18"><path d="M13 6c0-1.5-1.57-3-3.5-3H4v12h6.25c1.79 0 3.25-1.71 3.25-3.5 0-1.3-.9-2.48-2-3 .83-.58 1.5-1 1.5-2.5M6.5 5H9a1.5 1.5 0 0 1 0 3H6.5zm3 8h-3v-3h3a1.5 1.5 0 1 1 0 3"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconItalic" width="18" height="18" viewBox="0 0 18 18"><path d="M7 3v2h2.58l-3.66 8H3v2h8v-2H8.42l3.66-8H15V3z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconCode" aria-hidden="true"><path d="M12.8 3.56 8.63 16.89l-1.43-.45 4.17-13.33zM5.53 7.2 2.73 10l2.8 2.8-1.06 1.06-3.33-3.33a.75.75 0 0 1 0-1.06l3.33-3.33zm13.33 2.27c.3.3.3.77 0 1.06l-3.33 3.33-1.06-1.06 2.8-2.8-2.8-2.8 1.06-1.06z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconStrikethrough" width="18" height="18" viewBox="0 0 18 18"><path d="M11.96 6.2a4 4 0 0 0-1.19-.7q-.44-.2-.96-.34a4 4 0 0 0-1.05-.13q-.96 0-1.43.35t-.47.99q0 .36.17.62l.01.01H4.5v-.26q0-.9.33-1.61.33-.7.92-1.18.6-.46 1.4-.7a6.4 6.4 0 0 1 4 .15q1.05.4 1.84.92zM3 8v2h5.02l1.1.32q.58.17.98.37t.62.47a1 1 0 0 1 .22.65q0 1.23-1.91 1.22-.69 0-1.34-.16a8 8 0 0 1-2.13-.9 4 4 0 0 1-.54-.4l-1.02 2q1.04.74 2.35 1.14 1.3.4 2.64.4.88 0 1.66-.18.8-.2 1.4-.62.63-.41.98-1.1.37-.68.37-1.63a3 3 0 0 0-.38-1.58H15V8z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                    </div>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Editor icon default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <div class="d-flex ai-center jc-center h32">
                        
                            <button class="s-btn s-btn__clear bar0 p1 s-btn__dropdown pr12" role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconHeader" width="18" height="18" viewBox="0 0 18 18"><path d="M13.62 10.08 12.1 4.66h-.06l-1.5 5.42zM5.7 11.13 4.53 7.02h-.08l-1.13 4.11zM17.31 15h-2.25l-.95-3.25h-4.07L9.09 15H6.84l-.69-2.33H2.87L2.17 15H0l3.3-9.59h2.5l2.17 6.34L10.86 3h2.52l3.94 12z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 focus-bordered fc-black" role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconBold" width="18" height="18" viewBox="0 0 18 18"><path d="M13 6c0-1.5-1.57-3-3.5-3H4v12h6.25c1.79 0 3.25-1.71 3.25-3.5 0-1.3-.9-2.48-2-3 .83-.58 1.5-1 1.5-2.5M6.5 5H9a1.5 1.5 0 0 1 0 3H6.5zm3 8h-3v-3h3a1.5 1.5 0 1 1 0 3"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconItalic" width="18" height="18" viewBox="0 0 18 18"><path d="M7 3v2h2.58l-3.66 8H3v2h8v-2H8.42l3.66-8H15V3z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconCode" aria-hidden="true"><path d="M12.8 3.56 8.63 16.89l-1.43-.45 4.17-13.33zM5.53 7.2 2.73 10l2.8 2.8-1.06 1.06-3.33-3.33a.75.75 0 0 1 0-1.06l3.33-3.33zm13.33 2.27c.3.3.3.77 0 1.06l-3.33 3.33-1.06-1.06 2.8-2.8-2.8-2.8 1.06-1.06z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                            <button class="s-btn s-btn__clear bar0 p1 " role="presentation">
                                <svg aria-hidden="true" class="svg-icon iconStrikethrough" width="18" height="18" viewBox="0 0 18 18"><path d="M11.96 6.2a4 4 0 0 0-1.19-.7q-.44-.2-.96-.34a4 4 0 0 0-1.05-.13q-.96 0-1.43.35t-.47.99q0 .36.17.62l.01.01H4.5v-.26q0-.9.33-1.61.33-.7.92-1.18.6-.46 1.4-.7a6.4 6.4 0 0 1 4 .15q1.05.4 1.84.92zM3 8v2h5.02l1.1.32q.58.17.98.37t.62.47a1 1 0 0 1 .22.65q0 1.23-1.91 1.22-.69 0-1.34-.16a8 8 0 0 1-2.13-.9 4 4 0 0 1-.54-.4l-1.02 2q1.04.74 2.35 1.14 1.3.4 2.64.4.88 0 1.66-.18.8-.2 1.4-.62.63-.41.98-1.1.37-.68.37-1.63a3 3 0 0 0-.38-1.58H15V8z"></path></svg>
                                <span class="v-visible-sr">[object Object]</span>
                            </button>
                        
                    </div>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Editor icon focus</div>
</div>

            </div>
        
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h4 class="fl-grow1 mb0 lh-sm  fs-body3 fc-black-400" id="exceptions">Exceptions</h4><a class="s-btn s-btn__clear" href="#exceptions"><span class="v-visible-sr">Section titled Exceptions</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">The exceptions to this pattern are the <code>Clear</code> button variations. All buttons display a background fill layer when in focus. <code>Clear</code>, <code>Outline</code> and <code>Filled</code> styles will all look the same when in focus. The fill color was chosen to match the existing <code>Filled</code> style.</p>

    <div class="d-grid fw-wrap gx24 gy64 jc-space-evenly bg-black-100 bar-md mb16 mt32 py32 px8 grid__4 md:grid__2">
        
            <div class="ta-center">
                
                    <button class="s-btn s-btn__dropdown s-btn__icon " role="presentation">
                        <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg> Button
                    </button>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Clear default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <button class="s-btn s-btn__dropdown s-btn__icon focus-inset-bordered" role="presentation">
                        <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg> Button
                    </button>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Clear focus</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <button class="s-btn s-btn__dropdown s-btn__icon s-btn__tonal" role="presentation">
                        <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg> Button
                    </button>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Tonal default</div>
</div>

            </div>
        
            <div class="ta-center">
                
                    <button class="s-btn s-btn__dropdown s-btn__icon s-btn__tonal focus-inset-bordered" role="presentation">
                        <svg aria-hidden="true" class="svg-icon iconPencil" width="18" height="18" viewBox="0 0 18 18"><path fill="#F1B600" d="m2 13.13 8.5-8.5 2.88 2.88-8.5 8.5H2z"></path><path fill="#E87C87" d="m13.68 2.15 2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0"></path></svg> Button
                    </button>
                

                







  


<div class="d-flex ai-center fc-light fs-caption fs-italic overflow-visible  mt8 fd-column mx-auto" style="" role="presentation">
    
    <div class="bl bc-black-250 h16 mb2"></div>
    <div class="ta-center w100">Tonal default focus</div>
</div>

            </div>
        
    </div>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="browser-default">Browser default</h3><a class="s-btn s-btn__clear" href="#browser-default"><span class="v-visible-sr">Section titled Browser default</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">Some focusable elements and Stacks components currently do not include custom focus styling. These elements will instead render the browser-default focus indicators.</p>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="viewport-size">Viewport size</h2><a class="s-btn s-btn__clear" href="#viewport-size"><span class="v-visible-sr">Section titled Viewport size</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">
        All Stack Overflow products must conform to the <a class="s-link" href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html">WCAG 2.2 <abbr title="Success Criteria">SC</abbr> 1.4.10: Reflow</a>. This requires that our product UIs support viewports as small as <b>320px x 256px</b> without requiring the user scrolling in multiple dimensions (unless an element requires it for usage or meaning). Very few users will ever use a viewport this small, but it's important to support it so users can zoom in up to 400% and still have a usable experience. At 400% zoom, a 320x256 viewport translates to 1280x1024, which is a common resolution for many users. Supporting this small viewport size ensures that users with low vision can still use our products effectively.
    </p>

    <div class="d-flex jc-space-between ai-end mb12"><h3 class="fl-grow1 mb0 lh-sm  fs-subheading fc-black-500" id="exceptions">Exceptions</h3><a class="s-btn s-btn__clear" href="#exceptions"><span class="v-visible-sr">Section titled Exceptions</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>
    <p class="docs-copy">
        There are some exceptions to this rule. Some elements such as tables and videos may require horizontal scrolling on small viewports. In these cases, it's acceptable to require scrolling in two dimensions. See the <a class="s-link" href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html#content-exceptions-for-reflow">WCAG 2.2 documentation on Reflow</a> for detailed guidance.
    </p>
</section>

<section class="docs-section">
    <div class="d-flex jc-space-between ai-end mb12"><h2 class="fl-grow1 mb0 lh-sm  fs-headline1" id="landmarks">Landmarks</h2><a class="s-btn s-btn__clear" href="#landmarks"><span class="v-visible-sr">Section titled Landmarks</span><svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconLink" aria-hidden="true"><path d="M8.93 6.81a5 5 0 0 1 3.56 1.95l-1.2.9a3.4 3.4 0 0 0-5.11-.37L3.7 11.77l-.11.12a3.4 3.4 0 0 0 4.9 4.67l1.41-1.4 1.06 1.05-1.42 1.43a4.9 4.9 0 0 1-6.92-6.92h.01l2.49-2.49a5 5 0 0 1 3.8-1.42m5.44-5.75a4.9 4.9 0 0 1 3.48 8.29l-2.5 2.5a4.9 4.9 0 0 1-7.37-.54l1.2-.9a3.4 3.4 0 0 0 5.11.37l2.48-2.47a3.4 3.4 0 0 0-4.8-4.8l-1.41 1.4-.53-.52-.53-.53 1.42-1.42h.01a5 5 0 0 1 3.44-1.38"></path></svg></a></div>

    <p class="docs-copy">
        <a class="s-link" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/landmark_role">ARIA landmarks</a> should be used across Stack Overflow product pages to provide clear navigation structures for users relying on assistive technologies.
        Landmarks are inserted into the page explictly using the <code>role</code> attribute on an element (e.g. <code>role="search"</code>, etc...) or by leveraging semantic HTML (e.g. an <code>header</code> element is given automatically the <code>banner</code> landmark).<br>
        Using semantic HTML elements should be preferred over using the <code>role</code> attribute whenever possible.
    </p>
    <p class="docs-copy">For a comprehensive guide on using ARIA landmark roles refer to:</p>
    <ul class="docs-copy">
       <li><a class="s-link" href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11">WCAG ARIA11 Technique</a></li>
       <li><a class="s-link" href="https://developer.mozilla.org/en-US/blog/aria-accessibility-html-landmark-roles">Using HTML landmark roles to improve accessibility</a></li>
       <li><a class="s-link" href="https://matatk.agrip.org.uk/landmarks">Landmarks Browser Extension</a></li>
    </ul>
</section>


            <!-- <div class="d-flex my48 pt24">
                <div class="mr16">
                    
                    <form
                        id="quick-positive-feedback-accessibility"
                        class="js-feedback-form v-hidden"
                        name="quick-positive-feedback-accessibility"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <form
                        id="quick-negative-feedback-accessibility"
                        class="js-feedback-form v-hidden"
                        name="quick-negative-feedback-accessibility"
                        method="POST"
                        data-netlify="true"
                        action="/success">
                    </form>
                    <div
                        class="s-popover s-popover__tooltip"
                        id="tooltip-feedback-positive"
                        role="tooltip">
                        <div class="s-popover--content">This page is useful</div>
                    </div>
                    <div
                        class="s-popover s-popover__tooltip"
                        id="tooltip-feedback-negative"
                        role="tooltip">
                        <div class="s-popover--content">This page needs improvement</div>
                    </div>
                    <div id="vote-feedback" class="s-vote">
                        <button
                            class="s-vote--btn"
                            type="submit"
                            form="quick-positive-feedback-accessibility"
                            aria-describedby="tooltip-feedback-positive"
                            aria-expanded="false"
                            data-controller="s-tooltip"
                            data-s-tooltip-placement="right"
                        >
                            <span class="s-btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteUp" aria-hidden="true"><path d="M10 3q.41.02.64.36l6.9 11.5a.75.75 0 1 1-1.28.78L10 5.21l-5.58 9.3h8.04v-.01h1.1l.97 1.5H3.1a.75.75 0 0 1-.65-1.13l6.9-11.5A.8.8 0 0 1 10 3"/></svg>
                            </span>
                            <span class="s-btn-icon-fill d-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteUpFill" aria-hidden="true"><path d="M10 3h.1a1 1 0 0 1 .42.21l.12.15 6.9 11.5.05.09v.03l.02.04q.04.12.04.26v.03q0 .13-.07.25v.02l-.03.04a1 1 0 0 1-.2.23l-.06.05-.04.01-.04.03-.04.01a1 1 0 0 1-.27.05H3a.75.75 0 0 1-.55-1.13l6.9-11.5A.8.8 0 0 1 10 3"/></svg>
                            </span>
                            <span class="v-visible-sr">upvote</span>
                        </button>
                        <button
                            class="s-vote--btn"
                            type="submit"
                            form="quick-negative-feedback-accessibility"
                            aria-describedby="tooltip-feedback-negative"
                            aria-expanded="false"
                            data-controller="s-tooltip"
                            data-s-tooltip-placement="right"
                        >
                            <span class="s-btn-icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteDown" aria-hidden="true"><path d="M10 16a.8.8 0 0 1-.64-.36l-6.9-11.5a.75.75 0 1 1 1.28-.78L10 13.8l5.58-9.3H6.44L5.47 3H16.9a.75.75 0 0 1 .65 1.14l-6.9 11.5A.8.8 0 0 1 10 16"/></svg>
                            </span>
                            <span class="s-btn-icon-fill d-none">
                                <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon IconVoteDownFill" aria-hidden="true"><path d="M10 16h-.1l-.1-.02a.8.8 0 0 1-.45-.34l-6.9-11.5-.04-.08-.01-.04L2.39 4a1 1 0 0 1-.04-.26V3.7q0-.14.06-.26l.01-.02.02-.04a1 1 0 0 1 .27-.27l.03-.02.05-.02.04-.02A1 1 0 0 1 3.1 3H17a.75.75 0 0 1 .54 1.14l-6.9 11.5A.8.8 0 0 1 10 16"/></svg>
                            </span>
                            <span class="v-visible-sr">downvote</span>
                        </button>
                    </div>
                </div>

                <form
                    class="w100 js-feedback-form"
                    name="feedback-accessibility"
                    method="POST"
                    data-netlify="true"
                    action="/success">
                    <fieldset class="d-flex fd-column fl-grow1 g16">
                        <legend class="fs-title fw-bold">How’d we do?</legend>
                        <div class="fs-body2">Anonymously upvote, downvote, or send additional feedback below.</div>

                        <textarea
                            class="s-textarea hmn1"
                            id="feedback-form"
                            name="additional-feedback"
                            placeholder="Tell us how we can improve this page…" required></textarea>

                        <div class="d-flex ai-center fd-row-reverse g8 jc-space-between mln6 sm:d-grid sm:grid__1 sm:ml0">
                            <button
                                type="submit"
                                class="s-btn as-start fl-shrink0">
                                Send feedback
                            </button>
                            <div class="d-flex fw-wrap g8 sm:d-grid sm:grid__1">
                                <a
                                    href="https://github.com/StackExchange/Stacks/edit/develop/packages/stacks-docs/./product/foundation/accessibility.html"
                                    class="s-btn s-btn__clear s-btn__icon s-btn__sm">
                                    <svg aria-hidden="true" class="svg-icon iconPencilSm" width="14" height="14"  viewBox="0 0 14 14"><path fill="#F1B600" d="m2 10.12 6.37-6.43 1.88 1.88L3.88 12H2z"/><path fill="#E87C87" d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0"/></svg>
                                    Edit
                                </a>
                                <a
                                    href="https://github.com/StackExchange/Stacks/issues/new/choose"
                                    class="s-btn s-btn__clear s-btn__icon s-btn__sm">
                                    File an issue
                                </a>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div> -->

            <!-- <div class="ta-right">
                <a href="https://www.netlify.com"><img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" /></a>
            </div> -->
