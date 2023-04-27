import React, { useState } from 'react'
import * as S from './style'
import data from './testData'
import Post from './Post';
import { ReactComponent as PostLogo } from "@/assets/postLogo.svg"
import { Link } from 'react-router-dom'
import BasicModal from '../BasicModal';
import { useStore } from '@/store/store';

type posts = {
  id: number
  files: string
  likes: number
  createdAt: string
  updatedAt: string
}

function PostList({userPost}: {userPost: posts[] | undefined}) {
  const [postId, setPostId] = useState(0)
  const { openModal, getIsModalOpen } = useStore()
  
  return (
    <>
      <S.flexCenterDiv>
        <PostLogo />
        <span>게시물</span>
      </S.flexCenterDiv>
      <S.flexWrapDiv>
        {userPost?.map(post => (
          <Post key={post.id} src={post.files} like={post.likes} onClick={() => {
            openModal();
            setPostId(post.id)
          }} />
        ))}
        {getIsModalOpen() && postId ? <BasicModal content={<div>test modal {postId}</div>}/> : null}
      </S.flexWrapDiv>
    </>
  )
}

export default PostList