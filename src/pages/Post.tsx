import PostModal from '@/components/PostModal';
import React, { useState, useEffect, useMemo } from 'react';
import * as S from '../styles/postPageStyle';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostForm } from '../types/modal';
import { postMutation } from '@/api/post';

function Post() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(({ content, files }: PostForm) => postMutation({ content, files }), {
    onSuccess: () => {
      // queryClient.invalidateQueries([`posts/${userName}`]);
      console.log('게시물 작성 성공');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const dropFile = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles: File = event.dataTransfer.files?.[0];
    setSelectedFile(newFiles);
  };

  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles: File | undefined = event.target.files?.[0];
    setSelectedFile(newFiles);
  };
  // 컴포넌트가 언마운트될 때 선택한 파일 해제
  useEffect(() => {
    const BeforeUnload = () => {
      if (selectedFile) {
        setSelectedFile(undefined);
      }
    };
    window.addEventListener('beforeunload', BeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', BeforeUnload);
    };
  }, [selectedFile]);

  const PostPage = React.memo(({ selectedFile }: { selectedFile: File | undefined }) => (
    <S.FileUploadContent onDrop={dropFile} onDragOver={(e) => e.preventDefault()}>
      {selectedFile ? (
        <S.Preview>
          {selectedFile && selectedFile.type === 'image/png' && <S.PreviewImage src={URL.createObjectURL(selectedFile)} />}
          {selectedFile && selectedFile.type === 'video/mp4' && (
            <S.PreviewVideo src={URL.createObjectURL(selectedFile)} controls autoPlay loop muted />
          )}
          {selectedFile && selectedFile.type === 'image/gif' && <S.PreviewImage src={URL.createObjectURL(selectedFile)} />}
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
  ));

  return (
    <>
      <PostModal contents={<PostPage selectedFile={selectedFile} />} mutate={mutate} />
    </>
  );
}

export default Post;
