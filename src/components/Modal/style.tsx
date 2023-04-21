import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContent = styled.div`
  background-color: white;
  width: 400px;
  height: 500px;
  padding: 20px;
`;
export const PostContent = styled.div`
  background-color: white;
  width: 800px;
  height: 500px;
  padding: 20px;
`;
export const CreateContent = styled.div`
  background-color: white;
  width: 500px;
  height: 500px;
  padding: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
