import { LinksFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react';

import onedark from '~/styles/onedark.css';

export const links: LinksFunction = () => [
    {
        rel: 'stylesheet',
        href: onedark,
    },
];

export default function Blog() {
    return <Outlet />;
}
