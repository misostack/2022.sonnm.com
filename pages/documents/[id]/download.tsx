// pages/documents/[id]/download.tsx

import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <h1>Download {id}</h1>
      <p>Please wait for downloading file</p>
    </>
  );
};
