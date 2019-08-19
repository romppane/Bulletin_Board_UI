import { CommentType } from '../Types';

export const fetchUser = (id: number) => {
  return fetch(`http://localhost:3001/users/${id}`).then(responce => responce.json());
};

export const fetchPost = (id: string) => {
  return fetch(`http://localhost:3001/posts/${id}`).then(response => response.json());
};

export const postComment = (comment: CommentType) => {
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
