import React, { useContext, useState, useRef } from 'react';
import { Button, TextField } from '@mui/material';
import CommentItem from 'components/CommentItem';

import { AppContext } from 'context/AppContext';
import { apiGetComments, apiGetSentimentScore } from 'utils/api';

const Homepage = () => {
  const [, setProgress] = useContext(AppContext);
  const [comments, setComments] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGetComments = async () => {
    const videoId = inputRef.current?.value;

    const res: any = await apiGetComments(videoId);

    if (res && res.items) {
      let temp = [];
      for (let i = 0; i < res.items.length; i++) {
        const item = res.items[i];
        const score = await apiGetSentimentScore(
          item.snippet.topLevelComment.snippet.textDisplay
        );
        temp.push({ ...item, sentimentScore: score });
        setProgress((100 * (i + 1)) / res.items.length);
      }
      temp.sort(
        (a, b) => a.sentimentScore.score - b.sentimentScore.score
      );
      setComments(temp);
    }
  };

  return (
    <>
      <TextField size='small' label='Video Id' inputRef={inputRef} />
      <Button variant='contained' onClick={handleGetComments}>
        Get
      </Button>
      {comments.map((comment) => {
        const { snippet } = comment;
        const {
          textDisplay,
          authorDisplayName,
          authorProfileImageUrl,
          updatedAt,
        } = snippet.topLevelComment.snippet;
        const { totalReplyCount } = snippet;

        return (
          <CommentItem
            authorDisplayName={authorDisplayName}
            authorProfileImageUrl={authorProfileImageUrl}
            textDisplay={textDisplay}
            updatedDate={updatedAt}
            totalReplyCount={totalReplyCount}
            sentimentScore={comment.sentimentScore}
          />
        );
      })}
    </>
  );
};

export default Homepage;
