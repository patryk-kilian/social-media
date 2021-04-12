export type userTypes = {
  dateCreated: number;
  emailAdress: string;
  followers: string[];
  following: string[];
  userId: string;
  username: string;
  docId: string;
  pictureUrl?: string;
  fullname?: string;
}

export type postTypes = {
  postId: string;
  userId: string;
  postText: string;
  likes: [];
  comments: [];
  dateCreated: number;
  userAvatar: string | undefined;
  username: string
}