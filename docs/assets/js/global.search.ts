
interface MatchResult extends Page {
    type: MatchType;
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
    title: FragmentTitle;
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
    
    var searchbox = document.getElementById("searchbox") as HTMLInputElement
    var resultbox = document.getElementById("search-results")!

    searchbox.addEventListener("focus", function () { 
        resultbox.classList.remove("d-none")
    })
    // TODO: Also handle blur
    document.addEventListener("click", function(e) {
        // if click wasn't from search, close search
        if (!(e.target as HTMLElement).closest("#searchbox,#search-results")) {
            resultbox.classList.add("d-none")
        }
    })

    // TODO: handle focus / change events
    searchbox.addEventListener("keyup", handleSearch)
        
    function handleSearch() {
        var searchTerm = searchbox.value.toLowerCase();

        if (!searchTerm) {
            resultbox.innerHTML = /*html*/
                `<p class="fs-body2 p8 mb0">Start typing to search</p>`;
            return
        }

        const matches = findMatches(searchTerm).slice(0,5);

        if (!matches.length) {
            resultbox.innerHTML = /*html*/
                `<p class="fs-body2 p8 mb0">Sorry, no matches were found.</p>`;
            return
        }

        // render matches
        const matchesHtml = matches.map(m => {

            const url = m.url + getUrlFragment(m, searchTerm)

            const html = /*html*/
                `<li><a href="${url}" class="d-block p8 h:bg-powder-050">
                    <div class="d-flex ai-center g4">
                        <span class="bg-powder-050 bar-md p4 px8 fc-black">${m.category}</span>
                        <span class="fs-body2">${titleCase(m.title)}</span>
                    </div>
                    <div class="fc-black pl8">
                        ${m.description ? truncateString(m.description) : ""}
                    </div>
                </a></li>`;
            return html
        })
        resultbox.innerHTML = /*html*/
            `<ul class="list-reset g4">
                ${matchesHtml.join("")}
            </ul>`
        
    }

    function truncateString(input: string, maxLen = 100): string {
        if (input.length < maxLen) return input;
        return input.slice(0, maxLen) + /*html*/`<span class="fc-black-150">...</span>`
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
        if ([MatchType.SectionTitleExactMatch, MatchType.SectionTitlePartialMatch].includes(match.type)) {
            return match.sections[0].title.href // todo return matched section
        }
        // fallback to text fragments - https://developer.mozilla.org/en-US/docs/Web/Text_fragments
        return `#:~:text=${searchTerm}`
    }


    function findMatches(searchTerm: string): MatchResult[] {
        const matches = new Map<number, MatchResult>();
        // title exact match
        const titleMatches = pages.filter(p => p.title === searchTerm).map(page => ({type: MatchType.TitleExactMatch, ...page}))
        pushIfNew(matches, titleMatches)
        if (matches.size > 5) [...matches.values()]

        // section title exact match
        const sectionTitleMatches = pages.filter(p => p.sections.some(s => s.title.text === searchTerm || s.subtitles.some(sub => sub.text === searchTerm))).map(page => ({type: MatchType.SectionTitleExactMatch, ...page}))
        pushIfNew(matches, sectionTitleMatches)
        if (matches.size > 5) [...matches.values()]
        
        // title partial match
        const titlePartialMatches = pages.filter(p => p.title.includes(searchTerm)).map(page => ({type: MatchType.TitlePartialMatch, ...page}))
        pushIfNew(matches, titlePartialMatches)
        if (matches.size > 5) [...matches.values()]
        
        // description partial match
        const descPartialMatches = pages.filter(p => p.description?.includes(searchTerm)).map(page => ({type: MatchType.DescriptionPartialMatch, ...page}))
        pushIfNew(matches, descPartialMatches)
        if (matches.size > 5) [...matches.values()]
        
        // section title partial match
        //const sectionTitlePartialMatches = pages.filter(p => p.sections.some(s => s.title.text?.includes(searchTerm) || s.subtitles.some(sub => sub.includes(searchTerm)))).map(page => ({ type: MatchType.SectionTitlePartialMatch, ...page }))
        const sectionTitlePartialMatches = pages.filter(p => {
            return p.sections.some(s => {
                return s.title.text?.includes(searchTerm) || s.subtitles.some(sub => {
                    return sub.text?.includes(searchTerm);
                });
            })
        }).map(page => ({ type: MatchType.SectionTitlePartialMatch, ...page }))
        pushIfNew(matches, sectionTitlePartialMatches)
        if (matches.size > 5) [...matches.values()]
        
        // code partial match
        const codePartialMatches = pages.filter(p => p.sections.some(s => s.codes.some(c => c.includes(searchTerm)))).map(page => ({type: MatchType.CodePartialMatch, ...page}))
        pushIfNew(matches, codePartialMatches)
        if (matches.size > 5) [...matches.values()]
        
        // paragraph partial match
        const paragraphPartialMatches = pages.filter(p => p.sections.some(s => s.text.includes(searchTerm))).map(page => ({type: MatchType.ParagraphPartialMatch, ...page}))
        pushIfNew(matches, paragraphPartialMatches)
        
        return [...matches.values()]
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
    // TODO Multi Term Match?
}
