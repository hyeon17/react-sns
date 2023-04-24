import React, { useState } from 'react'
import * as S from './style'
import data from './testData'
import Post from './Post';
import { ReactComponent as PostLogo } from "@/assets/postLogo.svg"

function PostList() {

  return (
    <>
      <S.flexCenterDiv>
        <PostLogo />
        <span>게시물</span>
      </S.flexCenterDiv>
      <S.flexWrapDiv>
        {data.map(post => (
          <Post key={post.id} src={post.src} like={post.like} comment={post.comment}></Post>
        ))}
      </S.flexWrapDiv>
    </>
  )
}

export default PostList