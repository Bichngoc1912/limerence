import MainLayout from '@/components/Layout/MainLayout';
import ConfideContentSkeleton from '@/components/ConfideContentSkeleton';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
import bookImage from '@/assets/images/bg-content-page.jpg';
import Image from 'next/image';
import dayjs from 'dayjs';
import { APP_CONFIGS } from '@/configs/app';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function BookDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const pageId = id as string;

  const [paragraph, setParagraph] = useState<GetContentPageResponseInterface>();
  const [pageInfo, setPageInfo] = useState<GetPageInfoResponseInterface>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isComponentMounted = useRef(false);
  useEffect(() => {
    isComponentMounted.current = true;

    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!pageId || !isComponentMounted.current) return;
    setIsLoading(true);

    getPageInfo({ page_id: pageId })
      .then((res) => {
        if (!isComponentMounted.current) return;
        setIsLoading(false);
        setIsError(false);
        setPageInfo(res);
      })
      .catch((err) => {
        if (!isComponentMounted.current) return;
        setIsLoading(false);
        setIsError(true);
        console.log('get page info err ...', err);
      });

    getContentPage({ block_id: pageId })
      .then((res) => {
        if (!isComponentMounted.current) return;
        setIsLoading(false);
        setIsError(false);
        setParagraph(res);
      })
      .catch((err) => {
        if (!isComponentMounted.current) return;
        setIsLoading(false);
        setIsError(true);
        console.log('get content page err...', err);
      });
  }, [pageId]);

  if (isLoading) {
    return <ConfideContentSkeleton />;
  }

  const createDate = pageInfo?.properties?.time?.created_time ?? '';
  const createDateConv = createDate?.split('T');
  const currDate = Date.now();
  const currDateInner = dayjs(currDate).format('DD/MM/YYYY');

  const handleClickBack = () => {
    return router.back();
  };

  return (
    <div className="mt-8">
      <div className="flex justify-end">
        <button onClick={() => handleClickBack()}>Quay lại</button>
      </div>
      <div>
        <span className="text-2xl font-semibold">
          {pageInfo?.properties?.title?.rich_text[0]?.plain_text}
        </span>{' '}
        <br />
        <span className="text-sm">
          Ngày tạo: {createDateConv[0] ?? currDateInner}{' '}
        </span>{' '}
        <br />
        <div>
          {pageInfo?.properties?.tags?.multi_select?.map((item) => {
            return (
              <span key={item.id} style={{ color: item.color }} className="text-sm">
                {item.name} &nbsp;
              </span> 
            )
          })}
        </div>
      </div>
      <div>
        {paragraph?.results?.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {item?.type === 'image' ? (
                <div style={{ width: '100%', height: 420 }} className="relative">
                  <Image
                    blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
                    placeholder='blur'
                    src={item?.image?.file?.url ?? bookImage}
                    layout="fill"
                    objectFit="inherit"
                    alt="img..."
                  />
                </div>
              ) : (
                <div className="p-4">
                  <p>
                    {item.paragraph?.rich_text?.map((item) => {
                      return `${item.plain_text}`;
                    })}{' '}
                    <br />
                  </p>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

BookDetailPage.Layout = MainLayout;
export default BookDetailPage;
