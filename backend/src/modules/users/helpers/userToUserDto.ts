import { IUserDto } from "../dtos/IUserDto";
import { User } from "../entities/User";

export const userToUserDto = (user: User): IUserDto => {
  const { password, ...userDto } = user;

  return userDto;
};
