export enum Categories {
  Default = 'default',
  Other = 'other'
}

export type Post = {
  title: string;
  category: Categories;
  message: string;
  username: string;
  id: number;
  ownerId: number;
  views: number;
};

export type Comment = {
  message: string;
  username: string;
  id: number;
  userId: number;
  postId: number;
};

export type User = {
  id: number;
  avatar: string;
};
