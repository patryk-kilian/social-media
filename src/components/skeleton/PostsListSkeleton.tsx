import PostSkeleton from './PostSkeleton';

function PostsListSkeleton() {
  return (
    <>
      {[...Array(4)].map((el, i) => {
        return <PostSkeleton key={i} />;
      })}
    </>
  );
}

export default PostsListSkeleton;
