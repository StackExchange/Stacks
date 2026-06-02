import MarkdownIt from "markdown-it";

import { tokens } from "./tokens";

const markdown = new MarkdownIt({
    html: false,
    breaks: true,
    linkify: true,
    typographer: true,
});

markdown.renderer.rules.link_open = (tokenList, index, options, env, self) => {
    tokenList[index].attrJoin("class", "link");
    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.paragraph_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    const hasAnotherParagraph = tokenList
        .slice(index + 1)
        .some((token) => token.type === "paragraph_open");

    tokenList[index].attrSet(
        "style",
        `margin:${hasAnotherParagraph ? tokens.body.paragraphMargin : "0"};`
    );

    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.bullet_list_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    tokenList[index].attrSet(
        "style",
        `margin:${tokens.body.listMargin};padding:${tokens.body.listPadding};`
    );

    return self.renderToken(tokenList, index, options);
};

markdown.renderer.rules.list_item_open = (
    tokenList,
    index,
    options,
    env,
    self
) => {
    const hasAnotherListItem = tokenList
        .slice(index + 1)
        .some((token) => token.type === "list_item_open");

    tokenList[index].attrSet(
        "style",
        `margin:${hasAnotherListItem ? tokens.body.listItemMargin : "0"};`
    );

    return self.renderToken(tokenList, index, options);
};

export const renderEmailBodyMarkdown = (value: string) => {
    const content = value.trim();

    if (!content) {
        return "";
    }

    return markdown.render(content).trim();
};
