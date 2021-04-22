const { default: Icons, Spots } = require("@stackoverflow/stacks-icons");

module.exports = {
    icons: Object.keys(Icons).sort(),
    spots: Object.keys(Spots).sort()
}