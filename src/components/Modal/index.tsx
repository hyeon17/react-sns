import { useStore } from '../../store/useStore';
import { modalType } from '@/types/modal';
import * as S from './style';

function Modal({ isLogin, isPost, content }: modalType) {
  const { closeModal } = useStore();

  return (
    <S.ModalWrapper>
      <S.CloseButton onClick={closeModal}>X</S.CloseButton>
      {!isLogin ? (
        <S.LoginContent>{content}</S.LoginContent>
      ) : isPost ? (
        <S.CreateContent>{content}</S.CreateContent>
      ) : (
        <S.PostContent>{content}</S.PostContent>
      )}
    </S.ModalWrapper>
  );
}

export default Modal;
