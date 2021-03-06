import bookImage from '@/assets/images/bg-content-page.jpg';
import Image from 'next/image';
import { BookCardPropsInterface } from './types';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { APP_CONFIGS } from '@/configs/app';
import { generateBookDetailRouter } from '@/services/bussiness/router/generateRouter';

function BookCard(props: BookCardPropsInterface) {
  const router = useRouter();

  const { data } = props;
  const currDate = Date.now();
  const converCurrDate = dayjs(currDate).format('DD/MM/YYYY');
  const dateCreate = dayjs(data?.properties?.time?.created_time ?? 0).unix();

  const handleClickViewDetailBook = (id: string) => {
    const asPath = generateBookDetailRouter({ id: id })?.asPath;
    if (asPath) {
      router.push(asPath);
    }
  };

  return (
    <div
      onClick={() => handleClickViewDetailBook(data?.id)}
      className="tw-bg-zinc-200 hover:tw-cursor-pointer"
      style={{
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <div
        style={{ width: '100%', height: 200 }}
        className="tw-relative hover:tw-opacity-70"
      >
        <Image
          layout="fill"
          objectFit="inherit"
          src={data?.properties?.image?.files[0]?.file?.url ?? bookImage}
          alt="img...."
          placeholder="blur"
          blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
        />
      </div>
      <div className="tw-p-4">
        <span className="tw-text-lg ">
          {data?.properties?.title?.rich_text[0]?.plain_text ?? ''}
        </span>{' '}
        <br />
        <span className="tw-text-xs">
          Ngày tạo: {dayjs(dateCreate * 1000).format('DD/MM/YYYY') ?? converCurrDate}
        </span>{' '}
        <br />
        <div>
          {data?.properties?.tags?.multi_select?.map((item) => {
            return (
              <span
                key={item.id}
                style={{ color: item.color }}
                className="tw-text-sm tw-overflow-hidden tw-break-words "
              >
                {item.name}{' '}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
