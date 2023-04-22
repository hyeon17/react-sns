import { modalType } from '@/types/modal';
import * as S from './style';

function BasicModal({ content }: modalType) {

  return (
    <S.ModalWrapper>
        <S.Content>{content}</S.Content> 
    </S.ModalWrapper>
  );
}

export default BasicModal;
