<script lang="ts">
    import clsx from "clsx";
    import type { ClassValue } from "svelte/elements";

    interface Props {
        /**
         * The source of the SVG
         */
        src: string;

        /**
         * The value of the nested title tag (will remove the aria-hidden attribute from the rendered SVG)
         */
        title?: string;

        /**
         * Boolean describing if the icon should be rendered with its native colors
         */
        native?: boolean;

        /**
         * Additional CSS classes added to the SVG element
         */
        class?: ClassValue;
    }

    const {
        src,
        title = "",
        native = false,
        class: className = "",
    }: Props = $props();

    const getSvg = (
        src: string,
        title: string,
        native: boolean,
        className: ClassValue
    ) => {
        let svg = src;

        // include "title" and remove aria-hidden
        if (title) {
            svg = svg.replace("</svg>", "<title>" + title + "</title></svg>");
            svg = svg.replace(' aria-hidden="true"', "");
        }

        // prepend "native" class the classes the SVG already had
        if (native) {
            svg = svg.replace(/class="/, 'class="native ');
        }

        // prepend custom classes to the classes the SVG already had
        if (className) {
            svg = svg.replace(/class="/, 'class="' + clsx(className) + " ");
        }

        return svg;
    };

    let svg = $derived(getSvg(src, title, native, className));
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html svg}
