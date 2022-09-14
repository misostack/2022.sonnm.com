import Link from "next/link";

// pages/case-studies/index.tsx
export default () => {
  return (
    <>
      <h1>Case Studies List</h1>
      <ul>
        {Array.from(new Array(6)).map((_, idx) => (
          <li>
            <Link href={`/case-studies/${++idx}`}>
              <a>Case study {`${idx}`}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
