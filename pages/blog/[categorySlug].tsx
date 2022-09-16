// pages/blog/[categorySlug].tsx

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

import { BlogCategoryModel } from "../../business/models/blog-category.model";
import Error from "../_error";

export default ({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div className="container">
        <h1>Category {category.title}</h1>
        <h2>List Post</h2>
        <ul>
          {category.posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  category: BlogCategoryModel;
}> = async (context) => {
  const { query } = context;
  const categorySlug = query.categorySlug;
  if (categorySlug === "posts") {
    return {
      notFound: true,
    };
  }
  if (categorySlug === "archived") {
    return {
      redirect: {
        destination: "/blog",
        // permanent: false,
        statusCode: 301,
      },
    };
  }
  const category: BlogCategoryModel = {
    title: `Category [${categorySlug}]`,
    posts: Array.from(new Array(6)).map((_, idx) => {
      return {
        title: `Post ${++idx}`,
        content: "",
        id: "1",
        featureImage: "",
        slug: "post-1",
      };
    }),
  };
  return {
    props: { category },
  };
};
