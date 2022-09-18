import enviroment from "@config/enviroment";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Layout from "../components/layout-default";
import LayoutSingle from "../components/layout-single";

export default function Home(props: { lastUpdated: string }) {
  const { lastUpdated } = props;
  useEffect(() => {
    console.log(
      "enviroment.NEXT_PUBLIC_API_URL",
      enviroment.NEXT_PUBLIC_API_URL
    );
    console.log(
      "enviroment.NEXT_PUBLIC_BASE_URL",
      enviroment.NEXT_PUBLIC_BASE_URL
    );
    console.log("enviroment.PRIVATE_API_TOKEN", enviroment.PRIVATE_API_TOKEN);
    console.log("props", props);
  }, []);
  return (
    <>
      <div className="container">
        <h1>SONNM.COM - Personal Blog</h1>
        <div>Last Updated: {lastUpdated}</div>
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

export const getServerSideProps: GetServerSideProps<{
  lastUpdated: string;
}> = async () => {
  console.log("enviroment.PRIVATE_API_TOKEN", enviroment.PRIVATE_API_TOKEN);
  return {
    props: {
      lastUpdated: new Date().toISOString(),
    },
  };
};

Home.getLayout = (page) => {
  return (
    <Layout>
      <LayoutSingle>{page}</LayoutSingle>
    </Layout>
  );
};
