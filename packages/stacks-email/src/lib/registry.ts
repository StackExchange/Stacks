import button from "../../components/button";
import card from "../../components/card";
import footer from "../../components/footer";
import graphic from "../../components/graphic";
import headline from "../../components/headline";
import header from "../../components/header";
import spacer from "../../components/spacer";
import text from "../../components/text";
import title from "../../components/title";

import transactional from "../../templates/transactional";

export const componentDefinitions = [
    button,
    card,
    footer,
    graphic,
    headline,
    header,
    spacer,
    text,
    title,
] as const;

export const templateDefinitions = [transactional] as const;

export {
    button,
    card,
    footer,
    graphic,
    headline,
    header,
    spacer,
    text,
    title,
    transactional,
};
