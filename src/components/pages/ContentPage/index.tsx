import { ResultInterface } from "@/services/api/getContentPage";
import { APP_CONFIGS } from '@/configs/app';
import Image from 'next/image';
import bookImage from '@/assets/images/bg-content-page.jpg';

export const renderContentConfidePage = (type: string, dataRender: ResultInterface) => {
  switch(type) {
    case 'image': 
      return (
        <div style={{ width: '100%', height: 420, marginBottom: 16 }} className="relative">
          <Image
            quality={100}
            blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
            placeholder="blur"
            src={dataRender?.image?.file?.url ?? bookImage}
            layout="fill"
            objectFit="inherit"
            alt="img..."
          />
        </div>
      )
    case 'paragraph': 
      return (
        <div className="px-8 mb-4">
          <p className='text-slate-800'>
            {dataRender.paragraph?.rich_text?.map((item) => {
              return `${item.plain_text}`;
            })}{' '}
          </p>
        </div>
      )
    case 'bulleted_list_item': 
      return (
        <ul className='text-slate-800 mx-16 list-disc'>
          {dataRender.bulleted_list_item?.rich_text?.map((item, idx) => {
            return <li key={idx}>{item.plain_text}</li>
          })}{' '}
        </ul>
      )
  }
}