import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/common';
import { createEmotionCache } from '@/helpers/emotionCachedHelper';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout;

  return (
    <>
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
    </>
  );
}

export default MyApp;
