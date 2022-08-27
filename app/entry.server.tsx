import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';

export default function handleRequest(
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext
) {
    let markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

    responseHeaders.set('Content-Type', 'text/html');
    responseHeaders.set('Strict-Transport-Security', "31536000");
    responseHeaders.set('X-Frame-Options', 'SAMEORIGIN');
    responseHeaders.set('Referrer-Policy', "strict-origin");

    const cacheControl = responseHeaders.get('Cache-Control');
    if (!cacheControl) {
        responseHeaders.set(
            'Cache-Control',
            'public, max-age=86400, s-maxage=2628000, stale-while-revalidate=31560000'
        );
    }

    return new Response('<!DOCTYPE html>' + markup, {
        status: responseStatusCode,
        headers: responseHeaders,
    });
}
