/// <reference types="vite/client" />

declare module "*.svg?url" {
    const content: string;
    export default content;
}
