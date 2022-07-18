import { BlogState } from "./store";
import BlogService from "../Services/BlogService";

export class BlogStateManager {
  static getBlog = async (userId?: number) => {
    const getBlogData = await BlogService.getBlogs(userId);
    BlogState.BlogList = getBlogData;
  };
}
