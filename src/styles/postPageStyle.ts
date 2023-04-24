import styled from 'styled-components';
import { FaPhotoVideo } from 'react-icons/fa';
import { theme } from '../styles/theme';
import { Preview } from './postPageStyle';

export const PhotoVideo = styled(FaPhotoVideo)`
  font-size: 150px;
`;

export const PostPageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;

export const FileUploadContent = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Post = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid ${theme.colors.dimGray};
  height: 100%;
`;

export const Description = styled.div`
  margin: 30px 0;
`;

export const UploadButton = styled.label`
  width: 140px;
  height: 35px;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.instaSky};
  color: ${theme.colors.white};
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: ${theme.colors.darkSky};
  }
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

export const PostContent = styled.textarea`
  padding: 20px 0 0 10px;
  margin-bottom: 10px;
  width: 90%;
  height: 90%;
  word-wrap: break-word;
  border: none;
  outline: none;
  resize: none;
`;

export const InputFile = styled.input`
  display: none;
`;

export const Preview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const WordNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const PreviewVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;