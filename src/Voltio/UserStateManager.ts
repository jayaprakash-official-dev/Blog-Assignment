import { UserState } from "./store";
import UserService from "../Services/UserService";

export class UserStateManager {
  static getUser = async () => {
    const getUserData = await UserService.getUsers();
    UserState.UserList = getUserData;
  };
}
