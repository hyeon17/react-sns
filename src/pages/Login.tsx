
import { Helmet } from "react-helmet-async";
import LoginForm from "@/components/form/LoginForm";
import { NavLink, useLocation, useNavigate, useMatch } from "react-router-dom";
import * as S from '@/components/form/style';
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";
import { setCookie } from "@/util";
import { AxiosError } from "axios";
import { useState } from "react";
import { LoginResponse } from "@/types/response";

 // const todo: LoginResponse = {
  //   ok: true,
  //   payload: {
  //     content: {
  //       id: 1,
  //       username: 'd',
  //       email: 'dd',
  //       exp: 131,
  //       iat: 1,
  //     },
  //   accessToken: 'ddd',
  //   },
  // };


function Login() {
  // const navigate = useNavigate();
  const { mutate, isLoading, error } = useMutation(login, {
    onSuccess: (data: LoginResponse) => {
      console.log(data)
      // navigate('/posts/testUser1')
      if(!data) return;
      setCookie('accessToken', data.payload!.accessToken, { path: '/', maxAge: data.payload!.content?.exp - data.payload!.content?.iat })    
    },
    // onError: (err: AxiosError) => {
    //   console.log(err)
    // },
  })

  // error && console.log({error})
  
  
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
