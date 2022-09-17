import Layout from "../components/layout-default";
import LayoutSingle from "../components/layout-single";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1>SONNM.COM - Personal Blog</h1>
        <p>
          Công việc hằng ngày của tôi là sáng tạo những phương thức mới, nhằm
          thúc đẩy kết nối giữa người tiêu dùng với các nhà cung cấp sản
          phẩm/dịch vụ tốt nhất.
        </p>

        <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
          <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            Phương châm của tôi khi gặp khách hàng là đem đến cho họ sản
            phẩm/dịch vụ phù hợp.
          </p>
        </blockquote>
      </div>
    </>
  );
}

Home.getLayout = (page) => {
  return (
    <Layout>
      <LayoutSingle>{page}</LayoutSingle>
    </Layout>
  );
};
