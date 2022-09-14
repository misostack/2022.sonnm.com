import Header from "./partials/header";
import Footer from "./partials/footer";

const LayoutSingle = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LayoutSingle;
