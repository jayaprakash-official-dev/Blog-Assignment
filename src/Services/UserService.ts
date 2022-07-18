import axios from "../Axios/axios";
import { SuccessResponse } from "../Models/ResponseModel";
import { UserResponse } from "../Models/Response/UserModelResponse";
import { UserState } from "../Voltio/store";

class UserServices {
  static async getUsers() {
    const response = new SuccessResponse<UserResponse[]>();
    UserState.isLoading = true;
    try {
      const getUserList = await axios.get<UserResponse[]>("/users");
      response.data = getUserList.data;
      response.success = true;
    } catch (error) {
      response.error = (error as Error).message;
    }
    UserState.isLoading = false;
    return response;
  }
}

export default UserServices;
