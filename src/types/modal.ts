

/**content: 노드 */
export interface modalType {
  contents: React.ReactNode;
  mutate: (data: PostForm) => void;
}

export interface PostForm {
  content: FormDataEntryValue;
  files: FormDataEntryValue;
}

export interface CommentForm {
  postId: number;
  content: FormDataEntryValue;
}