import { instance } from '@/api/axios';
import { getCookie } from '@/util';
import { CreateCommentResponse, DeleteCommentResponse, UpdateCommentResponse } from '@/types/response';
import { CommentForm } from '@/types/modal';

export const getPostAll = async (userName: string | undefined) => {
  const response = await instance.get(`/posts?username=${userName}`);
  return response.data.payload;
};

export const addLike = async (id: number) => {
  const token = getCookie('accessToken');
  const response = await instance.post(`/posts/like/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};

export const deleteLike = async (id: number) => {
  const token = getCookie('accessToken');
  const response = await instance.delete(`/posts/like/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};

// export const addComment = async ({ id, content }: CreateCommentRequest) => {
//   const token = getCookie('accessToken');
//   const response = await instance.post<CreateCommentResponse>(
//     `/comments`,
//     { id, content },
//     {
//       headers: { Authorization: token },
//     },
//   );
//   return response;
// };

export const commentMutation = async ({ id, content }: CommentForm) => {
  const token = getCookie('accessToken');
  const response = await instance.post<CreateCommentResponse>(
    `/comments`,
    { id, content },
    {
      headers: { Authorization: token },
    },
  );
  return response;
};

export const deleteComment = async (id: number) => {
  const token = getCookie('accessToken');
  const response = await instance.delete<DeleteCommentResponse>(`/comments/${id}`, {
    headers: { Authorization: token },
  });
  return response;
};

export const updateComment = async ({ id, content }: CommentForm) => {
  const token = getCookie('accessToken');
  const response = await instance.put<UpdateCommentResponse>(
    `/comments/${id}`,
    { content },
    {
      headers: { Authorization: token },
    },
  );
  return response;
};
