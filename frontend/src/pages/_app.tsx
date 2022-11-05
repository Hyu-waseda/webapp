import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement<any, any> =>  {
  return <Component {...pageProps} />;
};

export default MyApp;
