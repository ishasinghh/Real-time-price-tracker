import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import store from '../store';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
