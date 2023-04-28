import { useState, useEffect } from 'react';
import { getCookie } from '@/util';
import { instance } from '@/api/axios';
import * as S from './style';
import Loading from '../Loading';
import { Comment } from './../../types/entity';

export const PostView = ({ id }: { id: number }) => {
  const [post, setPost] = useState<any>(null);

  const getPost = async (id: number) => {
    const token = getCookie('accessToken');
    const response = await instance.get(`/posts/${id}`, {
      headers: { Authorization: token },
    });
    console.log(response.data.payload);
    setPost(response.data.payload);
  };

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <>
      {post ? (
        <S.PostViewWrapper>
          <S.PostImageWrapper>
            <S.PostImage src={post.files} />
          </S.PostImageWrapper>
          <S.PostContentWrapper>
            <S.PostAuthor>{post.author.username}</S.PostAuthor>
            <S.PostContent>{post.content}</S.PostContent>
            <S.PostDate>
              {post.createdAt === post.updatedAt ? (
                <div>{new Date(post.createdAt).toLocaleString()}</div>
              ) : (
                <div>{new Date(post.updatedAt).toLocaleString()}(수정됨)</div>
              )}
            </S.PostDate>
            <S.PostLikesWrapper>
              <S.PostLikesIcon />
              <S.PostLikesCount />
              {post.likes}
            </S.PostLikesWrapper>
            <S.PostCommentsWrapper>
              <S.PostCommentsIcon />
              <S.PostCommentsCount />
              {post.Comments}
            </S.PostCommentsWrapper>
          </S.PostContentWrapper>
        </S.PostViewWrapper>
      ) : (
        <S.PostViewWrapper>
          <Loading />
        </S.PostViewWrapper>
      )}
    </>
  );
};

export default PostView;
