import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { ModalState } from '@/store/store';
import { theme } from '../../styles/theme';

export const ModalWrapper = styled.div<Pick<ModalState, 'isModalOpen'>>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.dimGray};
  justify-content: center;
  align-items: center;
  z-index: 100;
  display: ${(props) => (props.isModalOpen ? 'flex' : 'none')};
`;

export const Content = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
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
