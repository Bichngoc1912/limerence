import { useMemo } from 'react';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import HomeLayout from '@/components/Layout/HomeLayout';
import dayjs from 'dayjs';
import { renderContentConfidePage } from '@/components/pages/ContentPage';
import React from 'react';
import AlertError from '@/components/Alert/AlertError';
import { jsonDecode } from '@/helpers/urlHelper';
import EmptyLayout from '@/components/Layout/EmptyLayout';

export async function getServerSideProps(context: any) {
  const pageId = context?.params?.id ?? '';
  try {
    const [pageInfoResp, pageContentResp] = await Promise.all([
      getPageInfo({ page_id: pageId }),
      getContentPage({ block_id: pageId }),
    ]);

    return {
      props: {
        respErr: null,
        pageInfoResp,
        pageContentResp,
      },
    };
  } catch (e: any) {
    const respErr = jsonDecode(e.body);
    return {
      props: {
        respErr: respErr,
        pageInfoResp: null,
        pageContentResp: null,
      },
    };
  }
}

function ConfidePage(props: any) {
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

  const tagsList = useMemo(() => {
    return pageInfo?.properties?.tags?.multi_select?.map((item, idx) => {
      return (
        <div key={idx + 'idx'} className="tw-mr-2">
          <span style={{ zIndex: 1, color: item.color, marginRight: 4 }}>
            {item.name}
          </span>
        </div>
      );
    });
  }, [pageInfo]);

  const createDate = useMemo(() => {
    return dayjs(pageInfo?.created_time ?? 0).unix();
  }, [pageInfo]);

  const updatedAt = useMemo(() => {
    return dayjs(pageInfo?.properties.updated_at.last_edited_time ?? 0).unix();
  }, [pageInfo]);

  if (respErr !== null) {
    return (
      <div className="pt-8">
        <AlertError />
      </div>
    );
  }

  return (
    <div className="">
      <div className="tw-mb-4">
        <h2 className="tw-text-3xl tw-mb-4 tw-text-slate-700 tw-font-semibold">
          {pageTitle}
        </h2>
        <div className="tw-flex">{tagsList}</div>
        <div>
          <span className="tw-text-sm tw-gray-700">
            Created at: {dayjs(createDate * 1000).format('DD/MM/YYYY')} {' - '}
            Update_at: {dayjs(updatedAt * 1000).format('DD/MM/YYYY')}
          </span>
        </div>
      </div>
      <div className="tw-py-2">
        {contentPageInfo?.results?.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {renderContentConfidePage(item.type, item)}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

ConfidePage.Layout = EmptyLayout;
export default ConfidePage;
