import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { theme } from '../../styles/theme';
import { ModalState } from '@/store/store';

export const ModalWrapper = styled.form<ModalState>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.dimGray};
  justify-content: center;
  align-items: center;
  overflow: ${(props) => (props.isModalOpen ? 'hidden' : 'auto')};
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
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
  &:hover {
    color: ${theme.colors.black};
  }
`;

export const Post = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid ${theme.colors.dimGray};
  height: 100%;
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

export const WordNumber = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const PostPageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`;
