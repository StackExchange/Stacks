import button from "./components/button";
import footer from "./components/footer";
import graphic from "./components/graphic";
import headline from "./components/headline";
import header from "./components/header";
import spacers from "./components/spacers";
import text from "./components/text";
import title from "./components/title";

import transactional from "./templates/transactional";

export const componentDefinitions = [
    button,
    footer,
    graphic,
    headline,
    header,
    spacers,
    text,
    title,
] as const;

export const templateDefinitions = [transactional] as const;

export {
    button,
    footer,
    graphic,
    headline,
    header,
    spacers,
    text,
    title,
    transactional,
};
