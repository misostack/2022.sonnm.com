import { PageModel } from "../business/models";
import PageDefault from "./pages/page-default";
import PageContact from "./pages/page-contact";

const Page = (props: { slug: string }) => {
  const { slug } = props;
  const page: PageModel = {
    title: `Page with slug = ${slug}`,
    slug: slug,
    content: `Content of page with slug = ${slug}`,
    featureImage: "",
    id: Math.random().toFixed(),
  };
  let pageContent = <PageDefault page={page}></PageDefault>;
  if (slug === "lien-he") {
    pageContent = <PageContact page={page}></PageContact>;
  }
  return pageContent;
};

export default Page;
