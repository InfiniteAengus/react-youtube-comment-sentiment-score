import React, { useState } from 'react';
const AppContext = React.createContext<any[]>([]);

const AppContextProvider = (props: any) => {
  const { children } = props;
  const [progress, setProgress] = useState(0);

  const value = React.useMemo(() => [progress, setProgress], [progress]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
