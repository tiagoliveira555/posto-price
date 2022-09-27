import { UserDto } from "../modules/dtos/response/UserDto";
import { User } from "../modules/entities/User";

export const userToDto = (user: User): UserDto => {
  const { password, ...userDto } = user;

  return userDto;
};
