import bookImage from '@/assets/images/bg-content-page.jpg';
import Image from 'next/image';
import { CardItemProps } from './types';
import dayjs from 'dayjs';
import { APP_CONFIGS } from '@/configs/app';

function CardItem(props: CardItemProps) {
  const { data, handleRedirectToDetail } = props;
  const currDate = Date.now();
  const converCurrDate = dayjs(currDate).format('DD/MM/YYYY');
  const dateCreate = dayjs(data?.properties?.time?.created_time ?? 0).unix();
  const updatedAt = dayjs(data?.properties?.updated_at?.last_edited_time ?? 0).unix();

  return (
    <div
      onClick={() => handleRedirectToDetail(data?.id)}
      className="hover:tw-cursor-pointer"
      style={{
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <div
        style={{ width: '100%', height: 300 }}
        className="tw-relative hover:tw-opacity-70"
      >
        <Image
          layout="fill"
          objectFit="cover"
          src={data?.properties?.image?.files[0]?.file?.url ?? bookImage}
          alt="img...."
          placeholder="blur"
          blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
          className="tw-rounded-xl"
        />
      </div>
      <div className="tw-p-4 ">
        <span className="tw-text-lg tw-text-slate-700 tw-font-semibold dark:tw-text-slate-400">
          {data?.properties?.title?.rich_text[0]?.plain_text ?? ''}
        </span>{' '}
        <br />
        <span className="tw-text-xs tw-text-slate-600 dark:tw-text-slate-500">
          Created at: {dayjs(dateCreate * 1000).format('DD/MM/YYYY') ?? converCurrDate} -
          Updated at: {dayjs(updatedAt * 1000).format('DD/MM/YYYY') ?? converCurrDate}
        </span>{' '}
        <br />
        <div className="tw-flex">
          {data?.properties?.tags?.multi_select?.map((item) => {
            return (
              <div key={item.id} className={`tw-bg-${item.color}-200 tw-mr-4`}>
                <span
                  style={{ color: item.color }}
                  className={`tw-text-sm tw-overflow-hidden tw-break-words `}
                >
                  {item.name}{' '}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
