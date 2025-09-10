import type { LanguageFn } from "highlight.js";
import hljs from "highlight.js/lib/core";
import hljsJavascript from "highlight.js/lib/languages/javascript";
import hljsCss from "highlight.js/lib/languages/css";
import hljsHtml from "highlight.js/lib/languages/xml";

const hljsLanguages: Record<string, LanguageFn> = {
    javascript: hljsJavascript,
    css: hljsCss,
    html: hljsHtml,
};

const javascriptFixture = `
import React, { Component } from 'react'
import { IP } from '../constants/IP'
import { withAuth0 } from '@auth0/auth0-react';

class AddATournament extends Component {
    componentDidMount() {
        this.myNewListOfAllTournamentsWithAuth()
    }
}

export default withAuth0(AddATournament);
`;

const cssFixture = `
.s-input,
.s-textarea {
    -webkit-appearance: none;
    width: 100%;
    margin: 0;
    padding: 0.6em 0.7em;
    border: 1px solid var(--bc-darker);
    border-radius: 3px;
    background-color: var(--white);
    color: var(--fc-dark);
    font-size: 13px;
    font-family: inherit;
    line-height: 1.15384615;
    scrollbar-color: var(--scrollbar) transparent;
}
@supports (-webkit-overflow-scrolling: touch) {
    .s-input,
    .s-textarea {
        font-size: 16px;
        padding: 0.36em 0.55em;
    }
    .s-input::-webkit-input-placeholder,
    .s-textarea::-webkit-input-placeholder {
        line-height: normal !important;
    }
}
`;

const htmlFixture = `
<form class="d-flex gy4 fd-column">
    <label class="flex--item s-label" for="question-title">Question title</label>
    <div class="d-flex ps-relative">
        <input class="flex--item s-input" type="text" id="question-title" placeholder="e.g. Why doesn’t Stack Overflow use a custom web font?"/>
    </div>
</form>
`;

const fixtures: Record<string, string> = {
    javascript: javascriptFixture,
    css: cssFixture,
    html: htmlFixture,
};

const highlightFixture = (fixture: string, language: string) => {
    const hljsLanguage = hljsLanguages[language];
    hljs.registerLanguage(language, hljsLanguage);

    const highlightedCode = hljs.highlight(fixture, { language }).value;

    return `<code>${highlightedCode}</code>`;
};

const highlightedFixtures = Object.keys(fixtures).reduce(
    (acc, language) => {
        acc[language] = highlightFixture(fixtures[language], language);
        return acc;
    },
    {} as Record<string, string>
);

export default highlightedFixtures;
