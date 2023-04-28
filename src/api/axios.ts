import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { TIMEOUTERROR_MESSAGE, TimeoutError } from "@/error";
import { getCookie } from "@/util/cookies";
import { ACCESSTOKEN_KEY, AUTHORIZATION_KEY } from "@/constants";
import { createBearerToken } from "@/util";

const getInstance = () => {
  const instance = axios.create({
    baseURL: 'http://teamsns-env.eba-xrpy64pm.ap-northeast-2.elasticbeanstalk.com/',
    withCredentials: true,
  });

  instance.defaults.timeout = 5000;
  instance.defaults.timeoutErrorMessage = TIMEOUTERROR_MESSAGE;

  instance.interceptors.request.use(handleRequest);

  instance.interceptors.response.use(handleResponse, handleIntercepterError);

  return instance;
};

export const instance = getInstance();

function handleRequest(req: InternalAxiosRequestConfig<any>) {
  const accessToken = getCookie(ACCESSTOKEN_KEY);

  if (getCookie(ACCESSTOKEN_KEY)) {
    req.headers[AUTHORIZATION_KEY] = createBearerToken(accessToken);
  }

  return req;
}

function handleResponse(res: AxiosResponse<any, any>) {
  return res;
}

function handleIntercepterError(error: AxiosError) {
  if (error?.code === AxiosError.ECONNABORTED) {
    return Promise.reject({ ok: false, error: new TimeoutError() });
  }
  return Promise.reject(error);
}
