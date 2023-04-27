import { useEffect } from 'react'
import { getCookie } from "@/util"
import { instance } from "@/api/axios"


export const PostView = ( { id }: { id: number } ) => {
  const getPost = async (id: number) => {
    const token = getCookie('accessToken')
    const response = await instance.get(`/posts/${id}`, {
      headers: {Authorization: token },
    })
    console.log(response)
  }

  useEffect(() => {
    getPost(id)
  }, [])

  return (
    <div>PostView {id}</div>
  )
}

export default PostView