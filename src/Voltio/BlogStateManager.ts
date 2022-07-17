import { BlogState } from "./store";
import BlogService from "../Services/BlogService";

export class BlogStateManager {
  static getBlog = async () => {
    const getBlogData = await BlogService.getBlogs();
    BlogState.BlogList = getBlogData;
  };
}
