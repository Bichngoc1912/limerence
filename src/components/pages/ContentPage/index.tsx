import { ResultInterface } from "@/services/api/getContentPage";
import { APP_CONFIGS } from '@/configs/app';
import Image from 'next/image';
import bookImage from '@/assets/images/bg-content-page.jpg';

export const renderContentConfidePage = (type: string, dataRender: ResultInterface) => {
  switch(type) {
    case 'image': 
      return (
        <div className="max-w-4xl px-4 mx-auto my-4">
          <div className="bg-white overflow-hidden">
            <Image
              width={900}
              height={450}
              quality={100}
              blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
              placeholder="blur"
              src={dataRender?.image?.file?.url ?? bookImage}
              layout="responsive"
              objectFit="cover"
              alt="img..."
            />
          </div>
        </div>
      )
    case 'paragraph': 
      return (
        <div className="px-4 mb-4">
          <p className='text-slate-800'>
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
              )
            })}{' '}
          </p>
        </div>
      )
    case 'bulleted_list_item': 
      return (
        <ul className='text-slate-800 mx-16 list-disc'>
          {dataRender.bulleted_list_item?.rich_text?.map((item, idx) => {
            return (
              <li key={idx + 'k'}>
                 {item.plain_text}
              </li>
            )
          })}{' '}
        </ul>
      )
  }
}