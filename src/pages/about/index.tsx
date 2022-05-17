import Image from 'next/image';
import aboutImg from '@/assets/images/avatar.jpg';
import MainLayout from '@/components/Layout/MainLayout';
import { APP_CONFIGS } from '@/configs/app';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function AboutPage(props: any) {
  return (
    <div className="flex py-4">
      <div style={{ width: '50%', height: 200 }} className="relative">
        <Image
          layout="fill"
          objectFit="contain"
          src={aboutImg}
          alt="avatar img..."
          blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className="p-4 w-1/2 flex items-center content-center justify-center">
        <span>...nothing...</span>
      </div>
    </div>
  );
}

AboutPage.Layout = MainLayout;

export default AboutPage;
