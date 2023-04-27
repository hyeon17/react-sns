import { instance } from "@/api/axios";
import { ACCESSTOKEN_KEY } from "@/constants";
import { setCookie } from "@/util";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import LoginForm from "@/components/form/LoginForm";
import { NavLink, useLocation, useNavigate, useMatch } from "react-router-dom";
import * as S from '@/components/form/style';
import { login } from "@/api/auth";
import { AxiosError } from "axios";
import { useState } from "react";
import { LoginResponse } from "@/types/response";
import { LoginRequest } from "@/types/request";

function Login() {
  const navigate = useNavigate();
  const { mutate, isLoading, error } = useMutation((user:LoginRequest) => login(user), {
    onSuccess: (data: LoginResponse) => {
      console.log(data)
      navigate('/')
      if(!data) return;
      setCookie('accessToken', data.payload!.accessToken, { path: '/', maxAge: data.payload!.content?.exp - data.payload!.content?.iat })    
    },
  })
  
  return (
      <S.Container>
        <Helmet>
        <title>로그인 | photogram</title>
      </Helmet>
        <S.LoginBox>
          <LoginForm mutate={mutate} isLoading={isLoading} error={error} modal={false} />
        </S.LoginBox>
        <S.SubTitleWrap>
          <S.SubTitle>계정이 없으신가요?</S.SubTitle>
          <NavLink to='/signup'>가입하기</NavLink>
        </S.SubTitleWrap>
      </S.Container>
  )
}
export default Login;
