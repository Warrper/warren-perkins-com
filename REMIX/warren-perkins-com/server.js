const { createRequestHandler } = require('@remix-run/architect');
import * as build from "@remix-run/dev/server-build";
exports.handler = createRequestHandler({
    build
});