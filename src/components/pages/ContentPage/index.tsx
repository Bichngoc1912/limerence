import { ResultInterface } from '@/services/api/getContentPage';
import { APP_CONFIGS } from '@/configs/app';
import Image from 'next/image';
import bookImage from '@/assets/images/bg-content-page.jpg';

export const renderContentConfidePage = (type: string, dataRender: ResultInterface) => {
  switch (type) {
    case 'image':
      return (
        <div className="tw-max-w-6xl tw-px-4 tw-mx-auto tw-my-4">
          <div className="tw-bg-white tw-overflow-hidden">
            <Image
              width={900}
              height={450}
              quality={100}
              blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
              placeholder="blur"
              src={dataRender?.image?.file?.url ?? bookImage}
              layout="responsive"
              objectFit="contain"
              alt="img..."
            />
          </div>
        </div>
      );
    case 'paragraph':
      return (
        <div className="tw-px-4 tw-mb-4">
          <p className="tw-text-slate-800">
            {dataRender.paragraph?.rich_text?.map((item, idx) => {
              return (
                <span
                  key={idx + 'n'}
                  style={{
                    color: item.annotations?.color,
                    fontWeight: item.annotations?.bold ? 'bold' : 'normal',
                    fontStyle: item.annotations?.italic ? 'italic' : 'normal',
                  }}
                >
                  {item.plain_text}
                </span>
              );
            })}{' '}
          </p>
        </div>
      );
    case 'bulleted_list_item':
      return (
        <ul className="tw-text-slate-800 tw-mx-16 tw-list-disc">
          {dataRender.bulleted_list_item?.rich_text?.map((item, idx) => {
            return <li key={idx + 'k'}>{item.plain_text}</li>;
          })}{' '}
        </ul>
      );
  }
};
