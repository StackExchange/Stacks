// https://github.com/twilio-labs/netlify-okta-auth/blob/b9b160ec25d5ebff80509cd673f8e67ea6f8c617/docs/production.md
// Set env vars in the Netlify admin here:
// https://app.netlify.com/sites/stacks-svelte/settings/deploys

const { getAuthHandler } = require("@twilio-labs/netlify-okta-auth");

const config = {
    prodBaseUrl: process.env.URL,
    jwtSecret: process.env.OKTA_JWT_SECRET,
    oktaUrl: process.env.OKTA_URL,
};

exports.handler = getAuthHandler(config);
exports.config = config;
