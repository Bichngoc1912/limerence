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
    <div className="tw-grid tw-grid-cols-48 tw-py-4 tw-pl-4">
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
      <div className="tw-p-4 tw-w-1/2  tw-flex tw-items-center tw-content-center tw-justify-center">
        <span className="dark:tw-text-slate-400 tw-text-slate-700">...nothing...</span>
      </div>
    </div>
  );
}

AboutPage.Layout = EmptyLayout;

export default AboutPage;
