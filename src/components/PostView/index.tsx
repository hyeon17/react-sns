import { useState, useEffect } from 'react';
import * as S from './style';
import Loading from '../Loading';
import { useStore } from '../../store/store';
import { getPost, deletePost } from '@/api/post';
import { addLike, deleteLike } from '@/api/user';
import { useMutation } from '@tanstack/react-query';
import { commentMutation } from '@/api/user';
import { CommentForm } from '@/types/modal';

export const PostView = ({ id }: { id: number }) => {
  const [post, setPost] = useState<any>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<any>('');
  const { mutate } = useMutation(({ id, content }: CommentForm) => commentMutation({ id, content }), {
    onSuccess: () => {
      console.log('success');
    },
  });

  const { closeModal } = useStore();
  const formatDate = (date: string) => new Date(date).toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
    });
  }, []);

  const deletePostButton = async () => {
    await deletePost(id);
    alert('삭제되었습니다.');
    closeModal();
  };

  const likeClick = async () => {
    post.likes.length > 0 ? await deleteLike(id) : await addLike(id);
    setIsLiked(!isLiked);
  };

  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue: string = event.target.value;
    setComments(inputValue);
  };

  const addComments = () => {
    mutate({ id, content: comments });
    alert('댓글이 등록되었습니다.');
    setComments('');
  };

  const postComments = post?.comments.map((comment: any) => (
    <S.PostCommentsWrapper key={comment.id}>
      <S.PostCommentContent>{comment.content}</S.PostCommentContent>
    </S.PostCommentsWrapper>
  ));

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
            {postComments}
            <S.ButtonContentWrapper>
              <S.ButtonWrapper onClick={likeClick}>{post.likes.length > 0 ? <S.PostLikes /> : <S.PostLikesIcon />}</S.ButtonWrapper>
              <S.ButtonWrapper>
                <S.PostEditIcon />
              </S.ButtonWrapper>
              <S.ButtonWrapper>
                <S.PostDeleteIcon onClick={deletePostButton} />
              </S.ButtonWrapper>
            </S.ButtonContentWrapper>
            <S.PostDate>
              <div>
                {formatDate(post.updatedAt || post.createdAt)}
                {post.createdAt !== post.updatedAt && '(수정됨)'}
              </div>
            </S.PostDate>
            <S.InputWrapper>
              <S.CommentInput placeholder='댓글 달기' onChange={textChange} value={comments} />
              <S.PostCommentButton onClick={addComments}>게시</S.PostCommentButton>
            </S.InputWrapper>
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
