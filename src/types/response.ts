import { AxiosError } from "axios";
import {
  GetPostPayload,
  GetPostsPayload,
  LoginPayload,
  SignupPayload,
  VerifyPayload,
} from "./payload";

export type APIResponse<T = unknown, E = Error> = {
  ok: boolean;
  payload?: T;
  error?: E;
};

export type NonPayloadAPIResponse<E = Error> = {
  ok: boolean;
  error?: E;
};

export type LoginResponse = APIResponse<LoginPayload>;

export type SignupResponse = APIResponse<SignupPayload>;

export type VerifyResponse = APIResponse<VerifyPayload>;

export type CreatePostResponse = NonPayloadAPIResponse;

export type GetPostsResponse = APIResponse<GetPostsPayload>;

export type GetPostResponse = APIResponse<GetPostPayload>;

export type DeletePostResponse = NonPayloadAPIResponse;

export type CreateCommentResponse = NonPayloadAPIResponse;

export type UpdateCommentResponse = NonPayloadAPIResponse;

export type DeleteCommentResponse = NonPayloadAPIResponse;
