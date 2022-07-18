import axios from "../Axios/axios";
import { SuccessResponse } from "../Models/ResponseModel";
import { BlogResponse } from "../Models/Response/BlogModelResponse";
import { BlogState } from "../Voltio/store";

class BlogServices {
  static async getBlogs(userId?: number) {
    const response = new SuccessResponse<BlogResponse[]>();
    BlogState.isLoading = true;
    try {
      const url = userId ? `/posts/?userId=${userId}` : `/posts`;
      console.log(url, "urlurl");
      
      const getBlogList = await axios.get<BlogResponse[]>(url);
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
