export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface RegistrationUserInfo {
  user: { username: string; email: string; password: string };
}

export interface LoginUserInfo {
  user: { email: string; password: string };
}
