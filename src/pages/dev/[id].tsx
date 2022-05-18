import MainLayout from '@/components/Layout/MainLayout';
import { APP_CONFIGS } from '@/configs/app';
import Image from 'next/image';
import ConfideContentSkeleton from '@/components/ConfideContentSkeleton';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo, GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import {
  getContentPage,
  GetContentPageResponseInterface,
} from '@/services/api/getContentPage';
import bookImage from '@/assets/images/bg-content-page.jpg';
import dayjs from 'dayjs';

function DevDetailPage() {
  const router = useRouter();

  const { id } = router.query;
  const pageId = id as string;

  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [paragraph, setParagraph] = useState<GetContentPageResponseInterface>();
  const [pageInfo, setPageInfo] = useState<GetPageInfoResponseInterface>();
  const [isGetBlockChildren, setIsGetBlockChildren] = useState<boolean>(false);
  const [blockChildrendContent, setBlockChildrenContent] =
    useState<GetContentPageResponseInterface>();
  const [openBlockChildren, setOpenBlockChildren] = useState<boolean>(false);
  const [getBlockChildrenError, setGetBlockChildrenError] = useState<boolean>(false);
  const [idBlockChildren, setIdBlockChildren] = useState<string>();

  let isComponentMounted = useRef(false);
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

  const createDate = dayjs(pageInfo?.properties?.time?.created_time ?? 0).unix();
  const createDateConv = dayjs(createDate * 1000).format('DD/MM/YYYY');
  const currDate = Date.now();
  const currDateInner = dayjs(currDate).format('DD/MM/YYYY');

  const handleClickBack = () => {
    return router.back();
  };
  console.log('paragraph', paragraph);

  const handleClickViewContentBlockChildren = (blockId: string) => {
    if (!blockId) return;
    setIsGetBlockChildren(true);
    setIdBlockChildren(blockId);

    if (openBlockChildren) {
      setOpenBlockChildren(false);
    }

    if (blockChildrendContent || blockChildrendContent !== null) {
      setBlockChildrenContent(undefined);
    }

    getContentPage({ block_id: blockId })
      .then((res) => {
        if (!isComponentMounted.current) return;
        setIsGetBlockChildren(false);
        setBlockChildrenContent(res);
        setOpenBlockChildren(true);
      })
      .catch((err) => {
        if (!isComponentMounted.current) return;
        setIsGetBlockChildren(false);
        setGetBlockChildrenError(true);
        console.log('get content page err...', err);
      });
  };

  if (isLoading) {
    return <ConfideContentSkeleton />;
  }

  return (
    <div >
      <div className="flex justify-start px-8 pt-4">
        <button onClick={() => handleClickBack()}>Quay lại</button>
      </div>
      <div className='py-4 px-8'>
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

      {paragraph?.results?.map((item, idx) => {
        return (
          <div key={idx}>
            {item?.type === 'image' ? (
              <div style={{ width: '100%', height: 420 }} className="relative">
                <Image
                  blurDataURL={APP_CONFIGS.BLUR_IMAGE_BASE64}
                  placeholder="blur"
                  src={item?.image?.file?.url ?? bookImage}
                  layout="fill"
                  objectFit="inherit"
                  alt="img..."
                />
              </div>
            ) : (
              <div className="py-4 px-8">
                <p className='text-slate-800'>
                  {item.paragraph?.rich_text?.map((item, index) => {
                    return (
                      <span
                        key={index}
                        style={{
                          color: item.annotations.color,
                          fontStyle: item.annotations?.italic ? 'italic' : 'inherit',
                        }}
                      >
                        {item.plain_text}
                      </span>
                    );
                  })}{' '}
                  <br />
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

DevDetailPage.Layout = MainLayout;
export default DevDetailPage;
