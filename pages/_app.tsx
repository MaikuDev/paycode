import type { AppProps } from 'next/app';
import { Layout } from '@app/shared/Layout';
import '@app/sass/global.scss';
import '@app/fonts/HelveticaNeue/HelveticaNeue.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
