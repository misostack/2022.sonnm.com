// pages/blog/[categorySlug].tsx

import Link from "next/link";
import { useRouter } from "next/router";
import Error from "../_error";

export default () => {
  const router = useRouter();
  const categorySlug = router.query.categorySlug as string;
  if (categorySlug === "posts") {
    return <Error statusCode={404} />;
  }
  return (
    <>
      <h1>Category {categorySlug}</h1>
      <h2>List Post</h2>
      <ul>
        {Array.from(new Array(6)).map((_, idx) => (
          <li>
            <Link href={`/blog/posts/${++idx}`}>
              <a>Post {`${idx}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
