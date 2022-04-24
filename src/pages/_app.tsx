import '@@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/common';
import { createEmotionCache } from '@/helpers/emotionCachedHelper';
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout) {
  const Layout = Component.Layout;
  return (
    <CacheProvider value={emotionCache}>
      <Layout>
        <Component> {...pageProps}</Component>
      </Layout>
    </CacheProvider>
  );
}

export default MyApp;
