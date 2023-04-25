import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { ModalState } from '@/store/store';

export const ModalWrapper = styled.div<ModalState>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  overflow: ${(props) => (props.isModalOpen ? 'hidden' : 'auto')};
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
`;

export const Content = styled.div`
  background-color: white;
  padding: 20px;
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
