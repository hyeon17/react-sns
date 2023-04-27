import { LoginRequest, SignupRequest } from '@/types/request'
import { SignupResponse, LoginResponse } from '@/types/response'
import { instance } from './axios'
import { VerifyPayload } from '@/types/payload'
import { getCookie } from '@/util'

export const login = async (user: LoginRequest) => {
  try {
    const { data } = await instance.post<LoginResponse>('/auth/login', user)
    return data
  } catch (error) {
    throw error
  }
}

export const signup = async ({email,password, username}: SignupRequest) => {
  try {
    // const formData = new FormData();
    // formData.append('email', user.email)
    // formData.append('password', user.password)
    const { data } = await instance.post<SignupResponse>('/auth/signup', {
      // email: formData.get('email'),
      // password: formData.get('password'),
      email,password, username
    }, {
      headers: { "Content-Type": "multipart/form-data"},
    }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const verify = async () => {
  try {
    const { data } = await instance.get<VerifyPayload>('/auth/verify')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const refresh = async () => {
  const { data } = await instance.get<SignupResponse>('/auth/refresh')
  return data
}