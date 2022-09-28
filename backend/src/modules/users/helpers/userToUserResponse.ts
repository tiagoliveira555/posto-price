import { IUserResponse } from "../interfaces/IUserResponse";
import { User } from "../entities/User";

export const userToUserResponse = (user: User): IUserResponse => {
  const { password, ...userResponse } = user;

  return userResponse;
};
