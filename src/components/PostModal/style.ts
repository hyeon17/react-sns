import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { theme } from '../../styles/theme';

export const ModalWrapper = styled.form`
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
  padding-top: 20px;
  height: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

export const CloseButton = styled(BiArrowBack)`
  font-size: 20px;
  padding-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 1000px;
  border-bottom: 1px solid ${theme.colors.dimGray};
`;

export const PostButton = styled.button`
  color: ${theme.colors.instaSky};
  border: transparent;
  background-color: transparent;
  display: flex;
  align-items: start;
  cursor: pointer;
  margin-top: -5px;
  font-weight: bold;
  padding-right: 20px;
`;
