import { modalType } from '@/types/modal';
import { useStore } from '../../store/store';

import * as S from './style';
import { useEffect } from 'react';

function BasicModal({ contents }: Omit<modalType, 'mutate'>) {

  const { openModal, closeModal, getIsModalOpen } = useStore();

  return (
    <S.ModalWrapper isModalOpen={getIsModalOpen()}>
      <S.Content>{contents}</S.Content>
      <S.CloseButton onClick={closeModal} />
    </S.ModalWrapper>
  );
}

export default BasicModal;
