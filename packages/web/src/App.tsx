import React from 'react';
import api from '@monorepo/axios-config';

const App = () => {
  api.get('https://gorest.co.in/public/v2/users').then(console.log);
  return <h1>Hello World</h1>;
};

export default App;
