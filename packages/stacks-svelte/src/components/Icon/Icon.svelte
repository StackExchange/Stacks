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

    const instanceId = $props.id();

    const scopeSvgIds = (svg: string) => {
        const idAttributePattern = /(\s)id=(["'])(.*?)\2/g;
        const urlReferencePattern =
            /url\(\s*(?:(["'])#(.*?)\1|#([^\s)]+))\s*\)/g;
        const fragmentReferencePattern =
            /(\s(?:href|xlink:href))=(["'])#(.*?)\2/g;
        const ariaReferencePattern =
            /(\saria-(?:labelledby|describedby))=(["'])(.*?)\2/g;

        const scopedIds = new Map(
            [...svg.matchAll(idAttributePattern)].map(([, , , id]) => [
                id,
                `${instanceId}-${id}`,
            ])
        );

        if (scopedIds.size === 0) return svg;

        return svg
            .replace(
                idAttributePattern,
                (match, space, quote, id) =>
                    `${space}id=${quote}${scopedIds.get(id)}${quote}`
            )
            .replace(
                urlReferencePattern,
                (match, quote = "", quotedId, unquotedId) => {
                    const id = quotedId ?? unquotedId;
                    const scopedId = scopedIds.get(id);
                    return scopedId
                        ? `url(${quote}#${scopedId}${quote})`
                        : match;
                }
            )
            .replace(fragmentReferencePattern, (match, name, quote, id) => {
                const scopedId = scopedIds.get(id);
                return scopedId
                    ? `${name}=${quote}#${scopedId}${quote}`
                    : match;
            })
            .replace(
                ariaReferencePattern,
                (match, name, quote, references) =>
                    `${name}=${quote}${references
                        .split(/\s+/)
                        .map((id: string) => scopedIds.get(id) ?? id)
                        .join(" ")}${quote}`
            );
    };

    const getSvg = (
        src: string,
        title: string,
        native: boolean,
        className: ClassValue
    ) => {
        let svg = scopeSvgIds(src);

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
