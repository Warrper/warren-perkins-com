import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwindStyles from './styles/tailwind.css';
import globalStyles from './styles/global.css';
import Nav from '~/components/Nav';

export const links: LinksFunction = () => [
    {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
    },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;800&family=Lato&display=swap',
    },
    {
        rel: 'stylesheet',
        href: tailwindStyles,
    },
    {
        rel: 'stylesheet',
        href: globalStyles,
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
                <Nav
                    navItems={[
                        { text: 'Blog', link: '/blog' },
                        { text: 'Home', link: '/', exclude: ['/'] },
                        {
                            text: 'Gihub',
                            link: 'https://github.com/warrper',
                        },
                    ]}
                />
                <div className="w-full pt-20"></div>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
