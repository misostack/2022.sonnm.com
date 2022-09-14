// pages/case-studies/[slug].tsx

import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  return (
    <>
      <h1>Case studies {slug}</h1>
      <p>Details</p>
    </>
  );
};
