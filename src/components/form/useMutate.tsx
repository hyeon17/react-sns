import { login } from "@/api/auth";
import { LoginResponse } from "@/types/response";
import { setCookie } from "@/util";
import { useMutation } from "@tanstack/react-query";

export const useMutate = () => {
  const { mutate, isLoading, error } = useMutation(login, {
    onSuccess: (data: LoginResponse) => {
      if (!data) return;

      setCookie("accessToken", data.payload!.accessToken, {
        path: "/",
        maxAge: data.payload!.content?.exp - data.payload!.content?.iat,
      });
    },
  });

  return { mutate, isLoading, error };
};
