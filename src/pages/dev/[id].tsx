import MainLayout from '@/components/Layout/MainLayout';
import ConfideContentSkeleton from '@/components/ConfideContentSkeleton';
import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo, GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import {
  getContentPage,
  GetContentPageResponseInterface,
} from '@/services/api/getContentPage';
import dayjs from 'dayjs';
import { renderContentConfidePage } from '@/components/pages/ContentPage';
import AlertError from '@/components/Alert/AlertError';
import { jsonDecode } from '@/helpers/urlHelper';

export async function getServerSideProps(context: any) {
  const pageId = context?.params?.id ?? '';
  try{
    const [pageInfoResp, pageContentResp] = await Promise.all([
      getPageInfo({ page_id: pageId }), getContentPage({ block_id: pageId })
    ])

    return {
      props: {
        respErr: null,
        pageInfoResp,
        pageContentResp
      },
    };
  }catch(e: any) {
    const respErr = jsonDecode(e.body);
    return {
      props: {
        respErr: respErr,
        pageInfoResp: null,
        pageContentResp: null
      },
    };
  }
}

function DevDetailPage(props: any) {
  const { pageInfoResp, pageContentResp, respErr } = props;
  const pageInfo: GetPageInfoResponseInterface = useMemo(() => {
    return pageInfoResp;
  }, [pageInfoResp]);

  const contentPageInfo: GetContentPageResponseInterface = useMemo(() => {
    return pageContentResp;
  }, [pageContentResp]);

  const pageTitle = useMemo(() => {
    return pageInfo?.properties?.title?.rich_text[0]?.plain_text ?? '';
  }, [pageInfo]);

  const router = useRouter();

  const createDate = useMemo(() => {
    return dayjs(pageInfo?.properties?.time?.created_time ?? 0).unix();
  }, [pageInfo]);

  const createDateConv = useMemo(() => {
    return dayjs(createDate * 1000).format('DD/MM/YYYY');
  }, [createDate]) 

  const currDate = Date.now();
  const currDateInner = useMemo(() => {
    return dayjs(currDate).format('DD/MM/YYYY');
  }, [currDate]) 

  const handleClickBack = () => {
    return router.back();
  };

  if (respErr !== null) {
    return (
      <div className='pt-8'>
        <AlertError />
      </div>
    )
  }

  return (
    <div >
      <div className="flex justify-start px-8 pt-4">
        <button onClick={() => handleClickBack()}>Quay lại</button>
      </div>
      <div className='py-4 px-8'>
        <span className="text-3xl text-slate-700 font-semibold">
          {pageTitle}
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

      {contentPageInfo?.results?.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            {renderContentConfidePage(item.type, item)}
          </React.Fragment>
        )
      })}
    </div>
  );
}

DevDetailPage.Layout = MainLayout;
export default DevDetailPage;
