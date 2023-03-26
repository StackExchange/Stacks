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
                const { title, subtitles } = getTitleAndSubtitles(sect)
                const codes = [...sect.querySelectorAll(".stacks-code:not(.bg-white)")].map(el => el.textContent.toLowerCase())
                const paragraphs = [...sect.querySelectorAll("p")].map(el => el.textContent.toLowerCase())
                const text = trimExtraWhiteSpace(paragraphs.join(" "))
                return { title, subtitles, codes, text }
            });
        
            return {
                url: item.url,
                title: title?.toLowerCase(),
                description: description?.toLowerCase(),
                sections,
            };
        });

        // remove pages without title property and add id
        const searchData = pages.filter(x => x.title).map((el, id) => ({ id, ...el }))

        var stringified = JSON.stringify(searchData, null, 2);
        return stringified;
    }
}

module.exports = SearchIndex;

function trimExtraWhiteSpace(text) {
    return text.replace(/\s+/g, " ")
}

function removeGenericHeaders(titles) {
    const genericHeaders = ["classes", "examples", "sizes", "default", "base style", "javascript"];
    return titles.filter(t => !genericHeaders.includes(t.text))  
}

function getTitleAndSubtitles (element) {
    
    const h2s = removeGenericHeaders([...element.querySelectorAll("h2")].map(el => ({ href: el.id, text: el.textContent.toLowerCase() })));
    const h3s = removeGenericHeaders([...element.querySelectorAll("h3")].map(el => ({ href: el.id, text: el.textContent.toLowerCase() })));
    const h4s = removeGenericHeaders([...element.querySelectorAll("h4")].map(el => ({ href: el.id, text: el.textContent.toLowerCase() })));

    if (h2s.length) {
        return {
            title: h2s[0],
            subtitles: [...h2s.slice(1), ...h3s, ...h4s]
        }
    } else if (h3s.length) {
        return {
            title: h3s[0],
            subtitles: [...h3s.slice(1), ...h4s]
        }
    } else if (h4s.length) {
        return {
            title: h4s[0],
            subtitles: [...h4s.slice(1)]
        }
    }
    return {
        title: { href: null, text: null },
        subtitles: []
    }
}
