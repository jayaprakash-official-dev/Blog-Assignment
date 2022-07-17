import axios from "../Axios/axios";
import { SuccessResponse } from "../Models/ResponseModel";
import { BlogResponse } from "../Models/Response/BlogModelResponse";
import { BlogState } from "../Voltio/store";

class BlogServices {
  static async getBlogs() {
    const response = new SuccessResponse<BlogResponse[]>();
    BlogState.isLoading = true;
    try {
      const getBlogList = await axios.get<BlogResponse[]>("/posts");
      response.data = getBlogList.data;
      response.success = true;
    } catch (error) {
      response.error = (error as Error).message;
    }
    BlogState.isLoading = false;
    return response;
  }
}

export default BlogServices;
