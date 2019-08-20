import { Comment, Post, Categories } from '../Types';

export const fetchUser = async (id: number) => {
  const responce = await fetch(`http://localhost:3001/users/${id}`).then(res => res.json());
  return responce;
};

export const fetchPost = async (id: string) => {
  const responce = await fetch(`http://localhost:3001/posts/${id}`).then(res => res.json());
  return responce;
};

export const createComment = (comment: Comment) => {
  return fetch('http://localhost:3001/comments', {
    method: 'POST',
    body: JSON.stringify({
      userId: comment.userId,
      postId: comment.postId,
      message: comment.message
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const createPost = (post: Post) => {
  return fetch('http://localhost:3001/posts', {
    method: 'POST',
    body: JSON.stringify({
      ownerId: post.ownerId,
      title: post.title,
      message: post.message,
      category: Categories.Default
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const fetchComments = async (id: number) => {
  const responce = await fetch(`http://localhost:3001/posts/${id}/comments`).then(res =>
    res.json()
  );
  return responce;
};

export const fetchPosts = async () => {
  const responce = await fetch('http://localhost:3001/posts').then(res => res.json());
  return responce;
};
