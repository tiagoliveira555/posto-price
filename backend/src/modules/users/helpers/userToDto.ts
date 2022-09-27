import { IUserResponse } from "../interfaces/IUserResponse";
import { User } from "../entities/User";

export const userToDto = (user: User): IUserResponse => {
  const { password, ...userResponse } = user;

  return userResponse;
};
