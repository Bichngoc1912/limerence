import Image from 'next/image';
import aboutImg from '@/assets/images/avatar.jpg';
import EmptyLayout from '@/components/Layout/EmptyLayout';
import { APP_CONFIGS } from '@/configs/app';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function AboutPage(props: any) {
  return (
    <div className="tw-grid tw-py-4 tw-grid-cols-48">
      <div className="relative">
        <Image
          objectFit="contain"
          src={aboutImg}
          alt="avatar img..."
          blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className="tw-p-4 tw-w-1/2 tw-flex tw-items-center tw-content-center tw-justify-center">
        <span>...nothing...</span>
      </div>
    </div>
  );
}

AboutPage.Layout = EmptyLayout;

export default AboutPage;
