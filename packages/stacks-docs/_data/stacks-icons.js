const { Icons, Spots } = require("@stackoverflow/stacks-icons");

module.exports = {
    icons: Object.keys(Icons)
        .sort()
        .map((name) => name.replace(/^Icon/, "")),
    spots: Object.keys(Spots)
        .sort()
        .map((name) => name.replace(/^Spot/, "")),
};
