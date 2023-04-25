import { modalType } from '@/types/modal';
import { useStore } from '../../store/store';

import * as S from './style';

function BasicModal({ content }: modalType) {

   const { openModal, closeModal, isModalOpen } = useStore();

  return (
    <S.ModalWrapper openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen}>
      <S.Content>{content}</S.Content>
      <S.CloseButton onClick={closeModal} />
    </S.ModalWrapper>
  );
}

export default BasicModal;
