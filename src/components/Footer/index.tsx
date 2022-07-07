import { APP_CONFIGS } from '@/configs/app';

function Footer() {
  return (
    <div className="tw-flex tw-w-full tw-h-16 tw-items-center tw-justify-center tw-bg-gray-100">
      &copy; Created by Ngọt Ngọt - {APP_CONFIGS.APP_VERSION}
    </div>
  );
}

export default Footer;
