import { BlogPostModel } from "./blog-post.model";
export interface BlogCategoryModel {
  title: string;
  posts: BlogPostModel[];
}
