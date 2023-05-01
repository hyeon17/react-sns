export type profile = {
  id: number
  email: string
  username: string
  profile?:string
}

export type posts = {
  id: number
  files: string
  likes: number
  comments: number
  createdAt: string
  updatedAt: string
}

export type userPosts = {
  user: profile
  posts: posts[]
}