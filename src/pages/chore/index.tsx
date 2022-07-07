import MainLayout from '@/components/Layout/MainLayout';
import Image from 'next/image';
import lazyImage from '@/assets/images/lazy-chore-page.jpeg';
import { APP_CONFIGS } from '@/configs/app';

export async function getServerSideProps() {
  return {
    props: {},
  };
}
function ChorePage() {
  return (
    <div className="tw-text-center tw-p-4">
      <div style={{ width: '100%', height: 200 }} className="tw-relative tw-mb-4">
        <Image
          src={lazyImage}
          layout="fill"
          objectFit="inherit"
          alt="img lazy chore page..."
          placeholder="blur"
          blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
        />
      </div>
      <span>
        Nơi lưu mấy cái quote linh tinh, mấy thứ hay hay mình vợt trên được trên internet
      </span>{' '}
      <br />
      <span>Đang lười chưa có làm 😌</span>
    </div>
  );
}

ChorePage.Layout = MainLayout;
export default ChorePage;
