// components/Layout.tsx
import Meta from "./partials/Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};

export default Layout;
