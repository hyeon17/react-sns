import { SignupRequest } from "@/types/request";
import { FieldErrors, useForm } from "react-hook-form";
import * as S from './style';
import { LoginLargeButton } from "../Header/Styled";

export interface SignFormProps {
    mutate: (data: SignupForm) => void;
  }
export interface SignupForm {
  email:  FormDataEntryValue;
  username:  FormDataEntryValue;
  password:  FormDataEntryValue;
}

function SignupForm({ mutate }:SignFormProps) {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SignupRequest>({mode: 'onChange'});
   
    
    const onValid = (data: SignupRequest) => {
      const formData = new FormData();
    formData.append('email', data.email)
    formData.append('username', data.username)
    formData.append('password', data.password)
    
      mutate({ email: formData.get('email')!, username: formData.get('username')!, password: formData.get('password')! })
        console.log(data)
    }
    
    const onInvalid = (errors: FieldErrors) => {
        console.log(errors)
    }
      return (
        <S.LogForm onSubmit={handleSubmit(onValid, onInvalid)}>
         <S.LoginInput {...register('email', {
          required: 'Email is required',
          pattern:{
            value:/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, 
            message:"이메일 형식이 아닙니다."
          }
      })} type="text" placeholder='Email'/>
      <S.ErrorSignMessage>{errors.email?.message}</S.ErrorSignMessage>

         <S.LoginInput {...register('username', {
          required: 'Username is required',
          minLength: {
          message: '5글자 이상 작성 바람',
          value: 5,
      }
      })} type="text" placeholder='Username'/>
      <S.ErrorSignMessage>{errors.username?.message}</S.ErrorSignMessage>

         <S.LoginInput {...register('password',{required: 'Password is required',
         pattern: { 
          value:  /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
          message: '비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요.',
        },
        })} type="password" placeholder='Password'/>
       <S.ErrorSignMessage>{errors.password?.message}</S.ErrorSignMessage> 

        <LoginLargeButton disabled={isSubmitting}>가입</LoginLargeButton>
        </S.LogForm>
      ) 
}

export default SignupForm