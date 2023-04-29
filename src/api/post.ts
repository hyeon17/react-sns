import { instance } from '@/api/axios';
import { PostForm } from '@/types/modal';
import { getCookie } from '@/util';
import { CreatePostResponse, GetPostResponse, DeletePostResponse } from '@/types/response';

export const postMutation = async ({ content, files }: PostForm) => {
  const token = getCookie('accessToken');
  const res = await instance.post<CreatePostResponse>(
    '/posts',
    { content, files },
    {
      headers: {
        Authorization: token,
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res;
};

export const getPost = async (id: number) => {
  const token = getCookie('accessToken');
  const response = await instance.get<GetPostResponse>(`/posts/${id}`, {
    headers: { Authorization: token },
  });
  console.log(response);
  return response.data.payload;
};

export const deletePost = async (id: number) => {
  const token = getCookie('accessToken');
  const response = await instance.delete<DeletePostResponse>(`/posts/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};