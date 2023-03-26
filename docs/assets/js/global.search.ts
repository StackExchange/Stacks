
interface MatchResult extends Page {
    type: MatchType;
}
interface Page {
    id: number;
    url: string;
    title: string;
    description?: string;
    sections: Section[]; 
}
interface Section {
    title: FragmentTitle;
    subtitles: string[];
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

    searchbox.addEventListener("blur", function () { 
        resultbox.classList.add("d-none")
    })
    searchbox.addEventListener("focus", function () { 
        resultbox.classList.remove("d-none")
    })

    searchbox.addEventListener("keyup", handleSearch)
    searchbox.addEventListener("focus", handleSearch)
    searchbox.addEventListener("change", handleSearch)
        
    function handleSearch() {
        var searchTerm = searchbox.value.toLowerCase();

        if (!searchTerm) {
            resultbox.innerHTML = /*html*/
                `<p class="fs-body2 mb0">Start typing to search</p>`;
            return
        }

        const matches = findMatches(searchTerm);

        if (!matches.length) {
            resultbox.innerHTML = /*html*/
                `<p class="fs-body2 mb0">Sorry, no matches were found.</p>`;
            return
        }

        // render matches
        const matchesHtml = matches.map(m => {

            const url = `m.url${getUrlFragment(m, searchTerm)}`

            const html = /*html*/
                `<li><a href="${url}">
                    ${m.title}
                </a></li>`;
            return html
        })
        resultbox.innerHTML = /*html*/
            `<ul class="list-reset">
                ${matchesHtml.join("")}
            </ul>`
        
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

        // section title exact match
        const sectionTitleMatches = pages.filter(p => p.sections.some(s => s.title.text === searchTerm || s.subtitles.includes(searchTerm))).map(page => ({type: MatchType.SectionTitleExactMatch, ...page}))
        pushIfNew(matches, sectionTitleMatches)

        // title partial match
        const titlePartialMatches = pages.filter(p => p.title.includes(searchTerm)).map(page => ({type: MatchType.TitlePartialMatch, ...page}))
        pushIfNew(matches, titlePartialMatches)

        // description partial match
        const descPartialMatches = pages.filter(p => p.description?.includes(searchTerm)).map(page => ({type: MatchType.DescriptionPartialMatch, ...page}))
        pushIfNew(matches, descPartialMatches)

        // section title partial match
        //const sectionTitlePartialMatches = pages.filter(p => p.sections.some(s => s.title.text?.includes(searchTerm) || s.subtitles.some(sub => sub.includes(searchTerm)))).map(page => ({ type: MatchType.SectionTitlePartialMatch, ...page }))
        const sectionTitlePartialMatches = pages.filter(p => {
            return p.sections.some(s => {
                return s.title.text?.includes(searchTerm) || s.subtitles.some(sub => {
                    return sub.includes(searchTerm);
                });
            })
        }).map(page => ({ type: MatchType.SectionTitlePartialMatch, ...page }))
        pushIfNew(matches, sectionTitlePartialMatches)

        // code partial match
        const codePartialMatches = pages.filter(p => p.sections.some(s => s.codes.some(c => c.includes(searchTerm)))).map(page => ({type: MatchType.CodePartialMatch, ...page}))
        pushIfNew(matches, codePartialMatches)

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
