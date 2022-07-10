import { APP_CONFIGS } from '@/configs/app';

function Footer() {
  return (
    <div className="tw-flex dark:tw-text-slate-400 dark:tw-bg-slate-800  tw-w-full tw-h-16 tw-items-center tw-justify-center tw-bg-gray-100 tw-text-slate-700">
      &copy; Created by bngoc - {APP_CONFIGS.APP_VERSION}
    </div>
  );
}

export default Footer;
