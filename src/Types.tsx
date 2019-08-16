enum Categories {
  Default = 'default',
  Other = 'other'
}

export type PostType = {
  title: string;
  category: Categories;
  message: string;
  id: number;
  ownerId: number;
  views: number;
};

export type CommentType = {
  message: string;
  id?: number;
  userId: number;
  postId: number;
};

export type UserType = {
  id?: number;
  avatar: string;
};
