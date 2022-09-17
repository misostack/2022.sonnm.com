import { PageModel } from "../business/models";
import PageDefault from "./pages/page-default";
import PageContact from "./pages/page-contact";

const Page = (props: { page: PageModel }) => {
  const { page } = props;
  let pageContent = <PageDefault page={page}></PageDefault>;
  if (page.slug === "lien-he") {
    pageContent = <PageContact page={page}></PageContact>;
  }
  return pageContent;
};

export default Page;
