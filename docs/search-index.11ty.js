const jsdom = require("jsdom");

class SearchIndex {
    data() {
        return {
            // https://www.11ty.io/docs/languages/javascript/#permalinks
            permalink: "/search.json",
            eleventyExcludeFromCollections: true,
            layout: "",
        };
    }

    render(data) {
        let pages = data.collections.all.map((item) => {
            var { title, description } = item.data;

            // convert html to DOM for easier traversal and retrieval
            const dom = new jsdom.JSDOM(item.templateContent);

            // remove .stacks-preview -> code snippets don't search well
            dom.window.document.querySelectorAll(".stacks-preview").forEach(e => e.remove());
            
            const sections = [...dom.window.document.querySelectorAll("section")].map(sect => {
                const subtitles = getTitleAndSubtitles(sect)
                const codes = [...sect.querySelectorAll(".stacks-code:not(.bg-white)")].map(el => el.textContent.toLowerCase())
                const paragraphs = [...sect.querySelectorAll("p")].map(el => el.textContent.toLowerCase())
                const text = encodeText(trimExtraWhiteSpace(paragraphs.join(" ")))
                return { subtitles, codes, text }
            });
        
            return {
                url: item.url,
                category: getCategory(item.url),
                title: title?.toLowerCase(),
                description: htmlToText(description)?.toLowerCase(),
                sections,
            };
        });

        const categorySort = {
            "Product": 1,
            "Email": 2,
            "Content": 3,
            "Brand" : 4
        }

        // remove pages without title property and add id
        const searchData = pages.filter(x => x.title).map((el, id) => ({ id, ...el })).sort((a,b) => categorySort[a.category] - categorySort[b.category])

        var stringified = JSON.stringify(searchData, null, 2);
        return stringified;
    }
}

module.exports = SearchIndex;

function htmlToText(html) {
    if (!html) return ""
    // get raw text portion of html string
    const dom = new jsdom.JSDOM(html);
    return dom.window.document.body.textContent
}

function encodeText(input) {
    if (!input) return ""
    // TODO - use HE
    input = input.replace(/&/g, '&amp;');
    input = input.replace(/</g, '&lt;');
    input = input.replace(/>/g, '&gt;');
    return input;
}

function getCategory(url) {
    if (url.startsWith("/product")) return "Product"
    if (url.startsWith("/email")) return "Email"
    if (url.startsWith("/content")) return "Content"
    if (url.startsWith("/brand")) return "Brand"
    return ""
}

function trimExtraWhiteSpace(text) {
    return text.replace(/\s+/g, " ")
}

function removeGenericHeaders(titles) {
    const genericHeaders = ["classes", "examples", "sizes", "default", "base style", "javascript"];
    return titles.filter(t => !genericHeaders.includes(t.text))  
}

function getTitleAndSubtitles (element) {
    const headers = [
        ...element.querySelectorAll("h2"),
        ...element.querySelectorAll("h3"),
        ...element.querySelectorAll("h4"),
    ]
    const headerData = headers.map(el => ({ href: el.id, text: el.textContent.toLowerCase() }))
    const subtitles = removeGenericHeaders(headerData)
    return subtitles
}
