import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserInfo from "@/components/User/UserInfo"
import PostList from "@/components/User/PostList"
import { instance } from "@/api/axios"
import Header from "@/components/Header"

type posts = {
  id: number
  files: string
  likes: number
  createdAt: string
  updatedAt: string
}

type userPosts = {
  user: profile
  posts: posts[]
}

type profile = {
  id: number
  email: string
  username: string
}

function User() {
  const params = useParams()
  const userName: string | undefined = params?.user

  const [userProfile, setUserProfile] = useState<profile>()
  const [postLength, setPostLength] = useState(0)
  const [userPost, setUserPost] = useState<posts[]>()

  const getPosts = async (userName:string | undefined) => {
    const response = await instance.get(`/posts?username=${userName}`)
    
    console.log(response.data.payload.user)
    console.log(response.data.payload.posts)
    setUserProfile(response.data.payload.user)
    setPostLength(response.data.payload.posts.length)
    setUserPost(response.data.payload.posts)
  }

  useEffect(() => {
    console.log(params)
    getPosts(userName)
  },[])

  return (
  <>
    <Header />
    <UserInfo userProfile={userProfile} postLength={postLength} />
    <PostList userPost={userPost} />
  </>
  );
}

export default User;
