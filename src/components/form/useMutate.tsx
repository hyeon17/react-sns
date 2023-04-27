import { login } from "@/api/auth";
import { LoginResponse } from "@/types/response";
import { setCookie } from "@/util";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";




export const useMutate = () => {
    // const navigate = useNavigate();
    const { mutate, isLoading, error } = useMutation(login, {
        onSuccess: (data: LoginResponse) => {
          console.log(data)
        //   navigate('/')
          if(!data) return;
          setCookie('accessToken', data.payload!.accessToken, { path: '/', maxAge: data.payload!.content?.exp - data.payload!.content?.iat })    
        },
      })

      return {mutate, isLoading, error}
}