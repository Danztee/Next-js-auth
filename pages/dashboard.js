import { useSession, getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = ({ session }) => {
  //   const { data: session } = useSession();
  //   const session = await getSession();
  //   console.log(session);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const securePage = async () => {
  //     const session = await getSession();
  //     //   console.log(session);

  //     if (!session) {
  //       signIn();
  //     } else {
  //       setLoading(false);
  //     }
  //   };
  //   securePage();
  // }, []);

  // if (loading) {
  //   return <h2>loading...</h2>;
  // }

  return (
    <h1 style={{ marginTop: "40%", textAlign: "center" }}>
      Only Authenticated user can see this page
    </h1>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
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
export default Dashboard;
