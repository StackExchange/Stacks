<script lang="ts">
    import type { ContentTypeName } from "./PostSummary.svelte";
    import Icon from "../Icon/Icon.svelte";
    import Link from "../Link/Link.svelte";
    import { IconDocumentAlt } from "@stackoverflow/stacks-icons/icons";

    /**
     * The type of content to indicate
     * @type {"announcement" | "how-to-guide" | "knowledge-article" | "policy"} ContentType
     */
    export let name: ContentTypeName;

    /**
     * The URL to navigate to when the content type is clicked
     */
    export let href: string;

    /**
     * The excerpt text to be displayed
     */
    export let i18nContentTypeText: string | undefined = undefined;

    const TYPE_TEXT_MAP = {
        "announcement": "Announcement",
        "how-to-guide": "How-to guide",
        "knowledge-article": "Knowledge article",
        "policy": "Policy",
    };
</script>

<div class="s-post-summary--content-type">
    <Link {href} class="s-link s-link__grayscale">
        <Icon src={IconDocumentAlt} />
        {i18nContentTypeText || TYPE_TEXT_MAP[name]}
    </Link>
</div>
