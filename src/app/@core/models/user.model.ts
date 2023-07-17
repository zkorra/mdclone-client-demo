export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface UserRegistrationInfo {
  username: string;
  email: string;
  password: string;
}

export interface UserRegistrationDto {
  user: UserRegistrationInfo;
}

export interface UserLoginInfo {
  email: string;
  password: string;
}

export interface UserLoginDto {
  user: UserLoginInfo;
}

export interface UserInfoResponse {
  user: User;
}
