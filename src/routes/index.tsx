import { Route, Routes } from 'react-router-dom';

import Homepage from 'pages/home';
import MainLayout from 'layouts/MainLayout';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3AD6A4',
    },
    secondary: {
      main: '#FFB900',
    },
  },
});

const AppRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};

export default AppRoutes;
