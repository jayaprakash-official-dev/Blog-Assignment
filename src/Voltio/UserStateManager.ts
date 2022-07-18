import { UserState,BlogState } from "./store";
import UserService from "../Services/UserService";
import BlogServices from "../Services/BlogService";

export class UserStateManager {
  static getUser = async () => {
    const getUserData = await UserService.getUsers();
    UserState.UserList = getUserData;
  };

  static getUserBlog = async (userId?: number) => {
    const getBlogData = await BlogServices.getBlogs(userId);
    BlogState.BlogList = getBlogData;
  };
}
