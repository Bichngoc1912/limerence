import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
import MainLayout from '@/components/Layout/MainLayout';
import ConfideContentSkeleton from '@/components/ConfideContentSkeleton';
import dayjs from 'dayjs';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function ConfidePage(props: any) {
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

  const createDate = dayjs(pageInfo?.created_time ?? 0).unix();

  return (
    <div className="pt-8 ">
      <div className="mb-4">
        <h2 className="text-3xl font-medium mb-4">
          {pageInfo?.properties?.title?.rich_text[0]?.plain_text ?? ''}
        </h2>
        <div className="flex">
          {pageInfo?.properties?.tags?.multi_select?.map((item, idx) => {
            return (
              <span
                key={idx + 'idx'}
                style={{ zIndex: 1, color: item.color, marginRight: 4 }}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        <div>
          <span className="text-sm gray-700">Ngày tạo: {dayjs(createDate * 1000).format('DD/MM/YYYY')}</span>
        </div>
      </div>
      <div className='py-4'>
        {paragraph?.results?.map((item, idx) => {
          return (
            <div key={idx + 'resultItem'}>
              {item?.paragraph?.rich_text?.map((txtItem, itemIdx) => {
                return (
                  <span
                    style={{
                      color: txtItem?.annotations?.color,
                      fontWeight: txtItem?.annotations?.bold ? '600' : 'unset',
                      fontStyle: txtItem?.annotations?.italic ? 'italic' : 'inherit',
                    }}
                    key={'text_item' + itemIdx}
                  >
                    {txtItem.plain_text}
                  </span>
                );
              })}
            </div> 
          );
        })}
      </div>
    </div>
  );
}

ConfidePage.Layout = MainLayout;
export default ConfidePage;
