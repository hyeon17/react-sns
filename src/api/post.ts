import { instance } from '@/api/axios';
import { PostForm } from '@/types/modal';

export const postMutation = async ({ content, files }: PostForm) => {
  const res = await instance.post(
    '/posts',
    { content, files },
    {
      headers: {
        // Authorization: createBearerToken(''),
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return res;
};
