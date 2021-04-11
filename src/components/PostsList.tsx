import { useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import { focusManager } from 'react-query';
import { userTypes, postTypes } from '../types';

function PostsList({ user }: { user: userTypes }) {
  const { data: posts, isLoading } = usePosts(user.userId, user.following);

  useEffect(() => {
    focusManager.setFocused(true);
  }, [user]);

  if (isLoading) return <div>loading...</div>;
  return (
    <ul>
      {posts?.map((post: postTypes) => (
        <li key={post.postId}>{post.postText}</li>
      ))}
    </ul>
  );
}

export default PostsList;
