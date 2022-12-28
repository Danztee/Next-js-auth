import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="header">
      <h1 className="logo">
        <Link href="/">NextAuth</Link>
      </h1>

      {session && (
        <ul className={`main-nav`}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          {/* <li>
            <Link href="/blog">Blog</Link>
          </li> */}

          <li>
            <Link href="/api/auth/signout" onClick={() => signOut()}>
              Sign Out
            </Link>
          </li>

          {/* <li>
          <Link href="/api/auth/signin" onClick={() => signIn("/")}>
            Sign In
          </Link>
        </li> */}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
