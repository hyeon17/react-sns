import styled from 'styled-components';
import { theme } from '../styles/theme';
import { FaPhotoVideo } from 'react-icons/fa';

export const PhotoVideo = styled(FaPhotoVideo)`
  font-size: 150px;
`;
export const FileUploadContent = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 98%;
  height: 98%;
  object-fit: contain;
`;

export const PreviewVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
