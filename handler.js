'use strict';

const Sentry = require("@sentry/serverless");
Sentry.AWSLambda.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0,
});

module.exports.webhook = Sentry.AWSLambda.wrapHandler(async (event) => {

    return {statusCode: 200, body: ''};
});
