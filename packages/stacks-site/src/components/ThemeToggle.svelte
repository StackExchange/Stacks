<script lang="ts">
  import { browser } from '$app/environment';
  import { Popover, PopoverReference, PopoverContent, Button } from '@stackoverflow/stacks-svelte';

  // State for theme toggles
  let darkMode = $state(false);
  let customTheme = $state(false);
  let highContrast = $state(false);

  // Initialize theme from localStorage and system preferences
  $effect(() => {
    if (!browser) return;

    // Check localStorage and system preferences
    const forceDarkMode = localStorage.getItem('forceDarkModeOn');
    const forceCustomTheme = localStorage.getItem('customTheme');
    const forceHighContrast = localStorage.getItem('forceHighContrastModeOn');
    const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Initialize states
    darkMode = forceDarkMode === 'true' || (!forceDarkMode && browserPrefersDark);
    customTheme = forceCustomTheme === 'true';
    highContrast = forceHighContrast === 'true';

    // Apply initial theme
    applyTheme();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('forceDarkModeOn')) {
        darkMode = e.matches;
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  });

  // Apply theme classes when states change
  $effect(() => {
    if (!browser) return;
    applyTheme();
  });

  function applyTheme() {
    const body = document.body;
    const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Handle dark mode
    if (browserPrefersDark) {
      body.classList.toggle('theme-system', darkMode);
      body.classList.toggle('theme-dark', false);
    } else {
      body.classList.toggle('theme-system', true);
      body.classList.toggle('theme-dark', darkMode);
    }

    // Handle custom theme
    if (customTheme) {
      body.classList.add('theme-custom', 'themed');
    } else {
      body.classList.remove('theme-custom', 'themed');
    }

    // Handle high contrast
    if (highContrast) {
      body.classList.add('theme-highcontrast');
    } else {
      body.classList.remove('theme-highcontrast');
    }
  }

  function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('forceDarkModeOn', darkMode.toString());
  }

  function toggleCustomTheme() {
    customTheme = !customTheme;
    localStorage.setItem('customTheme', customTheme.toString());
  }

  function toggleHighContrast() {
    highContrast = !highContrast;
    localStorage.setItem('forceHighContrastModeOn', highContrast.toString());
  }
</script>

<div class="theme-controls bt bc-black-100 pt12 pb12 px12 mt-auto">
  <Popover id="theme-popover" placement="top-end">
    <PopoverReference>
      <Button class="w100" weight="clear">Theme</Button>
    </PopoverReference>
    <PopoverContent class="wmn3">
      <div class="d-flex fd-column g12">
        <div class="d-flex ai-center jc-space-between g8">
          <label class="s-label fs-body1 fw-normal" for="toggle-theme-dark">
            Dark mode
          </label>
          <input
            class="s-toggle-switch"
            id="toggle-theme-dark"
            type="checkbox"
            checked={darkMode}
            onchange={toggleDarkMode}
          />
        </div>

        <div class="d-flex ai-center jc-space-between g8">
          <label class="s-label fs-body1 fw-normal" for="toggle-theme-custom">
            Custom theme
          </label>
          <input
            class="s-toggle-switch"
            id="toggle-theme-custom"
            type="checkbox"
            checked={customTheme}
            onchange={toggleCustomTheme}
          />
        </div>

        <div class="d-flex ai-center jc-space-between g8">
          <label class="s-label fs-body1 fw-normal" for="toggle-theme-highcontrast">
            High contrast mode
          </label>
          <input
            class="s-toggle-switch"
            id="toggle-theme-highcontrast"
            type="checkbox"
            checked={highContrast}
            onchange={toggleHighContrast}
          />
        </div>
      </div>
    </PopoverContent>
  </Popover>
</div>

<style>
  .theme-controls {
    position: sticky;
    bottom: 0;
    background-color: var(--white);
  }
</style>
