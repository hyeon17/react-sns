import { modalType } from '@/types/modal';
import { useStore } from '../../store/store';

import * as S from './style';

function BasicModal({ content }: modalType) {

  const { closeModal } = useStore();

  return (
    <S.ModalWrapper>
      <S.Content>{content}</S.Content>
      <S.CloseButton onClick={closeModal} />
    </S.ModalWrapper>
  );
}

export default BasicModal;
