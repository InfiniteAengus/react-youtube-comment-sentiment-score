import React, { useState, useRef } from 'react';
import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material';

import CommentItem from 'components/CommentItem';
import { apiGetComments, apiGetSentimentScore, apiGetVideo } from 'utils/api';
import VideoCard from 'components/VideoCard';

interface CommentsSectionProps {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const CommentsSection = React.memo(({ setProgress }: CommentsSectionProps) => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [videoInfo, setVideoInfo] = useState<any>({});
  const inputRef = useRef<HTMLInputElement>(null);

  const handleGetSentimentScore = async (items: any[]) => {
    let fetchedCount = 0;
    const newComments = await Promise.all(
      items.map(async (item: any, index: number) => {
        const score = await apiGetSentimentScore(
          item.snippet.topLevelComment.snippet.textDisplay
        );
        setProgress((++fetchedCount * 100) / items.length);
        return { ...item, sentimentScore: score };
      })
    );
    newComments.sort((a, b) => a.sentimentScore.score - b.sentimentScore.score);
    return newComments;
  };

  const handleGetComments = async () => {
    const videoId = inputRef.current?.value;

    setLoading(true);

    try {
      const videoInfoRes: any = await apiGetVideo(videoId);

      if (videoInfoRes) {
        setVideoInfo(videoInfoRes);
      }

      const res: any = await apiGetComments(videoId);

      if (res && res.items) {
        const newComments = await handleGetSentimentScore(res.items);
        setComments(newComments);
      }

      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <TextField size='small' label='Video Id' inputRef={inputRef} />
            <Button
              variant='contained'
              onClick={handleGetComments}
              sx={{ position: 'relative', marginLeft: '10px' }}
              disabled={loading}
            >
              Get
              {loading && (
                <CircularProgress size={20} sx={{ position: 'absolute' }} />
              )}
            </Button>
          </Box>

          <VideoCard
            title={videoInfo?.title}
            description={videoInfo?.description}
            imageUrl={videoInfo?.thumbnails?.high.url}
            videoId={videoInfo?.id}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            sx={{
              maxHeight: 'calc(100vh - 160px)',
              overflow: 'auto',
              boxSizing: 'border-box',
              padding: '20px',
            }}
          >
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
                  key={comment.id}
                  authorDisplayName={authorDisplayName}
                  authorProfileImageUrl={authorProfileImageUrl}
                  textDisplay={textDisplay}
                  updatedDate={updatedAt}
                  totalReplyCount={totalReplyCount}
                  sentimentScore={comment.sentimentScore}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export default CommentsSection;
