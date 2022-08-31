import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface VideoCardProps {
  imageUrl: string;
  title: string;
  description: string;
  videoId: string;
}

const VideoCard = (props: VideoCardProps) => {
  const { imageUrl, title, description, videoId } = props;

  const handleOpenVideo = () => {
    window.open(`https://youtu.be/${videoId}`, '_blank');
  };

  return (
    <Card
      sx={{ maxWidth: '350px', width: '100%' }}
      elevation={4}
      onClick={() => handleOpenVideo()}
    >
      <CardMedia
        component='img'
        sx={
          {
            // width: videoInfo?.thumbnails?.high.width + 'px',
            // height: videoInfo?.thumbnails?.high.height + 'px',
          }
        }
        image={
          imageUrl ??
          'https://pdtxar.com/wp-content/uploads/2019/11/video-placeholder-1280x720-40-768x433.jpg'
        }
      />
      <CardContent>
        <Typography
          variant='body1'
          fontWeight='bold'
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title ?? 'Video Title'}
        </Typography>
        <Typography
          variant='body2'
          sx={{
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description ?? 'Description'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
