import { AUTHORIZATION_KEY } from "@/constants";
import { LoginRequest, SignupRequest } from "@/types/request";
import {
  LoginResponse,
  SignupResponse,
  VerifyResponse,
} from "@/types/response";
import { getBearerToken } from "@/util";
import { getJwtExpireTimeStamp } from "@/mock/util/jwt";
import { rest } from "msw";
import { createMockUser, mockUserList } from "../util/userTest";

const TEST_ACCESSTOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiLquYDspIDtg5wiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjgxOTU1NDcyLCJleHAiOjE2ODE5NTkwNzJ9.nAZVh5TXoeZ_BORMzlCYDiCWvqe6DijguEZYlfFrPsc";

export const authHandler = [
  rest.get("/auth/verify", async (req, res, ctx) => {
    const token = getBearerToken(req.headers.get(AUTHORIZATION_KEY));

    const user = mockUserList[0];

    return res(
      ctx.status(200),
      ctx.json<VerifyResponse>({
        ok: true,
        payload: {
          user: {
            id: 1,
            email: user.email,
            username: user.username,
            profile: user.profile,
          },
        },
      })
    );
  }),
  rest.post("/auth/login", async (req, res, ctx) => {
    const { email, password } = await req.json<LoginRequest>();

    const now = Date.now();

    const user = mockUserList[0];

    return res(
      ctx.status(200),
      ctx.json<LoginResponse>({
        ok: true,
        payload: {
          content: {
            ...user,
            iat: now,
            exp: getJwtExpireTimeStamp(now, 3600),
          },
          accessToken: TEST_ACCESSTOKEN,
        },
      })
    );
  }),
  rest.post("/auth/signup", async (req, res, ctx) => {
    const { email, password, username, profile } =
      await req.json<SignupRequest>();

    const now = Date.now();

    const newUser = createMockUser({
      email,
      password,
      username,
      profile: profile?.name,
      posts: [],
      likes: [],
    });

    return res(
      ctx.status(201),
      ctx.json<SignupResponse>({
        ok: true,
        payload: {
          content: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            iat: now,
            exp: getJwtExpireTimeStamp(now, 3600),
          },
          accessToken: TEST_ACCESSTOKEN,
        },
      })
    );
  }),
];
