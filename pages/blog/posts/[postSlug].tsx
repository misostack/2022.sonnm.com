// pages/blog/posts/[postSlug].tsx

import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const postSlug = router.query.postSlug as string;

  return (
    <>
      <h1>Post {postSlug}</h1>
      <p>Details</p>
    </>
  );
};
