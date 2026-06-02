import { z } from "zod/v4";

import type { ComponentOptionReference } from "../types";

export type EmailOptionMetadata = {
    type: string;
    description: string;
    defaultValue?: string;
    renderDefaultValueAsCode?: boolean;
};

export const emailOption = <TSchema extends z.ZodType>(
    schema: TSchema,
    metadata: EmailOptionMetadata
): TSchema => schema.meta({ emailOption: metadata }) as TSchema;

const getOptionMetadata = (
    schema: z.ZodType
): EmailOptionMetadata | undefined =>
    (schema.meta() as { emailOption?: EmailOptionMetadata } | undefined)
        ?.emailOption;

export const getSchemaOptionRows = (
    schema: z.ZodObject
): ComponentOptionReference[] =>
    Object.entries(schema.shape as Record<string, z.ZodType>).flatMap(
        ([key, fieldSchema]) => {
            const metadata = getOptionMetadata(fieldSchema);
            if (!metadata) return [];
            return [
                {
                    argument: `options.${key}`,
                    type: metadata.type,
                    defaultValue: metadata.defaultValue,
                    renderDefaultValueAsCode: metadata.renderDefaultValueAsCode,
                    description: metadata.description,
                },
            ];
        }
    );
