import styled from 'styled-components';

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
`;

export const PostAuthor = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 16px 0;
`;

export const PostContent = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 16px;
`;

export const PostDate = styled.span`
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
`;

export const PostLikesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const PostLikesIcon = styled.span`
  font-size: 16px;
  color: #e1306c;
  margin-right: 4px;
`;

export const PostLikesCount = styled.span`
  font-size: 14px;
  color: #333;
`;

export const PostCommentsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PostCommentsIcon = styled.span`
  font-size: 16px;
  color: #3897f0;
  margin-right: 4px;
`;

export const PostCommentsCount = styled.span`
  font-size: 14px;
  color: #333;
`;
