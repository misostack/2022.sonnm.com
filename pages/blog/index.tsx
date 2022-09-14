// pages/blog/index.tsx

import Link from "next/link";

export default () => {
  return (
    <>
      <h2>List Category</h2>
      <ul>
        {Array.from(new Array(6)).map((_, idx) => (
          <li>
            <Link href={`/blog/category-slug-${++idx}`}>
              <a>Category {`${idx}`}</a>
            </Link>
          </li>
        ))}
      </ul>
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
