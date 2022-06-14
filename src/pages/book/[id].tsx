import MainLayout from '@/components/Layout/MainLayout';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
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

function BookDetailPage(props: any) {
  const { pageInfoResp, pageContentResp, respErr } = props;
  const pageInfo: GetPageInfoResponseInterface = useMemo(() => {
    return pageInfoResp;
  }, [pageInfoResp]);

  const contentPageInfo: GetContentPageResponseInterface = useMemo(() => {
    return pageContentResp;
  }, [pageContentResp]);

  const createDate = useMemo(() => {
    return dayjs(pageInfo?.properties?.time?.created_time ?? 0).unix();
  }, [pageInfo]);
  
  const pageTitle = useMemo(() => {
    return pageInfo?.properties?.title?.rich_text[0]?.plain_text ?? ''
  }, [pageInfo]);

  const tagsList = useMemo(() => {
    return pageInfo?.properties?.tags?.multi_select?.map((item) => {
      return (
        <span key={item.id} style={{ color: item.color }} className="text-sm">
          {item.name} &nbsp;
        </span>
      );
    })
  }, [pageInfo]);

  const createDateConv = useMemo(() => {
    return dayjs(createDate * 1000).format('DD/MM/YYYY');
  }, [createDate]);

  const currDate = Date.now();
  const currDateInner = useMemo(() => {
    return dayjs(currDate).format('DD/MM/YYYY');
  }, [currDate]);

  const router = useRouter();

  if (respErr !== null) {
    return (
      <div className='pt-8'>
        <AlertError />
      </div>
    )
  }

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
          {pageTitle}
        </span>{' '}
        <br />
        <span className="text-sm text-slate-800">Ngày tạo: {createDateConv ?? currDateInner} </span>{' '}
        <br />
        <div>
          {tagsList}
        </div>
      </div>
      <div>
        {contentPageInfo?.results?.map((item, idx) => {
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
