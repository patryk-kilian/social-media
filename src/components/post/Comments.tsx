import { Box } from '@chakra-ui/react';
import useComments from '../../hooks/useComments';
import Comment from './Comment';
import CommentsSkeleton from '../skeleton/CommentsSkeleton';

function Comments({ postId }: { postId: string }) {
  const { data: comments, isLoading } = useComments(postId);

  if (isLoading) return <CommentsSkeleton />;

  return (
    <Box>
      {comments?.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </Box>
  );
}

export default Comments;
