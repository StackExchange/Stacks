<script lang="ts">
  import Grid from '$components/Grid.svelte';
  import GridColumn from '$components/GridColumn.svelte';
  import ColorSwatch from './ColorSwatch.svelte';

  import YAML from 'yaml';
  import colorsRaw from '$docs/public/brand/colors.yaml?raw';

  const colorsByCss = Object.fromEntries(
    YAML.parse(colorsRaw).colors.map(color => [color.cssVar, color])
  );

  const backgroundColors = YAML.parse(colorsRaw).colors.filter(i => i.background);

  let selected = $state(0);

  const themes = [
    {
      "background": "--brand-color-orange",
      "textBoxBackground": "--brand-color-black",
      "textColor": "--brand-color-white",
      "stackTop": "--brand-color-orange-medium",
      "stackLeft": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-black",
      "textBoxBackground": "--brand-color-white",
      "textColor": "--brand-color-black",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-off-white",
      "textBoxBackground": "--brand-color-black",
      "textColor": "--brand-color-white",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-blue-light",
      "textBoxBackground": "--brand-color-black",
      "textColor": "--brand-color-white",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-off-white",
    },
    {
      "background": "--brand-color-beige",
      "textBoxBackground": "--brand-color-black",
      "textColor": "--brand-color-white",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-orange-dark",
      "textBoxBackground": "--brand-color-white",
      "textColor": "--brand-color-black",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-orange-medium",
      "textBoxBackground": "--brand-color-white",
      "textColor": "--brand-color-black",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-blue-light",
    },
    {
      "background": "--brand-color-white",
      "textBoxBackground": "--brand-color-black",
      "textColor": "--brand-color-white",
      "stackTop": "--brand-color-orange",
      "stackLeft": "--brand-color-blue-light",
    },
  ]
</script>

