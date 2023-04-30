import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
import { theme } from '../../styles/theme';

export const PostViewWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1000px;
  height: 800px;
  margin: 0 auto;
`;

export const PostImageWrapper = styled.div`
  width: 600px;
  height: 100%;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;
  margin-left: 30px;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: start;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  height: 30px;
  width: 100%;
  justify-content: start;
  margin: 10px 10px;
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: start;
  font-size: 16px;
  color: ${theme.colors.darkSky};
  width: 100%;
  margin: 20px 10px;
  overflow: visible;
  white-space: normal;
  word-break: break-all;
`;
export const PostCommentsWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 300px;
`;
export const PostCommentContent = styled.div`
  font-size: 12px;
`;
export const PostDate = styled.div`
  display: flex;
  justify-content: start;
  font-size: 8px;
  color: ${theme.colors.dimGray};
  width: 100%;
  margin: 20px 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.colors.lightGray};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PostLikesIcon = styled(AiOutlineHeart)`
  font-size: 26px;
  margin-right: 10px;
  &:hover {
    color: ${theme.colors.dimGray};
  }
`;
export const PostLikes = styled(AiFillHeart)`
  font-size: 26px;
  margin-right: 10px;
  color: #ed4956;
`;

export const PostEditIcon = styled(AiOutlineEdit)`
  font-size: 26px;
  margin-right: 10px;
  &:hover {
    color: ${theme.colors.dimGray};
  }
`;

export const PostDeleteIcon = styled(AiOutlineDelete)`
  font-size: 26px;
  margin-right: 4px;
  &:hover {
    color: ${theme.colors.dimGray};
  }
`;

export const ButtonContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  border-top: 1px solid ${theme.colors.lightGray};
  padding-top: 10px;
`;

export const InputWrapper = styled.form`
  display: flex;
  width: 100%;
  height: 50px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  word-wrap: break-word;
  resize: none;
  color: ${theme.colors.black};
  &::placeholder {
    color: ${theme.colors.dimGray};
  }
`;

export const PostCommentButton = styled.button`
  width: 70px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${theme.colors.sky};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.darkSky};
  }
`;
