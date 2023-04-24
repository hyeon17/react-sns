import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { FaPhotoVideo } from 'react-icons/fa';
import { theme } from '../../styles/theme';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.dimGray};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Content = styled.div`
  background-color: ${theme.colors.white};
  padding: 20px;
  height: 700px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 650px;
`;

export const PostButton = styled.button`
  color: ${theme.colors.darkSky};
  border: transparent;
  background-color: transparent;
`;




