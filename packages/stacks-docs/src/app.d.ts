declare global {
    const __APP_VERSION__: string;
    const __SVELTE_VERSION__: string;

    namespace App {
        interface Locals {
            session?: unknown;
            user?: unknown;
        }

        interface PageData {
            [key: string]: any;
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
