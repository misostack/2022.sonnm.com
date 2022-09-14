// pages/documents/index.tsx

import Link from "next/link";

export default () => {
  return (
    <>
      <h1>Document List</h1>
      <ul>
        {Array.from(new Array(6)).map((_, idx) => (
          <li>
            <Link href={`/documents/${++idx}`}>
              <a>Document {`${idx}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
