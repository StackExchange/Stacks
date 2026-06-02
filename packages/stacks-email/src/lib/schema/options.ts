import { z } from "zod/v4";

import { emailOption } from "./metadata";

export const mjmlAlignOptions = ["left", "center", "right"] as const;

type PrimitiveType = "string" | "boolean";
type EnumValues = readonly [string, ...string[]];
type PrimitiveValue<T extends PrimitiveType> = T extends "boolean"
    ? boolean
    : string;

type OptionOutput<
    TType extends PrimitiveType,
    TOptional,
    TInitialValue,
> = TInitialValue extends PrimitiveValue<TType>
    ? PrimitiveValue<TType>
    : TOptional extends true
      ? PrimitiveValue<TType> | undefined
      : PrimitiveValue<TType>;

type EnumOutput<
    TValues extends EnumValues,
    TOptional,
    TInitialValue,
> = TInitialValue extends TValues[number]
    ? TValues[number]
    : TOptional extends true
      ? TValues[number] | undefined
      : TValues[number];

type OptionDefinition<TName extends string = string, TOutput = unknown> = {
    name: TName;
    schema: z.ZodType<TOutput>;
};

export function defineOption<
    const TName extends string,
    const TType extends PrimitiveType,
    const TOptional extends boolean | undefined = undefined,
    const TInitialValue extends PrimitiveValue<TType> | undefined = undefined,
>(input: {
    name: TName;
    type: TType;
    initialValue?: TInitialValue;
    optional?: TOptional;
    description: string;
}): OptionDefinition<TName, OptionOutput<TType, TOptional, TInitialValue>>;
export function defineOption<
    const TName extends string,
    const TValues extends EnumValues,
    const TOptional extends boolean | undefined = undefined,
    const TInitialValue extends TValues[number] | undefined = undefined,
>(input: {
    name: TName;
    type: "enum";
    values: TValues;
    initialValue?: TInitialValue;
    optional?: TOptional;
    description: string;
}): OptionDefinition<TName, EnumOutput<TValues, TOptional, TInitialValue>>;

export function defineOption(input: {
    name: string;
    type: PrimitiveType | "enum";
    values?: EnumValues;
    initialValue?: string | boolean;
    optional?: boolean;
    description: string;
}): OptionDefinition {
    const base: z.ZodType =
        input.type === "boolean"
            ? z.boolean()
            : input.type === "enum"
              ? z.enum(input.values as EnumValues)
              : z.string();
    const metadataType =
        input.type === "enum"
            ? (input.values as EnumValues)
                  .map((value) => `"${value}"`)
                  .join(" | ")
            : input.type;

    const schema =
        input.initialValue !== undefined
            ? (base as z.ZodAny).default(input.initialValue)
            : input.optional
              ? base.optional()
              : base;

    return {
        name: input.name,
        schema: emailOption(schema, {
            type: metadataType,
            defaultValue:
                input.initialValue === undefined
                    ? undefined
                    : String(input.initialValue),
            renderDefaultValueAsCode:
                input.initialValue === undefined ? undefined : true,
            description: input.description,
        }),
    };
}

export const defineOptions = <
    const TDefinitions extends readonly OptionDefinition[],
>(
    definitions: TDefinitions
) =>
    z.object(
        Object.fromEntries(
            definitions.map((definition) => [
                definition.name,
                definition.schema,
            ])
        ) as {
            [K in TDefinitions[number] as K["name"]]: K extends OptionDefinition<
                K["name"],
                infer TOutput
            >
                ? z.ZodType<TOutput>
                : never;
        }
    );
