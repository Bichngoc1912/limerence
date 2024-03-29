import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/common';
import NextNProgress from 'nextjs-progressbar';
import EmptyLayout from '@/components/Layout/EmptyLayout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <NextNProgress
        height={2}
        color="#f57c27"
        options={{
          showSpinner: true,
        }}
      />
    </div>
  );
}

export default MyApp;
