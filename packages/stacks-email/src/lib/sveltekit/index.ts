import { error, json } from "@sveltejs/kit";

import {
    getStaticEmailArtifact,
    getStaticEmailArtifactEntries,
    getStaticEmailManifest,
} from "../api/static-artifacts";

type StaticEmailArtifactRouteEvent = {
    params: {
        kind: string;
        slug: string;
        file: string;
    };
};

export const staticEmailCompiledManifestGET = () =>
    json(getStaticEmailManifest());

export const staticEmailCompiledArtifactEntries = () =>
    getStaticEmailArtifactEntries();

export const staticEmailCompiledArtifactGET = ({
    params,
}: StaticEmailArtifactRouteEvent) => {
    try {
        const artifact = getStaticEmailArtifact(
            params.kind,
            params.slug,
            params.file
        );

        return new Response(artifact.contents, {
            headers: {
                "content-type": artifact.contentType,
            },
        });
    } catch (reason) {
        throw error(
            404,
            reason instanceof Error
                ? reason.message
                : "Unknown static email artifact."
        );
    }
};
