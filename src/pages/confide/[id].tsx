import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
import MainLayout from '@/components/Layout/MainLayout';
import ConfideContentSkeleton from '@/components/ConfideContentSkeleton';

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

  return (
    <div className="pt-8 ">
      <div className="mb-4">
        <h2 className="text-3xl font-medium mb-4">
          {pageInfo?.properties?.title?.rich_text[0]?.plain_text ?? ''}
        </h2>
        <div className="flex">
          {pageInfo?.properties?.tags?.multi_select?.map((item) => {
            return (
              <span
                key={item.id}
                style={{ zIndex: 1, color: item.color, marginRight: 4 }}
              >
                {item.name}
              </span>
            );
          })}
        </div>
        <div>
          <span className="text-sm gray-700">Ngày tạo: {pageInfo?.created_time}</span>
        </div>
      </div>
      <div>
        <span>
          {paragraph?.results?.map((item, idx) => {
            return (
              <div key={idx}>
                <span>
                  {item?.paragraph?.rich_text?.map((itemTxt) => {
                    return `${itemTxt.plain_text}`;
                  })}
                </span>{' '}
                <br />
              </div>
            );
          })}
        </span>
      </div>
    </div>
  );
}

ConfidePage.Layout = MainLayout;

export default ConfidePage;
