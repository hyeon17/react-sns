import { Post, User } from "./entity";
import { AccessToken, JwtPayload } from "./jwt";

export interface LoginPayload {
  content: Pick<User, "id" | "username" | "email"> &
    Required<Pick<JwtPayload, "iat" | "exp">>;
  accessToken: AccessToken;
}

export interface SignupPayload {
  content: Pick<User, "id" | "username" | "email"> &
    Required<Pick<JwtPayload, "iat" | "exp">>;
  accessToken: AccessToken;
}

export interface VerifyPayload {
  user: Pick<User, "id" | "username" | "email" | "profile">;
}

export interface GetPostsPayload {
  user: Pick<User, "id" | "email" | "username" | "profile">;
  posts: Array<Pick<Post, "id" | "files" | "createdAt" | "updatedAt">>;
}

export interface GetPostPayload extends Omit<Post, "author"> {
  author: Pick<User, "username" | "email" | "profile">;
}
