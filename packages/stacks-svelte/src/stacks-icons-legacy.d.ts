/**
 * TODO: Remove this file once @stackoverflow/stacks-icons-legacy is no longer needed.
 *
 * This file provides TypeScript module declarations for the legacy icons package,
 * which is an npm alias to @stackoverflow/stacks-icons@^6.6.1 in package.json.
 * The alias is needed because some icons (like IconClear) don't exist in v7.0.0-beta.1.
 *
 * Once all components are migrated to use icons that exist in v7+, we can:
 * 1. Remove the @stackoverflow/stacks-icons-legacy alias from package.json
 * 2. Delete this file
 * 3. Update all imports to use @stackoverflow/stacks-icons directly
 */

declare module "@stackoverflow/stacks-icons-legacy/icons" {
    export * from "@stackoverflow/stacks-icons/icons";
}

declare module "@stackoverflow/stacks-icons-legacy/spots" {
    export * from "@stackoverflow/stacks-icons/spots";
}
