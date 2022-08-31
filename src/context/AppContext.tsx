import React from 'react';
const AppContext = React.createContext<any[]>([]);

const AppContextProvider = (props: any) => {
  const { children } = props;
  const [progress, setProgress] = React.useState(0);

  return (
    <AppContext.Provider value={[progress, setProgress]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
