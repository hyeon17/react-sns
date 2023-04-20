export interface User extends BaseEntity {
  username: string;
  email: string;
  password: string;
  profile?: string;
  posts: Post[];
  likes: Like[];
}

export interface Post extends BaseEntity {
  content: string;
  files: string[];
  author: User;
  likes: Like[];
}

export interface Comment extends BaseEntity {
  content: string;
  post: Post;
  author: User;
}

export interface Like extends BaseEntity {
  user: User;
  post: Post;
}

export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type ExcludeBaseEntity<T extends User | Post | Comment> = Omit<
  T,
  keyof BaseEntity
>;
