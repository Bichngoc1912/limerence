import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types/common';
import { createEmotionCache } from '@/helpers/emotionCachedHelper';
import NextNProgress from 'nextjs-progressbar';
import EmptyLayout from '@/components/Layout/EmptyLayout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  
  return (
    <div>
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
