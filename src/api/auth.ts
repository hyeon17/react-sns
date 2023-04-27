import { LoginRequest, SignupRequest } from '@/types/request'
import { SignupResponse, LoginResponse } from '@/types/response'
import { instance } from './axios'
import { VerifyPayload } from '@/types/payload'

export const login = async (user: LoginRequest) => {
  try {
    const { data } = await instance.post<LoginResponse>('/auth/login', user)
    return data
  } catch (error) {
    throw error
  }
}

export const signup = async (user: SignupRequest) => {
  try {
    const { data } = await instance.post<SignupResponse>('/auth/signup', user)
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