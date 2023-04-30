import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useStore } from "@/store/store";
import * as S from './style'
import { deletePost } from "@/api/post";
import { useParams } from "react-router-dom";

function PostDeleteButton({id}: {id: number}) {
  const { closeModal } = useStore();
  const params = useParams()
  const queryClient = useQueryClient()
  const { mutate } = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts', params.user])
      alert('삭제되었습니다.');
      closeModal();
    }
  })
  return (
    <S.PostDeleteIcon onClick={() => mutate(id)} />
  )
}

export default PostDeleteButton