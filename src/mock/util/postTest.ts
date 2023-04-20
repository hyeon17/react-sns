import { ExcludeBaseEntity, Post, User } from "@/types/entity";
import { mockUserList } from "./userTest";

export const mockPostList: Post[] = [
  {
    id: 1,
    content: "content1",
    files: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
    author: {
      id: mockUserList[0].id,
      email: mockUserList[0].email,
      username: mockUserList[0].username,
      profile: mockUserList[0].profile,
    } as User,
    likes: [],
    createdAt: "2023-04-20T09:03:09.566Z",
    updatedAt: "2023-04-20T09:03:09.566Z",
  },
  {
    id: 2,
    content: "content2",
    files: ["https://picsum.photos/200/300"],
    author: {
      id: mockUserList[1].id,
      email: mockUserList[1].email,
      username: mockUserList[1].username,
      profile: mockUserList[1].profile,
    } as User,
    likes: [],
    createdAt: "2023-04-20T09:03:09.566Z",
    updatedAt: "2023-04-20T09:03:09.566Z",
  },
];

export function createMockPost({
  content,
  files,
  author,
  likes,
}: ExcludeBaseEntity<Post>) {
  const id = mockPostList.length + 1;

  const date = new Date();

  const post: Post = {
    id,
    content,
    files,
    author,
    likes,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  };

  mockPostList.push(post);

  return post;
}
