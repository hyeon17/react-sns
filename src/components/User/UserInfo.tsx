import React from 'react'
import * as S from './style'
import axios from 'axios'



function UserInfo() {

  // const getPosts = async () => {
  //   const response = await axios.get(import.meta.env.VITE_SERVER_URL + '/posts')
  //   console.log(response)
  // }
  const imgSrc:string = "https://picsum.photos/150/150"
  const userName:string = "유저 네임"
  const userEmail:string = "test@gamil.com"
  const postCount:string = "123"
  return (
    <S.gridDiv>
      <img src={imgSrc} />
      <div>{userName}</div>
      <div>게시물 <span>{postCount}</span></div>
      <div>{userEmail}</div>
    </S.gridDiv>
  )
}

export default UserInfo