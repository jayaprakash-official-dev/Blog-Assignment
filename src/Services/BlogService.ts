import axios from "../Axios/axios";
import { SuccessResponse } from "../Models/ResponseModel";
import { BlogResponse } from "../Models/Response/BlogModelResponse";
import { BlogState } from "../Voltio/store";
import { UserResponse } from "../Models/Response/UserModelResponse";

class BlogServices {
  static async getBlogs(user?: UserResponse) {
    const response = new SuccessResponse<BlogResponse[], UserResponse>();
    BlogState.isLoading = true;
    try {
      const url = user && user.id ? `/posts/?userId=${user.id}` : `/posts`;
      const getBlogList = await axios.get<BlogResponse[]>(url);
      response.data = getBlogList.data;
      if (user && user.id) {
        response.user = user;
      }
      response.success = true;      
    } catch (error) {
      response.error = (error as Error).message;
    }
    BlogState.isLoading = false;
    return response;
  }
}

export default BlogServices;
