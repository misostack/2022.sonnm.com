// pages/blog/[categorySlug].tsx

import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const categorySlug = router.query.categorySlug as string;

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
