import PostModal from '@/components/PostModal';
import * as S from '../styles/postPageStyle';
import React, { useState, useMemo, useCallback } from 'react';

function Post() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const [text, setText] = useState<string>('');
  const [backspacePressed, setBackspacePressed] = useState<boolean>(false); // backspace 버튼 눌린 여부 저장

  const MAX_LENGTH: number = 1000;

  const dropFile = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = e.dataTransfer.files?.[0];
    setSelectedFile(newFiles);
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files?.[0];
    setSelectedFile(newFiles);
  };

  const textChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= MAX_LENGTH) {
      setText(inputValue);
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const paste = event.clipboardData.getData('text');
    const maxLength = MAX_LENGTH - text.length; // 현재 입력된 글자를 제외한 최대 글자수 계산
    if (paste.length > maxLength) {
      // 붙여넣기된 글자수가 최대 글자수를 초과하면 붙여넣기된 글자를 최대 글자수까지 자르기
      const truncatedPaste = paste.substring(0, maxLength);
      // 자른 글자를 입력란에 입력하기
      document.execCommand('insertText', false, truncatedPaste);
      // 이벤트 전파 중단
      event.preventDefault();
    }
  };

  const handleBackspace = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Backspace') {
      setBackspacePressed(true); // backspace 버튼 눌렸음을 저장
    }

    if (!backspacePressed && text.length >= MAX_LENGTH) {
      event.preventDefault();
    } else {
      setBackspacePressed(false); // backspace 버튼 눌린 여부 초기화
    }
  };

  const CountTexts = (text: string) => {
    return text.length;
  };
  const count = CountTexts(text);

  const PostPage = (
    <S.PostPageWrapper>
      <S.FileUploadContent onDrop={dropFile} onDragOver={(e) => e.preventDefault()}>
        {selectedFile ? (
          <S.Preview>
            {selectedFile && selectedFile.type === 'image/png' && <S.PreviewImage src={URL.createObjectURL(selectedFile)} />}
            {selectedFile && selectedFile.type === 'video/mp4' && (
              <S.PreviewVideo src={URL.createObjectURL(selectedFile)} controls autoPlay loop muted />
            )}
          </S.Preview>
        ) : (
          <>
            <S.PhotoVideo />
            <S.Description>사진과 동영상을 여기에 끌어다 놓으세요</S.Description>
            <S.UploadButton htmlFor='file'>사진/동영상 선택</S.UploadButton>
            <S.InputFile type='file' id='file' onChange={selectFile} />
          </>
        )}
      </S.FileUploadContent>
      <S.Post>
        <S.PostContent
          placeholder='게시물에 대해 설명해보세요...'
          onChange={textChange}
          onKeyDown={handleBackspace}
          onPaste={handlePaste}
          value={text}
        ></S.PostContent>
        <S.WordNumber>
          {count}/{MAX_LENGTH}
        </S.WordNumber>
      </S.Post>
    </S.PostPageWrapper>
  );

  return (
    <>
      <PostModal content={PostPage} />
    </>
  );
}

export default Post;
