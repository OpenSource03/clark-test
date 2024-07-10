import "../styles/globals.css";
import GithubLink from "../components/clerk/GithubLink";
import Header from "../components/Header";
import type { AppProps } from "next/app";
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";

/**
 * List pages you want to be publicly accessible, or leave empty if
 * every page requires authentication. Use this naming strategy:
 *  "/"              for pages/index.js
 *  "/foo"           for pages/foo/index.js
 *  "/foo/bar"       for pages/foo/bar.js
 *  "/foo/[...bar]"  for pages/foo/[...bar].js
 */
const publicPages = ["/"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <p>Hello World</p>;
}
export default MyApp;
