import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserInfo from '@/components/User/UserInfo';
import PostList from '@/components/User/PostList';
import { instance } from '@/api/axios';
import Header from '@/components/Header';
import { useStore } from '@/store/store';
import Post from './Post';
import { profile, posts, userPosts } from '@/types/user';
import { getPostAll } from '@/api/user';
import { useQuery } from '@tanstack/react-query';

function User() {
  const params = useParams();
  const { getIsPostModalOpen } = useStore();

  const { data: posts, isLoading, error } = useQuery(['posts', params.user], () => getPostAll(params.user), {
    onSuccess: () => {
      console.log(posts)
    }
  })

  if(isLoading) return <>로딩 중...</>
  if(error) return <>error</>

  return (
    <>
      <Header />
      <UserInfo userProfile={posts.user} postLength={posts.posts.length} />
      <PostList userPost={posts.posts} />
      {getIsPostModalOpen() && <Post />}
    </>
  );
}

export default User;
