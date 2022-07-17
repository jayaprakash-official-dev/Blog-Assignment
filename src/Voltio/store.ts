import { proxy, useSnapshot } from "valtio";
import { UserResponse } from "../Models/Response/UserModelResponse";
import { BlogResponse } from "../Models/Response/BlogModelResponse";
import { SuccessResponse } from "../Models/ResponseModel";

interface UserStoreTypes {
  UserList: SuccessResponse<UserResponse[]>;
  isLoading: Boolean;
}

interface BlogStoreTypes {
  BlogList: SuccessResponse<BlogResponse[]>;
  isLoading: Boolean;
}

export const UserState = proxy<UserStoreTypes>({
  UserList: {} as SuccessResponse<UserResponse[]>,
  isLoading: false,
});

export const BlogState = proxy<BlogStoreTypes>({
  BlogList: {} as SuccessResponse<BlogResponse[]>,
  isLoading: false,
});
