import '@/styles/globals.scss';

import React from 'react';

const App = (props) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default App;
