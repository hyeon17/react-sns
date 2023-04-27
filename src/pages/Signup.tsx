import { Helmet } from "react-helmet-async";
import * as S from '@/components/form/style';
import SignupForm from "@/components/form/SignupForm";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png"
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth";
import { setCookie } from "@/util";
import { AxiosError } from "axios";
import { SignupRequest } from "@/types/request";

function Signup() {
  const { mutate } = useMutation((user:SignupRequest) => signup(user), {
    onSuccess: (data) => {
      console.log(data)
      setCookie('accessToken', data?.payload?.accessToken, data && { path: '/', maxAge: data.payload && data?.payload?.content?.exp - data?.payload?.content?.iat })

    },
    onError: (err: AxiosError) => {
      console.log(err)
    },
  })
    return (
      <S.Container>
        <Helmet>
        <title>회원가입 | photogram</title>
      </Helmet>
        <S.LoginBox>
          <S.LoginLogo src={logo}/>
          <SignupForm mutate={mutate}/>
        
        </S.LoginBox>
        <S.SubTitleWrap>
          <S.SubTitle>계정이 있으신가요?</S.SubTitle>
          <NavLink to='/login'>로그인</NavLink>
        </S.SubTitleWrap>
      </S.Container>
    )
}

export default Signup;
