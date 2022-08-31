import { AppContextProvider } from 'context/AppContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from 'routes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AppRoutes />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
