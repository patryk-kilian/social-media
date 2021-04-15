import CommentSkeleton from './CommentSkeleton';

function CommentsSkeleton() {
  return (
    <>
      {[...Array(4)].map((el, i) => {
        return <CommentSkeleton key={i} />;
      })}
    </>
  );
}

export default CommentsSkeleton;
