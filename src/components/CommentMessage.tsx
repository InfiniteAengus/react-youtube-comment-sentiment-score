import { Box, Avatar, Typography } from '@mui/material';

interface CommentProps {
  authorDisplayName: string;
  authorProfileImageUrl: string;
  textDisplay: string;
}
const CommentMessage = (props: CommentProps) => {
  const { authorDisplayName, authorProfileImageUrl, textDisplay } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '0',
        flexShrink: '1',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexGrow: '0',
          flexShrink: '1',
        }}
      >
        <Avatar src={authorProfileImageUrl} />
        <Typography sx={{ marginLeft: '10px' }}>{authorDisplayName}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '0',
          flexShrink: '0',
          background: 'gray',
          borderRadius: '0px 10px 10px',
          margin: '-20px auto 0 50px',
          padding: '10px',
        }}
      >
        <Typography textAlign={'right'}>{textDisplay}</Typography>
      </Box>
    </Box>
  );
};

export default CommentMessage;
