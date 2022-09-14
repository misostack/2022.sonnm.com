import { useRouter } from "next/router";
import Page from "../components/page";

export default () => {
  const router = useRouter();
  const { pageSlug } = router.query;
  return <Page slug={pageSlug as string}></Page>;
};
