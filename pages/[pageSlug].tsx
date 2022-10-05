import enviroment from "@config/enviroment";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { PageModel } from "../business/models";
import Page from "../components/page";

export default (props: { page: PageModel }) => {
  const router = useRouter();
  const { page } = props;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  //const { pageSlug } = router.query;
  return <Page page={page}></Page>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { pageSlug: "lien-he" } }];
  return {
    paths,
    // don't build static page at build time, keep it for the 1st request
    // to reduce build time
    // fallback: "blocking", // is called before initial render
    fallback: true, // runs in the background - lazy load with ajax + json
  };
};

export const getStaticProps: GetStaticProps<{ page: PageModel }> = async ({
  params,
}) => {
  const pageSlug = (params["pageSlug"] as string) || "";
  console.log("enviroment.PRIVATE_API_TOKEN", enviroment.PRIVATE_API_TOKEN);
  const page: PageModel = {
    title: `Page with slug = ${pageSlug} ${new Date().toISOString()}`,
    slug: pageSlug,
    content: `Content of page with slug = ${pageSlug}`,
    featureImage: "",
    id: Math.random().toFixed(),
  };
  return {
    props: {
      page,
    },
    revalidate: 3, // In seconds
  };
};
