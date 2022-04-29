import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/common';
import { createEmotionCache } from '@/helpers/emotionCachedHelper';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
