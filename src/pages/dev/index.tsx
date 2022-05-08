import MainLayout from '@/components/Layout/MainLayout';
import Image from 'next/image';
import codingImg from '@/assets/images/coding.jpeg';
import { APP_CONFIGS } from '@/configs/app';

export async function getServerSideProps(){
  return {
    props: {},
  }
}
function DevPage() {
  return (
    <div className="p-4">
      <div className=" block md:flex py-4">
        <div style={{ width: '100%', height: 400 }} className="relative">
          <Image
            layout="fill"
            objectFit="contain"
            src={codingImg}
            alt="coding...."
            placeholder="blur"
            blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
            loading="lazy"
          />
        </div>
        <div>
          <span>Nơi take note lại những kiến thức mà mình đã được học và đã áp dụng</span>{' '}
          <br />
          <span>Note dòi mà lười call api quá, thôi để sau 🥱</span> <br />
          <span>Coding là dễ :))</span>
        </div>
      </div>
    </div>
  );
}

DevPage.Layout = MainLayout;
export default DevPage;
