// components/layout-default.tsx
import Meta from "./partials/meta-head";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};

export default Layout;
