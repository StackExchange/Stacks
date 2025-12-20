<script lang="ts">
  import { browser } from '$app/environment';
  import { Popover, PopoverReference, PopoverContent, Button, Icon } from '@stackoverflow/stacks-svelte';
  import { IconArrowUpRight } from '@stackoverflow/stacks-icons'

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

<div class="theme-controls">
  <Popover id="theme-popover" placement="top-end">
    <PopoverReference>
      <Button class="w100" weight="clear">
        <svg width="20" height="20" viewBox="0 0 20 20" class="svg-icon">
          <path d="M9.54254 1.01074C9.84635 0.995378 10.1508 0.995469 10.4547 1.01074C10.5105 1.01352 10.5661 1.01964 10.6216 1.02344C10.706 1.02924 10.7904 1.03382 10.8746 1.04199C11.1119 1.06488 11.3462 1.0987 11.5777 1.13965C11.6383 1.15038 11.6989 1.16087 11.7593 1.17285C11.8382 1.18849 11.9166 1.20595 11.9947 1.22363C12.0592 1.23823 12.1238 1.25252 12.188 1.26855C12.2693 1.28886 12.3498 1.31148 12.4302 1.33398C12.4893 1.35048 12.5483 1.36705 12.607 1.38477C12.6843 1.40813 12.7611 1.43264 12.8375 1.45801C12.9027 1.47962 12.968 1.50127 13.0328 1.52441C13.1116 1.55261 13.1894 1.58297 13.2672 1.61328C13.3213 1.63435 13.3754 1.65558 13.4293 1.67773C13.5035 1.70836 13.5767 1.7409 13.65 1.77344C13.7194 1.80424 13.7892 1.83454 13.858 1.86719C13.9063 1.89014 13.9537 1.9147 14.0015 1.93848C14.0852 1.98005 14.1689 2.02207 14.2515 2.06641C14.3021 2.09359 14.3519 2.12227 14.4019 2.15039C14.4777 2.19294 14.5537 2.23536 14.6285 2.28027C14.6755 2.30853 14.7217 2.3381 14.7681 2.36719C14.8496 2.4182 14.9311 2.46957 15.0113 2.52344C15.0414 2.54363 15.0703 2.56539 15.1002 2.58594C15.1925 2.64965 15.2851 2.71369 15.3755 2.78125C15.3991 2.79885 15.4215 2.81811 15.4449 2.83594C15.5322 2.90251 15.6202 2.96886 15.7056 3.03906C15.7708 3.09252 15.8334 3.14887 15.897 3.2041C15.945 3.24581 15.9943 3.28621 16.0416 3.3291C17.8586 4.97578 18.9995 7.35467 18.9996 10C18.9995 14.9705 14.9701 19 9.99957 19C7.51465 18.9999 5.26485 17.9926 3.63629 16.3643C3.45049 16.1785 3.27608 15.9845 3.10992 15.7871C3.08943 15.7627 3.06766 15.7394 3.04742 15.7148C2.98531 15.6395 2.92604 15.5622 2.86676 15.4854C2.83534 15.4446 2.80277 15.4046 2.77203 15.3633C2.72133 15.2951 2.6731 15.2255 2.62457 15.1562C2.58728 15.103 2.5494 15.0502 2.51324 14.9961C2.45964 14.9159 2.40873 14.8344 2.35797 14.7529C2.33562 14.7171 2.31245 14.6817 2.29059 14.6455C2.23611 14.5553 2.18438 14.4638 2.13336 14.3721C2.1116 14.333 2.08913 14.2943 2.06793 14.2549C2.02425 14.1735 1.98295 14.0912 1.94196 14.0088C1.91703 13.9588 1.89176 13.9089 1.86774 13.8584C1.8277 13.774 1.78977 13.6889 1.7525 13.6035C1.73176 13.5561 1.71092 13.5088 1.69098 13.4609C1.65758 13.3807 1.62625 13.2998 1.59528 13.2188C1.57225 13.1587 1.54868 13.0988 1.52692 13.0381C1.50154 12.9672 1.47819 12.8956 1.45465 12.8242C1.43172 12.7548 1.40854 12.6854 1.38727 12.6152C1.36725 12.5491 1.34909 12.4825 1.33063 12.416C1.30961 12.3404 1.28819 12.2649 1.2691 12.1885C1.25299 12.1239 1.23885 12.059 1.22418 11.9941C1.2065 11.916 1.18904 11.8377 1.1734 11.7588C1.15712 11.6767 1.14344 11.5942 1.12946 11.5117C1.11939 11.4522 1.10807 11.3929 1.09918 11.333C1.08582 11.2433 1.07467 11.1534 1.06403 11.0635C1.05741 11.0073 1.05007 10.9511 1.04449 10.8945C1.03629 10.812 1.03089 10.7292 1.02496 10.6465C1.0098 10.4329 0.999578 10.2174 0.999573 10C0.999575 9.78396 1.00999 9.56966 1.02496 9.35742C1.03103 9.27211 1.036 9.18671 1.04449 9.10156C1.0526 9.01974 1.06448 8.93859 1.07477 8.85742C1.08276 8.79463 1.08889 8.73159 1.09821 8.66895C1.10941 8.59334 1.12322 8.51834 1.13629 8.44336C1.1479 8.37689 1.15931 8.31038 1.17242 8.24414C1.18901 8.16026 1.20821 8.07716 1.22711 7.99414C1.24097 7.93326 1.25397 7.87216 1.2691 7.81152C1.28901 7.73184 1.31154 7.65305 1.33356 7.57422C1.35063 7.513 1.36692 7.45154 1.38531 7.39062C1.4086 7.31363 1.43328 7.23724 1.45856 7.16113C1.48063 7.09454 1.50324 7.02808 1.52692 6.96191C1.54878 6.90094 1.57214 6.84063 1.59528 6.78027C1.62647 6.69871 1.65733 6.61694 1.69098 6.53613C1.70963 6.49144 1.73023 6.44764 1.74957 6.40332C1.78781 6.31554 1.82559 6.2274 1.86676 6.14062C1.89222 6.08707 1.91939 6.03441 1.94586 5.98145C1.9854 5.90223 2.02591 5.82338 2.06793 5.74512C2.08926 5.70544 2.11146 5.66627 2.13336 5.62695C2.18439 5.53527 2.23611 5.44375 2.29059 5.35352C2.31595 5.31153 2.34367 5.27103 2.36969 5.22949C2.41706 5.15387 2.46341 5.07742 2.51324 5.00293C2.5494 4.94886 2.58728 4.89601 2.62457 4.84277C2.6731 4.77354 2.72133 4.70389 2.77203 4.63574C2.80277 4.5944 2.83534 4.55447 2.86676 4.51367C2.92605 4.43679 2.98531 4.35955 3.04742 4.28418C3.08044 4.24407 3.1153 4.20554 3.14899 4.16602C3.20859 4.09618 3.26757 4.02545 3.32965 3.95703C3.4291 3.84732 3.5316 3.74042 3.63629 3.63574C3.80211 3.46993 3.9739 3.31325 4.14899 3.16309C4.19719 3.12179 4.24444 3.07935 4.29352 3.03906C4.35961 2.98475 4.42744 2.933 4.49469 2.88086C4.54111 2.84491 4.5872 2.8085 4.63434 2.77344C4.7438 2.69195 4.85512 2.61396 4.96735 2.53809C4.97101 2.53561 4.97442 2.53275 4.97809 2.53027C5.07272 2.4665 5.16873 2.40549 5.2652 2.3457C5.29613 2.32653 5.32679 2.3069 5.35797 2.28809C5.44848 2.23351 5.54042 2.18197 5.63239 2.13086C5.66702 2.11159 5.70098 2.09109 5.7359 2.07227C5.82685 2.0233 5.91905 1.97725 6.01129 1.93164C6.05393 1.91052 6.0962 1.88862 6.13922 1.86816C6.21132 1.83394 6.2842 1.80173 6.35699 1.76953C6.42477 1.73949 6.49245 1.70907 6.5611 1.68066C6.62357 1.65487 6.68664 1.63078 6.74957 1.60645C6.82115 1.57871 6.89294 1.55134 6.96539 1.52539C7.03283 1.50129 7.10063 1.47849 7.16852 1.45605C7.24045 1.43223 7.31259 1.40877 7.38531 1.38672C7.45085 1.36689 7.5167 1.34838 7.58258 1.33008C7.65816 1.30905 7.73375 1.28765 7.81012 1.26855C7.87466 1.25243 7.93964 1.23831 8.00446 1.22363C8.08259 1.20594 8.16091 1.1885 8.23981 1.17285C8.30178 1.16055 8.36416 1.15063 8.42633 1.13965C8.51326 1.12431 8.60028 1.10852 8.68805 1.0957C8.72737 1.08994 8.76683 1.08532 8.80621 1.08008C8.91184 1.06608 9.01782 1.0523 9.12457 1.04199C9.21461 1.03325 9.30487 1.02753 9.39508 1.02148C9.44417 1.01823 9.49324 1.01321 9.54254 1.01074ZM4.69684 15.3027C6.05399 16.6599 7.92861 17.4999 9.99957 17.5C14.1417 17.5 17.4995 14.1421 17.4996 10C17.4995 7.92888 16.6606 6.05353 15.3033 4.69629L4.69684 15.3027Z" />
        </svg>

        Theme
      </Button>
    </PopoverReference>
    <PopoverContent class="w50">
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
