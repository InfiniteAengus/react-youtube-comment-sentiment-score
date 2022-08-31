import { AppBar, Container, LinearProgress } from '@mui/material';
import { AppContext } from 'context/AppContext';
import React, { useContext } from 'react';

const Header = () => {
  const [progress] = useContext(AppContext);
  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        opacity: '.8',
        backdropFilter: 'blur(5px)',
        position: 'sticky',
      }}
      elevation={3}
    >
      {/* {progress} */}
      {progress !== 0 && progress !== 100 && (
        <LinearProgress
          variant='determinate'
          value={progress}
          sx={{
            position: 'absolute',
            width: '100vw',
            left: '0',
            top: '0',
            zIndex: '1101',
          }}
        />
      )}

      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <img src='/images/logo.png' alt='logo' />
      </Container>
    </AppBar>
  );
};

export default Header;
