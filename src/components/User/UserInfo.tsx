import React, { useState, useEffect } from 'react'
import * as S from './style'
import axios from 'axios'

const SEREVER_URL = import.meta.env.VITE_SERVER_URL

type profile = {
  id: number
  email: string
  username: string
}



function UserInfo({ userProfile, postLength }: { userProfile: profile | undefined, postLength: number } ) {
  // // const [userProfile, setUserProfile] = useState<profile>()
  // const [userPost, setUserPost] = useState<string>()
  // const getUserProfile = async () => {
  //   const response = await axios.get('http://localhost:3000' + '/auth/verify', {
  //     headers: {AUTHORIZATION_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiLquYDspIDtg5wiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjgxOTU1NDcyLCJleHAiOjE2ODE5NTkwNzJ9.nAZVh5TXoeZ_BORMzlCYDiCWvqe6DijguEZYlfFrPsc"}
  //   })
  //   setUserProfile(response.data.payload.user)
  // }

  // const getPosts = async (username:Promise<string>) => {
  //   const response = await axios.get('http://localhost:3000' + '/posts', {
  //     params: { username }
  //   })
  //   console.log(response)
  // }

  // useEffect(() => {
  //   // getUserProfile()
  //   // getPosts()
  // },[])

  // getPosts(username)
  // const imgSrc:string = "https://picsum.photos/150/150"
  // const userName:string = "유저 네임"
  // const userEmail:string = "test@gamil.com"
  // const postCount:string = "123"
  return (
    <S.gridDiv>
      <div className='imgWrapper'>
        {/* <img src={userProfile?.profile} /> */}
      </div>
      <div>{userProfile?.username}</div>
      <div>게시물 <span>{postLength}</span></div>
      <div>{userProfile?.email}</div>
    </S.gridDiv>
  )
}

export default UserInfo