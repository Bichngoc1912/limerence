import { Listbox } from '@headlessui/react';
import { DesktopComputerIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { THEME_MODE, useThemeMode } from '@/hooks/useThemeMode';
import { ThemeModeSelectPropsInterface } from './types';
import clsx from 'clsx';
import { Fragment } from 'react';

const themeModeList = [
  {
    value: THEME_MODE.LIGHT,
    label: 'Sáng',
    icon: SunIcon,
  },
  {
    value: THEME_MODE.DARK,
    label: 'Tối',
    icon: MoonIcon,
  },
  {
    value: THEME_MODE.SYSTEM,
    label: 'Hệ thống',
    icon: DesktopComputerIcon,
  },
];

export function ThemeModeSelect(props: ThemeModeSelectPropsInterface) {
  const { className } = props;
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <div className={clsx('tw-relative', className)}>
      <Listbox value={themeMode} onChange={setThemeMode}>
        <Listbox.Button
          className={clsx(
            'tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center hover:tw-text-sky-600',
          )}
        >
          <span className="dark:tw-hidden">
            <SunIcon className="tw-h-5 tw-w-5" />
          </span>

          <span className="tw-hidden dark:tw-inline">
            <MoonIcon className="tw-h-5 tw-w-5" />
          </span>
        </Listbox.Button>

        <Listbox.Options className="tw-absolute tw-z-20 tw-top-full -tw-right-1 tw-mt-5 tw-bg-white tw-rounded-lg tw-ring-1 tw-ring-slate-900/10 tw-shadow-lg tw-overflow-hidden tw-w-36 tw-py-1 tw-text-sm dark:tw-bg-slate-800 dark:tw-ring-slate-700/90">
          {themeModeList.map((modeItem) => {
            return (
              <Listbox.Option key={modeItem.value} value={modeItem.value} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={clsx(
                      'tw-text-sm tw-py-1.5 tw-px-3 tw-flex tw-items-center tw-cursor-pointer',
                      {
                        'tw-text-sky-600': selected,
                        'tw-bg-sky-50': selected && active,
                        'tw-bg-gray-50 dark:tw-bg-slate-700': active,
                      },
                    )}
                  >
                    <modeItem.icon
                      className={clsx('tw-w-5 tw-h-5 tw-mr-2 tw-text-slate-400 dark:tw-text-slate-500', {
                        'tw-text-sky-600 dark:tw-text-sky-600': selected,
                      })}
                    />
                    {modeItem.label}
                  </li>
                )}
              </Listbox.Option>
            );
          })}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}