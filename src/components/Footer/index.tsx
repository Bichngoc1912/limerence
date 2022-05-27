import { APP_CONFIGS } from '@/configs/app';

function Footer() {
  return (
    <div className="flex w-full h-16 items-center justify-center bg-gray-100">
      &copy; Created by Ngọt Ngọt - {APP_CONFIGS.APP_VERSION}
    </div>
  );
}

export default Footer;
