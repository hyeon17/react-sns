import { modalType } from '@/types/modal';
import { useStore } from '../../store/store';
import * as S from './style';
import { Helmet } from 'react-helmet-async';
import React, { useState } from 'react';


function PostModal({ contents, mutate }: modalType) {
  const { closePostModal, getIsPostModalOpen } = useStore();
  const [text, setText] = useState<string>('');
  const [backspacePressed, setBackspacePressed] = useState<boolean>(false); // backspace 버튼 눌린 여부 저장
  const MAX_LENGTH: number = 1000;

  // 글자 수 입력 제한
  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue: string = event.target.value;
    if (inputValue.length <= MAX_LENGTH) {
      setText(inputValue);
    }
  };

  // 글자 붙여넣기 시 입력 제한
  const pasteHandle = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const paste: string = event.clipboardData.getData('text');
    const maxLength: number = MAX_LENGTH - text.length; // 현재 입력된 글자를 제외한 최대 글자수 계산
    if (paste.length > maxLength) {
      // 붙여넣기된 글자수가 최대 글자수를 초과하면 붙여넣기된 글자를 최대 글자수까지 자르기
      const truncatedPaste: string = paste.substring(0, maxLength);
      // 자른 글자를 입력란에 입력하기
      navigator.clipboard
        .writeText(truncatedPaste)
        .then(() => {
          return navigator.clipboard.readText();
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
      // 이벤트 전파 중단
      event.preventDefault();
    }
  };

  // 백스페이스 버튼 눌린 경우 글자 수 제한
  const backSpace = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Backspace') {
      setBackspacePressed(true); // backspace 버튼 눌렸음을 저장
    }

    if (!backspacePressed && text.length >= MAX_LENGTH) {
      event.preventDefault();
    } else {
      setBackspacePressed(false); // backspace 버튼 눌린 여부 초기화
    }
  };

  // 글자 수 세기
  const CountTexts = (text: string) => {
    return text.length;
  };
  const count: number = CountTexts(text);

  const PostButton = async (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.preventDefault();

    const selectedFile = (contents as React.ReactElement<{ selectedFile: File }>).props.selectedFile;
    if (text.length === 0) {
      alert('게시물에 대해 설명해주세요.');
      return;
    }
    if (selectedFile === undefined) {
      alert('사진 또는 동영상을 선택해주세요');
      return;
    }
    const formData = new FormData();
    formData.append('content', text);
    formData.append('files', selectedFile);
    mutate({ content: formData.get('content')!, files: formData.get('files')! });
    closePostModal();
    alert('게시물이 등록되었습니다.');
  };

  return (
    <S.ModalWrapper isModalOpen={getIsPostModalOpen()}>
      <Helmet>
        <title>새 게시물 만들기 · Photogram </title>
      </Helmet>
      <S.Content>
        <S.Header>
          <S.CloseButton onClick={closePostModal} />
          <S.Title>새 게시물 만들기</S.Title>
          <S.PostButton onClick={PostButton}>공유하기</S.PostButton>
        </S.Header>
        <S.PostPageWrapper>
          {contents}
          <S.Post>
            <S.PostContent
              placeholder='게시물에 대해 설명해보세요...'
              onChange={textChange}
              onKeyDown={backSpace}
              onPaste={pasteHandle}
              value={text}
            ></S.PostContent>
            <S.WordNumber>
              {count}/{MAX_LENGTH}
            </S.WordNumber>
          </S.Post>
        </S.PostPageWrapper>
      </S.Content>
    </S.ModalWrapper>
  );
}

export default PostModal;
