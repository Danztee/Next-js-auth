import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import "../components/Navbar.css";
import Navbar from "../components/Navbar";

export default function App({ session, Component, pageProps }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
