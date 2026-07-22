declare global {
    const __APP_VERSION__: string;
    const __EMAIL_VERSION__: string;
    const __SVELTE_VERSION__: string;

    type DocsTocItem = {
        id: string;
        value: string;
        depth?: number;
        children?: DocsTocItem[];
        [key: string]: unknown;
    };

    type DocsNavItem = {
        slug: string;
        title?: string;
        description?: string;
        image?: string;
        externalUrl?: string;
        private?: boolean;
        items?: DocsNavItem[];
        [key: string]: unknown;
    };

    type DocsMetadata = {
        title?: string;
        description?: string;
        figma?: string;
        svelte?: string;
        js?: boolean;
        updated?: string;
        toc?: DocsTocItem[];
        [key: string]: unknown;
    };

    namespace App {
        interface Locals {
            session?: unknown;
            user?: unknown;
        }

        interface PageData {
            active?: DocsNavItem;
            breadcrumb?: { label: string; path: string }[];
            Content?: import("svelte").Component;
            filename?: string | null;
            hideFooter?: boolean;
            markdown?: string | null;
            metadata?: DocsMetadata | null;
            needsAuth?: boolean;
            source?: string | null;
            structure?: { navigation?: DocsNavItem[] };
            [key: string]: unknown;
        }
    }
}

declare module "@stackoverflow/stacks-icons" {
    export const IconLogo: string;
    export const IconGlyph: string;
    export const IconGlyph24: string;
    export const IconLock: string;
    export const IconChevron16Up: string;
    export const IconArrowUpRightBox: string;
    export const IconServiceGitHub: string;
    export const IconMenu: string;
    export const IconCross: string;
    export const IconSearch: string;
    export const SpotError404: string;
    export const SpotError500: string;
    export const SpotLoading: string;
}

declare module "turndown" {
    export default class TurndownService {
        constructor(options?: Record<string, unknown>);
        turndown(html: string): string;
    }
}

export {};
