import { Comment, Post, Categories } from '../Types';

const URL = process.env.URL || 'http://localhost:3001';

export const fetchUser = async (id: number) => {
  const responce = await fetch(`${URL}/v1/users/${id}`).then(res => res.json());
  return responce;
};

export const fetchPost = async (id: string) => {
  const responce = await fetch(`${URL}/v1/posts/${id}`).then(res => res.json());
  return responce;
};

export const createComment = (comment: Comment) => {
  return fetch(`${URL}/v1/comments`, {
    method: 'POST',
    body: JSON.stringify({
      userId: comment.userId,
      postId: comment.postId,
      message: comment.message,
      username: comment.username
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const createPost = (post: Post) => {
  return fetch(`${URL}/v1/posts`, {
    method: 'POST',
    body: JSON.stringify({
      ownerId: post.ownerId,
      title: post.title,
      message: post.message,
      category: Categories.Default,
      username: post.username
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const fetchComments = async (id: string) => {
  const responce = await fetch(`${URL}/v1/posts/${id}/comments`).then(res => res.json());
  return responce;
};

export const fetchPosts = async () => {
  const responce = await fetch(`${URL}/v1/posts`).then(res => res.json());
  return responce;
};
