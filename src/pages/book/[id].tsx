import EmptyLayout from '@/components/Layout/EmptyLayout';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { getPageInfo } from '@/services/api/getPageInfo';
import { getContentPage } from '@/services/api/getContentPage';
import { GetPageInfoResponseInterface } from '@/services/api/getPageInfo';
import { GetContentPageResponseInterface } from '@/services/api/getContentPage';
import dayjs from 'dayjs';
import { renderContentConfidePage } from '@/components/pages/ContentPage';
import AlertError from '@/components/Alert/AlertError';
import ModalImage from '@/components/ImageModal';
import { useState } from 'react';
import { ImageProps } from 'next/image';

export async function getServerSideProps(context: any) {
  const pageId = context?.params?.id ?? '';
  try {
    const [pageInfoResp, pageContentResp] = await Promise.all([
      getPageInfo({ page_id: pageId }),
      getContentPage({ block_id: pageId }),
    ]);

    if (!pageInfoResp) {
      throw new Error(pageInfoResp);
    }

    return {
      props: {
        respErr: null,
        pageInfoResp,
        pageContentResp,
      },
    };
  } catch (e: any) {
    return {
      props: {
        respErr: JSON.stringify(e),
        pageInfoResp: null,
        pageContentResp: null,
      },
    };
  }
}

function BookDetailPage(props: any) {
  const { pageInfoResp, pageContentResp, respErr } = props;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [imgScr, setImgSrc] = useState<ImageProps['src']>('');
  const handleOpenModal = (src: ImageProps['src']) => {
    setImgSrc(src);
    setIsOpenModal(true);
  };
  const handleCloseModal = () => setIsOpenModal(false);

  const pageInfo: GetPageInfoResponseInterface = useMemo(() => {
    return pageInfoResp;
  }, [pageInfoResp]);

  const contentPageInfo: GetContentPageResponseInterface = useMemo(() => {
    return pageContentResp;
  }, [pageContentResp]);

  const createDate = useMemo(() => {
    return dayjs(pageInfo?.properties?.time?.created_time ?? 0).unix();
  }, [pageInfo]);

  const updatedAt = useMemo(() => {
    return dayjs(pageInfo?.properties?.updated_at?.last_edited_time ?? 0).unix();
  }, [pageInfo]);

  const pageTitle = useMemo(() => {
    return pageInfo?.properties?.title?.rich_text[0]?.plain_text ?? '';
  }, [pageInfo]);

  const tagsList = useMemo(() => {
    return pageInfo?.properties?.tags?.multi_select?.map((item) => {
      return (
        <span key={item.id} style={{ color: item.color }} className="tw-text-sm">
          {item.name} &nbsp;
        </span>
      );
    });
  }, [pageInfo]);

  const createDateConv = useMemo(() => {
    return dayjs(createDate * 1000).format('DD/MM/YYYY');
  }, [createDate]);

  const updatedAtConv = useMemo(() => {
    return dayjs(updatedAt * 1000).format('DD/MM/YYYY');
  }, [updatedAt]);

  const currDate = Date.now();
  const currDateInner = useMemo(() => {
    return dayjs(currDate).format('DD/MM/YYYY');
  }, [currDate]);

  if (respErr !== null) {
    return (
      <div className="tw-pt-8">
        <AlertError />
      </div>
    );
  }

  return (
    <div className="tw-mt-4">
      <div className="tw-py-4 tw-pt-0 tw-px-8">
        <span className="tw-text-3xl tw-text-slate-700 tw-font-semibold dark:tw-text-slate-400">
          {pageTitle}
        </span>{' '}
        <br />
        <span className="tw-text-sm tw-text-slate-800  dark:tw-text-slate-500">
          Created at: {createDateConv ?? currDateInner}
          {' - '}
          Updated at: {updatedAtConv ?? currDateInner}
        </span>{' '}
        <br />
        <div>{tagsList}</div>
      </div>
      <div className=" tw-block">
        {contentPageInfo?.results?.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              {renderContentConfidePage(item.type, item, handleOpenModal)}
            </React.Fragment>
          );
        })}
      </div>

      <ModalImage handleClose={handleCloseModal} imgSrc={imgScr} isOpen={isOpenModal} />
    </div>
  );
}

BookDetailPage.Layout = EmptyLayout;
export default BookDetailPage;
