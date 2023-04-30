import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserInfo from '@/components/User/UserInfo';
import PostList from '@/components/User/PostList';
import { instance } from '@/api/axios';
import Header from '@/components/Header';
import { useStore } from '@/store/store';
import Post from './Post';
import { profile, posts } from '@/types/user';
import { getPostAll } from '@/api/user';

function User() {
  const params = useParams();
  const userName: string | undefined = params?.user;
  const { getIsPostModalOpen } = useStore();
  const [userProfile, setUserProfile] = useState<profile>();
  const [postLength, setPostLength] = useState(0);
  const [userPost, setUserPost] = useState<posts[]>();

  useEffect(() => {
    getPostAll(userName).then((res) => {
      setUserProfile(res.user);
      setPostLength(res.posts.length);
      setUserPost(res.posts);
    });
  }, []);

  return (
    <>
      <Header />
      <UserInfo userProfile={userProfile} postLength={postLength} />
      <PostList userPost={userPost} />
      {getIsPostModalOpen() && <Post />}
    </>
  );
}

export default User;
