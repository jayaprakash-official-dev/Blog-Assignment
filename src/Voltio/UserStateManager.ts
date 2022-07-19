import { UserState,BlogState } from "./store";
import UserService from "../Services/UserService";
import BlogServices from "../Services/BlogService";
import { UserResponse } from "../Models/Response/UserModelResponse";

export class UserStateManager {
  static getUser = async () => {
    const getUserData = await UserService.getUsers();
    UserState.UserList = getUserData;
  };

  static getUserBlog = async (user: UserResponse) => {
    const getBlogData = await BlogServices.getBlogs(user);
    BlogState.BlogList = getBlogData;
  };
}
