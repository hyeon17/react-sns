import { Comment, Post, User } from './entity';

export type LoginRequest = Pick<User, 'email' | 'password'>;

export type SignupRequest = Pick<User, 'email' | 'password' | 'username'> & {
  profile?: File;
};

export type CreatePostRequest = Pick<Post, 'content'> & {
  files: File[];
};

export type UpdatePostRequest = Pick<Post, 'content'> & {
  files: File[];
};

export type CreateCommentRequest = Pick<Comment, 'id' | 'content'>;

export type UpdateCommentRequest = Pick<Comment, 'content'>;
