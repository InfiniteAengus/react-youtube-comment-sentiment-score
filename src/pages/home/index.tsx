import React, { useContext } from 'react';

import { AppContext } from 'context/AppContext';
import CommentsSection from './CommentsSection';

const Homepage = () => {
  const [, setProgress] = useContext(AppContext);

  return (
    <CommentsSection setProgress={setProgress} />
  );
};


export default Homepage;
