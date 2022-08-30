import { Route, Routes } from 'react-router-dom';

import Homepage from 'pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default AppRoutes;
