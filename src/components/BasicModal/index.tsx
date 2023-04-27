import { modalType } from '@/types/modal';
import { useStore } from '../../store/store';

import * as S from './style';
import { useEffect } from 'react';

function BasicModal({ contents }: modalType) {

  const { openModal, closeModal, getIsModalOpen } = useStore();

  return (
    <S.ModalWrapper>
      <S.Content>{content}</S.Content>
      <S.CloseButton onClick={closeModal} />
    </S.ModalWrapper>
  );
}

export default BasicModal;
