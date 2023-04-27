import { Helmet } from "react-helmet-async";
import * as S from '@/components/form/style';
import SignupForm from "@/components/form/SignupForm";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png"
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/api/auth";
import { setCookie } from "@/util";
import { AxiosError } from "axios";
import { SignupRequest } from "@/types/request";
import { SignupResponse } from "@/types/response";

function Signup() {
  const navigate = useNavigate();
  const { mutate } = useMutation((user: SignupRequest) => signup(user), {
    onSuccess: (data:SignupResponse) => {
      console.log(data)
      navigate('/')
      if(!data) return;
      setCookie('accessToken', data.payload!.accessToken, { path: '/', maxAge: data.payload!.content?.exp - data.payload!.content?.iat })
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
