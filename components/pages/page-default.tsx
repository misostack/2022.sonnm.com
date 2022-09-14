import { PageModel } from "../../business/models";

const PageDefault = (props: { page: PageModel }) => {
  const { page } = props;
  return (
    <>
      <div className="container">
        <h1>{page.title}</h1>
        <div className="content">{page.content}</div>
      </div>
    </>
  );
};

export default PageDefault;
