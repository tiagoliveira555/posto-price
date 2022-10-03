export interface IUserTokenDto {
  user: {
    id: string;
    name: string;
    username: string;
  };
  token: string;
}
