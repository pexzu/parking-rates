import React from 'react';
import Home from './common/home/Home';

const App: React.FC = () => {
  return <Home />;
};

export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export default App;
