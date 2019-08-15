export type PostType = {
  title: string;
  category: string;
  message: string;
  id: number;
  ownerId: number;
  views: number;
};

export type CommentType = {
  message: string;
  id: number;
  userId: number;
  postId: number;
};
