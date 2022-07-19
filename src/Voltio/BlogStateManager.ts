import { BlogState } from "./store";
import BlogService from "../Services/BlogService";
import { UserResponse } from "../Models/Response/UserModelResponse";

export class BlogStateManager {
  static getBlog = async (user?: UserResponse) => {
    const getBlogData = await BlogService.getBlogs(user);
    BlogState.BlogList = getBlogData;
  };
}
