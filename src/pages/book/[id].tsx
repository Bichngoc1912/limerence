import MainLayout from '@/components/Layout/MainLayout';
import ConfideContentSkeleton from '@/components/ConfideContentSkeleton';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
import dayjs from 'dayjs';
import { renderContentConfidePage } from '@/components/pages/ContentPage';

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

  const createDate = dayjs(pageInfo?.properties?.time?.created_time ?? 0).unix();
  const createDateConv = dayjs(createDate * 1000).format('DD/MM/YYYY');
  const currDate = Date.now();
  const currDateInner = dayjs(currDate).format('DD/MM/YYYY');

  const handleClickBack = () => {
    return router.back();
  };

  return (
    <div className="mt-4">
      <div className="flex justify-start px-8 text-slate-800">
        <button onClick={() => handleClickBack()}>Quay lại</button>
      </div>
      <div className='py-4 pt-0 px-8'>
        <span className="text-3xl text-slate-700 font-semibold">
          {pageInfo?.properties?.title?.rich_text[0]?.plain_text}
        </span>{' '}
        <br />
        <span className="text-sm text-slate-800">Ngày tạo: {createDateConv ?? currDateInner} </span>{' '}
        <br />
        <div>
          {pageInfo?.properties?.tags?.multi_select?.map((item) => {
            return (
              <span key={item.id} style={{ color: item.color }} className="text-sm">
                {item.name} &nbsp;
              </span>
            );
          })}
        </div>
      </div>
      <div>
        {paragraph?.results?.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {renderContentConfidePage(item.type, item)}
            </React.Fragment> 
          )
        })}
      </div>
    </div>
  );
}

BookDetailPage.Layout = MainLayout;
export default BookDetailPage;
