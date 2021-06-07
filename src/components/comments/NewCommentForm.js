import { useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from '../../hooks/use-http'
import { addComment } from '../../lib/api'
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { sendRequest, status, error } = useHttp(addComment)
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    sendRequest({
      commentData: { text: commentTextRef.current.value }
      , quoteId: props.quoteId
    }
    )
  };

  const { onaddedComments } = props
  useEffect(() => {
    if (status == 'completed' && !error) {
      onaddedComments()
    }
  }, [onaddedComments, status, error])
  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
