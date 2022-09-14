import LayoutSingle from "../components/layout-single";
function Error({ statusCode }) {
  return (
    <LayoutSingle>
      <div className="container">
        <h1>{statusCode}</h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </div>
    </LayoutSingle>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
