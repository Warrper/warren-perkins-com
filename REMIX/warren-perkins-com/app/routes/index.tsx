import type { LinksFunction } from "@remix-run/node";

import styles from "~/styles/test.css";

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <p>
        This is a simple example of a React app running inside Remix.
      </p>
    </div>
  );
}