<Grid>
  <GridColumn>
    <svg class="w100 h-auto" fill="none" height="338" viewBox="0 0 303 338" width="303">
      <!-- Card Background -->
      <path d="m0 0h302.347v337.861h-302.347z" fill={colorsByCss[themes[selected].background].hex}/>
      
      <!-- 3D Stack - Yellow Top Faces -->
      <g class="stack-tops" fill="#fc0">
        <path d="m357.089 210.876c-.823 8.533.612 18.335.001 27.005-3.19-.031-6.391-.207-9.576-.357-72.874-3.446-145.879-7.944-218.648-11.703-.174-6.356-.304-12.829-.155-19.209.057-2.48-.043-4.981 0-7.462z"/>
        <path d="m333.33 258.84.002 27.006-3.903-.358-215.968-28.777c.313-2.484-.256-5.058-.352-7.464-.185-4.612-.649-15.493.354-19.542z"/>
        <path d="m307.443 305.03v26.648l-.759.29-204.549-45.786-.374-2.115.354-24.872z"/>
        <path d="m279.782 349.092v26.648l-.693.219-181.2997-60.373c-.6756-.186-1.757-.424-2.4123-.249l.3546-27.358 184.0504 61.112z"/>
        <path d="m251.411 391.015.354 27.003-157.8107-74.433-.369-25.964c-.1865-.835.532-.955.727-1.221z" fill="#fc0"/>
        <path d="m148.214 167.173 229.442-6.04v27.003c-2.621-.272-5.223.258-7.802.356-2.353.089-4.738-.074-7.092 0-71.499 2.226-143.055 3.403-214.55 5.686-.037-.705.05-1.429.002-2.133-.553-8.068.412-16.739 0-24.872z"/>
        <path d="m418.437-49.2109.292 26.9422c-8.689 3.4757-17.202 7.4567-25.825 11.0758-47.015 19.73124-94.437 39.1207-141.495 58.981v-27.0034z"/>
        <path d="m407.093 57.3789.333 27.339-23.383 4.9941-1.087-.5488-186.018 35.7408-.846-.372v-26.6479z"/>
        <path d="m415.248 4.43767c.788 8.84183.191 18.00343.306 26.95313-8.594 2.5524-17.234 4.9956-25.839 7.5117-55.44 16.2114-110.928 32.3021-166.319 48.6771v-27.0034z"/>
        <path d="m394.323 109.967c1.66 7.584-.463 18.743.303 26.774-.113.478-.441.492-.834.586-2.382.566-7.703.792-10.463 1.064-2.302.228-4.996.459-7.447.711-67.815 6.989-135.639 13.878-203.404 21.327l-1.569-.364v-26.648z"/>
      </g>
      
      <!-- 3D Stack - Pink/Magenta Accent Faces -->
      <g class="stack-accents" fill="#f39fff">
        <path d="m418.793 321.021-.047 26.96-166.981 70.04-.355-27.004z"/>
        <path d="m417.021 267.367-.177 26.649c-7.922 4.73-15.67 9.841-23.583 14.567-37.637 22.478-75.77 44.622-113.48 67.153v-26.648z"/>
      </g>
      
      <!-- 3D Stack - Medium Orange Front Faces -->
      <g class="stack-fronts" fill={colorsByCss[themes[selected].stackTop].hex}>
        <path d="m393.26 308.582 25.533 12.436-167.383 69.996-157.0985-74.615c.0901-.123.9912-1.047 1.0639-1.066.6553-.175 1.7368.062 2.4124.248l181.2992 60.374.693-.22c37.71-22.532 75.843-44.675 113.48-67.153z"/>
        <path d="m391.134 258.131 25.888 9.238-137.24 81.721-184.0496-61.113 6.0286-3.909.374 2.115 204.549 45.786.759-.289c27.771-24.645 55.894-48.969 83.691-73.549z"/>
        <path d="m148.214 192.041c.049.705-.039 1.428-.001 2.134 71.494-2.284 143.051-3.461 214.549-5.687-1.037 7.129-4.999 15.384-5.674 22.384l-228.378-11.725 13.476-50.809c1.936 14.565 3.883 29.167 6.028 43.703z"/>
        <path d="m347.515 237.523-14.185 21.319-219.867-29.136c.1-.403.002-.885.327-1.254l14.922-21.841c-.149 6.38-.019 12.854.155 19.209 72.77 3.76 145.775 8.257 218.648 11.703z"/>
        <path d="m113.109 249.248c.096 2.405.665 4.98.352 7.464l215.968 28.777-21.986 19.542-205.328-45.834.105-.598z"/>
        <path d="m418.439-49.2137-167.028 69.9956c-52.387-24.79328-105.057-49.1947-157.0985-74.6147l166.8415-70.0212c52.489 24.727 105.169 49.2597 157.285 74.6403z"/>
        <path d="m251.411 47.7877c47.058-19.8604 94.48-39.24982 141.495-58.9811l22.341 15.63351-191.851 56.13869-124.4712-84.5593z"/>
        <path d="m223.395 87.5842c55.391-16.375 110.879-32.4657 166.319-48.6771l17.376 18.4761-211.001 40.505-79.79-82.7827z"/>
        <path d="m170.909 160.066 1.569.363c67.765-7.449 135.59-14.337 203.404-21.326-1.711 6.547.976 13.937 1.423 20.605.134-.402.994-1.578 1.06-1.774l20.922 3.198-35.641 52.583 6.208-25.225c2.578-.098 5.181-.627 7.801-.355v-27.003l-229.441 6.04-8.152-64.664z"/>
        <path d="m196.089 124.534.846.372 186.017-35.7412 1.087.5488c2.054 6.1337 8.972 14.2554 10.285 20.2524l-223.414 23.45-40.068-76.0351z"/>
      </g>
      
      <!-- 3D Stack - Light Blue Side Faces -->
      <g class="stack-sides" fill={colorsByCss[themes[selected].stackLeft].hex}>
        <path d="m251.411 20.7865v27.0034l-152.4861-71.7682 124.4711 84.5591v27.0035l-107.096-72.4788 79.79 82.7827v26.6478l-65.247-67.1526 40.069 76.0356v26.648l-30.848-57.558 8.152 64.664c.411 8.133-.553 16.804 0 24.872-2.145-14.536-4.093-29.138-6.029-43.703-2.455-18.469-4.803-36.964-7.262-55.436l-16.69-31.2443-.349-17.4159-12.504-13.0542-.146-23.30403-8.0898-5.83418.0158-26.85769c-1.3626-1.0878-3.2137-.8617-3.5754-2.8919-.5162-2.8976-.4822-21.8991-.0014-24.9105.0905-.5664.0466-1.028.7275-1.2214 52.0413 25.4198 104.7113 49.82141 157.0983 74.6146z"/>
      </g>
      
      <!-- Logo Area with Stroke -->
      <g class="logo-area">
        <path d="m34.3936 23.1191.8564.8565c-.8317.6477-1.5908 1.3843-2.2617 2.1973l-.2246.2802-.0401.0508c-.009.0117-.0183.0235-.0273.0352l-.0713.0918.002.0009c-.7163.9426-1.3194 1.9764-1.7872 3.0791v.002c-.003.0076-.0062.0152-.0097.0234-.0034.0081-.0079.0168-.0117.0264-.465 1.1099-.7957 2.2902-.9688 3.5225h.001c-.0014.0082-.0017.0161-.002.0224-.0927.654-.1406 1.3218-.1406 2 0 .5397.0315 1.0732.0899 1.5977h-13.5713v-3.5098h11.9502l.0117-.083c.0223-.1512.0485-.2997.0761-.4502l.0166-.0879-.0869-.0234-11.4326-3.0635.9092-3.3916 11.5742 3.1025.0801.0205.0342-.0751c.0534-.1189.1084-.2364.164-.3545l.0381-.0811-.0771-.0449-10.3877-5.9951 1.7549-3.0391 10.5439 6.084.0713.041.0518-.0635c.0829-.1001.1675-.1993.2548-.2968l.0616-.0694-.0655-.0644-8.6386-8.6348 2.4834-2.4834z"
              fill={colorsByCss[themes[selected].textBoxBackground].hex}
              stroke="#201c1d"
              stroke-width=".194632"/>
      </g>

      <!-- Text Box Backgrounds -->
      <g class="text-boxes" fill={colorsByCss[themes[selected].textBoxBackground].hex}>
        <path d="m10.3125 229.735h116.464v56.1447h-116.464z"/>
        <path d="m10.3125 187.627h109.059v56.1447h-109.059z"/>
        <path d="m10.3125 271.536h186.343v56.1447h-186.343z"/>
      </g>
      
      <!-- Text -->
      <text fill={colorsByCss[themes[selected].textColor].hex} font-family="Stack Sans Headline" class="ff-stack-sans-headline-notch" font-size="40.0288" letter-spacing="0em" xml:space="preserve">
        <tspan x="22.8291" y="229.663">Part.</tspan>
        <tspan x="22.8291" y="271.663">Sum.</tspan>
        <tspan x="22.8291" y="313.663">Solution.</tspan>
      </text>
    </svg>
  </GridColumn>
  <GridColumn padding={false} extraClasses="bg-white mbn12">
    <div class="d-flex gs12 ff-row-wrap h100 ">
      {#each backgroundColors as color, index}
        <ColorSwatch
          {color}
          showHex={true}
          onclick={() => selected = index}
          extraClasses="flex--item6"
        />
      {/each}
    </div>
  </GridColumn>
</Grid>