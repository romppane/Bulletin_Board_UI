import { Comment } from '../Types';

export const fetchUser = async (id: number) => {
  const responce = await fetch(`http://localhost:3001/users/${id}`).then(res => res.json());
  return responce;
};

export const fetchPost = async (id: string) => {
  const responce = await fetch(`http://localhost:3001/posts/${id}`).then(res => res.json());
  return responce;
};

export const postComment = (comment: Comment) => {
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
  }).catch(error => {
    console.log(error);
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
