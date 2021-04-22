export type UserTypes = {
  dateCreated: number;
  emailAdress: string;
  followers: string[];
  following: string[];
  posts: string[];
  userId: string;
  username: string;
  docId: string;
  pictureUrl?: string;
  fullname?: string;
}

export type PostTypes = {
  postId: string;
  userId: string;
  userDocId: string;
  docId?: string | undefined;
  postText: string;
  likes: [];
  comments: [];
  dateCreated: number;
  userAvatar: string | undefined;
  username: string
}

export type CommentTypes = {
  userId: string;
  commentText: string;
  username: string;
  userAvatar: string | undefined;
  dateCreated: number;
  commentId: string;
  postId?: string;
  docId?: string;
  postDocId: string;
}