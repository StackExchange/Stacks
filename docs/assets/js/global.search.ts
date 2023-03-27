
interface MatchResult extends Page {
    type: MatchType;
    matches?: Matches;
}
interface Matches {
    section?: Section;
    subtitle?: FragmentTitle;
    codes?: string[];
    text?: string;
} 
interface Page {
    id: number;
    url: string;
    category: "Product" | "Email" | "Content" | "Brand" | ""
    title: string;
    description?: string;
    sections: Section[]; 
}
interface Section {
    subtitles: FragmentTitle[];
    codes: string[];
    text: string;
}
interface FragmentTitle {
    href?: string;
    text?: string
}

(async function () {
    const resp = await fetch("/search.json")
    const pages = await resp.json() as Page[];
    
    const searchbox = document.getElementById("searchbox") as HTMLInputElement
    const resultbox = document.getElementById("search-results")!

    searchbox.addEventListener("focus", function () { 
        resultbox.classList.remove("d-none")
    })
    // TODO: Also handle blur
    document.addEventListener("click", function (e: MouseEvent) {
        // if click wasn't from search, close search
        if (!(e.target as HTMLElement).closest("#searchbox,#search-results")) {
            resultbox.classList.add("d-none")
        }
    })

    // TODO: handle focus / change events
    // TODO: debounce if needed
    searchbox.addEventListener("keyup", handleSearch)

        
    function handleSearch() {
        const searchTerm = searchbox.value.toLowerCase();

        if (!searchTerm) {
            resultbox.innerHTML = /*html*/
                `<p class="fs-body2 p8 mb0">Start typing to search</p>`;
            return
        }

        const matches = findMatches(searchTerm);

        if (!matches.length) {
            resultbox.innerHTML = /*html*/
                `<p class="fs-body2 p8 mb0">Sorry, no matches were found.</p>`;
            return
        }

        // render matches
        const matchesHtml = matches.map(m => {

            const url = m.url + getUrlFragment(m, searchTerm)

            const titleMatch = [MatchType.TitleExactMatch, MatchType.TitlePartialMatch].includes(m.type)
            const descMatch = [MatchType.DescriptionPartialMatch].includes(m.type)
            const showDescription = titleMatch || descMatch

            const html = /*html*/
                `<li><a href="${url}" class="d-block p8 h:bg-powder-050">
                    <div class="d-flex ai-center fw-wrap g4">
                        <span class="bg-powder-050 bar-md p4 px8 fc-black">${m.category}</span>
                        <span class="fs-body2">${highlightText(titleCase(m.title), searchTerm)}</span>
                        ${m.matches?.subtitle?.text
                            ? /*html*/`<span> &gt; <span> <span class="fs-body1">${highlightText(titleCase(m.matches?.subtitle.text), searchTerm)}</span>`
                            : ""
                        }
                    </div>
                    ${showDescription ? getDescription(m.description, searchTerm) : ""}
                    
                    ${!titleMatch && m.matches?.codes?.length
                        ? m.matches.codes.map(code => {
                            return /*html*/`<code class="d-inline-block my4 stacks-code" >${highlightText(code, searchTerm)}</code>`
                        }).join("") 
                        : ""}
                    ${!titleMatch && m.matches?.text ? /*html*/`<div class="fc-black pl8">${highlightTextSnippet(m.matches?.text, searchTerm)}</div>` : ""}
                </a></li>`;
            return html
        })
        resultbox.innerHTML = /*html*/
            `<ul class="list-reset g4">
                ${matchesHtml.join("")}
            </ul>`
        
    }

    function getDescription(desc: string | undefined, searchTerm: string) {
        if (!desc) return ""
        const descHtml = desc.indexOf(searchTerm) > 150
            ? highlightTextSnippet(titleCase(desc), searchTerm)
            : highlightText(truncateString(titleCase(desc)), searchTerm)
            
        const output = /*html*/`<div class="fc-black pl8">${descHtml}</div>`
        return output
    }

    function truncateString(input: string, maxLen = 100): string {
        if (input.length < maxLen) return input;
        return input.slice(0, maxLen) + "..."
    }

    function highlightTextSnippet(text: string, match: string) {
        const snippet = getTextSnippet(text,match)
        return highlightText(snippet, match)
    }

    function highlightText(text: string, match: string) {
        // TODO: what if match is "."
        const reg = new RegExp(match.trim(), 'gi')
        const result = text.replace(reg, "<mark class='d-inline-block bg-orange-100 fw-bold mxn1 px1'>$&</mark>")
        return result.replaceAll("...", /*html*/`<span class="fc-black-150">...</span>`);
    }

    function getTextSnippet(text: string, match: string) {
        const startPos = text.toLowerCase().indexOf(match)

        // get starting point
        const prev_words = 4
        let prev_counter = 0
        let prev_index = startPos
        for (let i = startPos - 1; i > 0; i--) {
            if (text[i] === " ") { //word
                // increment prev_counter
                prev_counter++
                prev_index = i
                if (prev_counter > prev_words) {break;}
            }
        }

        // get ending point
        const next_words = 10
        let next_counter = 0
        let next_index = startPos
        for (let i = startPos - 1; i < text.length; i++) {
            next_index = i
            if (text[i] === " ") { //word
                // increment prev_counter
                next_counter++
                if (next_counter > next_words) {break;}
            }
        }

        const snippet = text.slice(prev_index, next_index + 1)
        const prefix = prev_index > 0 ? '... ' : ""
        const suffix = next_index < text.length - 1 ? " ..." : ""
        const result = prefix + snippet + suffix
        return result
    }

    function titleCase(input: string): string {
        return input.slice(0,1).toUpperCase() + input.slice(1)
    }

    function getUrlFragment(match: MatchResult, searchTerm: string) {
        // if matched url, go to full page
        if ([MatchType.TitleExactMatch, MatchType.TitlePartialMatch].includes(match.type)) {
            return ""
        }
        // if matched subtitle, go to section
        if ([MatchType.SectionTitleExactMatch, MatchType.SectionTitlePartialMatch].includes(match.type) && match.matches?.subtitle?.href) {
            return "#" + match.matches?.subtitle?.href
        }
        // fallback to text fragments - https://developer.mozilla.org/en-US/docs/Web/Text_fragments
        // TODO - there are some places this doesn't work
        return `#:~:text=${searchTerm}`
    }

    type MatchFunction = (page: Page[]) => MatchResult[];

    function findMatches(searchTerm: string, limit = 5): MatchResult[] {
        const matches = new Map<number, MatchResult>();

        const matchFunctions: Record<number, MatchFunction> = {
            [MatchType.TitleExactMatch]: (pages) => {
                return pages
                    .filter(p => p.title === searchTerm)
                    .map<MatchResult>(page => ({ type: MatchType.TitleExactMatch, ...page }))
            },
            [MatchType.SectionTitleExactMatch]: (pages) => {
                return pages.flatMap(p => {
                    for (const section of p.sections) {
                        for (const subtitle of section.subtitles) {
                            if (subtitle.text === searchTerm) {
                                return [{
                                    type: MatchType.SectionTitleExactMatch,
                                    ...p,
                                    matches: {
                                        section,
                                        subtitle,
                                    }
                                }]
                            }
                        }
                    }
                    return [];
                })
            },
            [MatchType.TitlePartialMatch]: (pages) => {
                return pages
                    .filter(p => p.title.includes(searchTerm))
                    .map(page => ({ type: MatchType.TitlePartialMatch, ...page }))
            },
            [MatchType.DescriptionPartialMatch]: (pages) => {
                return pages
                    .filter(p => p.description?.includes(searchTerm))
                    .map(page => ({ type: MatchType.DescriptionPartialMatch, ...page }))
            },
            [MatchType.SectionTitlePartialMatch]: (pages) => {
                return pages.flatMap(p => {
                    // TODO - return multiple matches?
                    for (const section of p.sections) {
                        for (const subtitle of section.subtitles) {
                            if (subtitle.text?.includes(searchTerm)) {
                                return [{
                                    type: MatchType.SectionTitlePartialMatch,
                                    ...p,
                                    matches: {
                                        section,
                                        subtitle,
                                    }
                                }]
                            }
                        }
                    }
                    return [];
                })
            },
            [MatchType.CodePartialMatch]: (pages) => {
                return pages.flatMap(p => {
                    for (const section of p.sections) {
                        const matchingCodes = section.codes.filter(c => c.includes(searchTerm))
                        if (matchingCodes.length) {
                            return [{
                                type: MatchType.CodePartialMatch,
                                ...p,
                                matches: {
                                    section,
                                    codes: matchingCodes
                                },
                            }]
                        }
                    }
                    return [];
                })
            },
            [MatchType.ParagraphPartialMatch]: (pages) => {
                return pages.flatMap(p => {
                    for (const section of p.sections) {
                        if (section.text.includes(searchTerm)) {
                            return [{
                                type: MatchType.ParagraphPartialMatch,
                                ...p,
                                matches: {
                                    section,
                                    text: section.text
                                }
                            }]
                        }
                    }
                    return [];
                })
            },
        }

        for (const matchFunc of Object.values(matchFunctions)) {
            const newMatches = matchFunc(pages)
            pushIfNew(matches, newMatches)
            if (matches.size > limit) { break }
        }
        
        return [...matches.values()].slice(0,limit)
    }

    function pushIfNew(matches: Map<number, MatchResult>, incoming: MatchResult[]) {
        incoming.forEach((m) => {
            if (!matches.has(m.id)) {
                matches.set(m.id, m)
            }
        })
    }
})()

enum MatchType {
    TitleExactMatch,
    SectionTitleExactMatch,
    TitlePartialMatch,
    DescriptionPartialMatch,
    SectionTitlePartialMatch,
    CodePartialMatch,
    ParagraphPartialMatch
}
