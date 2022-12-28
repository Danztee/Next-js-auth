import React from "react";
import { signIn, getSession } from "next-auth/react";

const Login = () => {
  return (
    <main className="login-main">
      <h1>CLICK HERE TO SIGNIN</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </main>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        // destination: `/api/auth/signin?callbackUrl=http://${host}/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Login;
