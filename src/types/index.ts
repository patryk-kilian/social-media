export type userTypes = {
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

export type postTypes = {
  postId: string;
  userId: string;
  userDocId: string;
  docId?: string;
  postText: string;
  likes: [];
  comments: [];
  dateCreated: number;
  userAvatar: string | undefined;
  username: string
}

export type commentTypes = {
  userId: string;
  commentText: string;
  username: string;
    userAvatar: string | undefined;
  dateCreated: number;
  commentId: string;
  postId?: string;
  docId?: string;
  postDocId?: string;
}