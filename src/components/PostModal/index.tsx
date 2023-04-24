import { modalType } from '@/types/modal';
import { FaPhotoVideo } from 'react-icons/fa';
import { useStore } from '../../store/store';

import * as S from './style';

function PostModal() {

  const { closeModal } = useStore();

  return (
    <S.ModalWrapper>
      <S.Content>
        <S.CloseButton onClick={closeModal} />
        <S.Header>
          <S.Title>새 게시물 만들기</S.Title>
          <S.PostButton>게시 버튼</S.PostButton>
        </S.Header>
        <div>
          <div>
            <FaPhotoVideo />
            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
            <button>사진/동영상 추가</button>
          </div>
          <div>
            <div>게시물에 대해 설명해보세요...</div>
          </div>
        </div>
      </S.Content>
    </S.ModalWrapper>
  );
}

export default PostModal;
