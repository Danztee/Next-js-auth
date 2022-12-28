import { getSession, useSession } from "next-auth/react";

const Blog = ({ data }) => {
  return <h1>Blog page - {data}</h1>;
};

export async function getServerSideProps(context) {
  const { req } = context;
  let host = req.headers.host;

  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://${host}/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
      data: session ? "List of 100 personalized blogs" : "List of free blog",
    },
  };
}
export default Blog;
