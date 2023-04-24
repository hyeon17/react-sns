import { modalType } from '@/types/modal';
import { useStore } from '../../store/store';
import * as S from './style';
import { Helmet } from 'react-helmet-async';

function PostModal({ content }: modalType) {
  const { closeModal } = useStore();

  return (
    <S.ModalWrapper>
      <Helmet>
        <title>새 게시물 만들기 · Photogram </title>
      </Helmet>
      <S.Content>
        <S.Header>
          <S.CloseButton onClick={closeModal} />
          <S.Title>새 게시물 만들기</S.Title>
          <S.PostButton>공유하기</S.PostButton>
        </S.Header>
        {content}
      </S.Content>
    </S.ModalWrapper>
  );
}

export default PostModal;
