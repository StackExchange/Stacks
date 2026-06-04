import button from "../../components/button";
import callout from "../../components/callout";
import card from "../../components/card";
import footer from "../../components/footer";
import graphic from "../../components/graphic";
import headline from "../../components/headline";
import header from "../../components/header";
import spacer from "../../components/spacer";
import subtitle from "../../components/subtitle";
import text from "../../components/text";
import title from "../../components/title";

import newsletter from "../../templates/newsletter";
import promotional from "../../templates/promotional";
import transactional from "../../templates/transactional";

export const componentDefinitions = [
    button,
    callout,
    card,
    footer,
    graphic,
    headline,
    header,
    spacer,
    subtitle,
    text,
    title,
] as const;

export const templateDefinitions = [
    newsletter,
    promotional,
    transactional,
] as const;

export {
    button,
    callout,
    card,
    footer,
    graphic,
    headline,
    header,
    spacer,
    subtitle,
    text,
    title,
    newsletter,
    promotional,
    transactional,
};
