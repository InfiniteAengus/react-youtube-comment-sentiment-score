import { Box, Avatar, Typography, Rating } from '@mui/material';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import SentimentIcon from './SentimentIcon';

interface FlexProps {
  sx: object;
  children: React.ReactNode;
}

const Flex = (props: FlexProps) => (
  <Box sx={{ display: 'flex', ...props.sx, gap: '5px' }}>{props.children}</Box>
);

interface CommentProps {
  authorDisplayName: string;
  authorProfileImageUrl: string;
  textDisplay: string;
  updatedDate: string;
  totalReplyCount: number;
  sentimentScore: {
    magnitude: number;
    score: number;
  };
}

const CommentItem = (props: CommentProps) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textDisplay,
    updatedDate,
    totalReplyCount,
    sentimentScore,
  } = props;
  return (
    <Box
      sx={{
        margin: '10px 0px',
        padding: '20px',
        border: '2px solid rgba(100, 100, 100, .3)',
        borderRadius: 2,
        transition: 'all 0.2s ease',
        '&: hover': {
          borderColor: '#3AD6A4',
        },
      }}
    >
      <Flex
        sx={{
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Avatar src={authorProfileImageUrl} />
        <Flex sx={{ flexDirection: 'column', marginLeft: '10px' }}>
          <Typography sx={{ fontWeight: 'bold' }}>
            {authorDisplayName}
          </Typography>
          <Typography variant='subtitle2'>{updatedDate}</Typography>
        </Flex>
        <Flex
          sx={{
            marginLeft: 'auto',
            marginRight: { xs: 'auto', sm: 'unset' },
            flexDirection: 'column',
            alignItems: { xs: 'center', sm: 'flex-end' },
          }}
        >
          <Flex sx={{ alignItems: 'center' }}>
            <Rating
              size='small'
              value={(sentimentScore.score + 1) * 5}
              precision={0.1}
              readOnly
              max={10}
            />
            <SentimentIcon {...sentimentScore} />
          </Flex>
          <Flex sx={{ alignItems: 'center' }}>
            <MarkChatUnreadOutlinedIcon fontSize='small' color='primary' />
            <Typography variant='subtitle2' fontWeight={'bold'}>
              {totalReplyCount}
            </Typography>
          </Flex>
        </Flex>
      </Flex>
      <Typography variant='body2' sx={{ marginTop: 3 }}>
        {textDisplay}
      </Typography>
    </Box>
  );
};

export default CommentItem;
