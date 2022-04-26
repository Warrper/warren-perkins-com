import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './styles/tailwind.css';

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: styles,
    },
];

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Warren Perkins',
    viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body className="bg-dark-blue text-pale-blue">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
