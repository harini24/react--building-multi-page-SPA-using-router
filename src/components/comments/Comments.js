import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from "../UI/LoadingSpinner"
import useHttp from '../../hooks/use-http'
import { getAllComments } from '../../lib/api'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentsList from './CommentsList';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments)
  const params = useParams()
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  useEffect(() => {
    sendRequest(params.quoteId)
  }, [params.quoteId])
  console.log(params.quoteId)
  const addedcommenthandler = useCallback(() => {
    sendRequest(params.quoteId)
  }, [])
  let comments;
  if (status === 'pending') {
    comments = <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (status === 'completed' && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />
  }
  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p> No comments were added yet</p>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={params.quoteId} onaddedComments={addedcommenthandler} />}
      {comments}
    </section>
  );
};

export default Comments;
