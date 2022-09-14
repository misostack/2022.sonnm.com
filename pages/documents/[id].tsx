// pages/documents/[id].tsx

import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <h1>Document {id}</h1>
      <p>Details</p>
      <Link href={`/documents/${id}/download`}>Download</Link>
    </>
  );
};
