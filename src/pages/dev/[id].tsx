import EmptyLayout from '@/components/Layout/EmptyLayout';
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
import ModalImage from '@/components/ImageModal';
import { ImageProps } from 'next/image';

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

function DevDetailPage(props: any) {
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

  const pageTitle = useMemo(() => {
    return pageInfo?.properties?.title?.rich_text[0]?.plain_text ?? '';
  }, [pageInfo]);

  const router = useRouter();

  const createDate = useMemo(() => {
    return dayjs(pageInfo?.properties?.time?.created_time ?? 0).unix();
  }, [pageInfo]);

  const createDateConv = useMemo(() => {
    return dayjs(createDate * 1000).format('DD/MM/YYYY');
  }, [createDate]);

  const currDate = Date.now();
  const currDateInner = useMemo(() => {
    return dayjs(currDate).format('DD/MM/YYYY');
  }, [currDate]);

  if (respErr !== null) {
    return (
      <div className="pt-8">
        <AlertError />
      </div>
    );
  }

  return (
    <div>
      <div className="tw-py-4 tw-px-8">
        <span className="tw-text-3xl tw-text-slate-700  dark:tw-text-slate-400  tw-font-semibold">
          {pageTitle}
        </span>{' '}
        <br />
        <span className="tw-text-sm tw-text-slate-800 dark:tw-text-slate-500 ">
          Ngày tạo: {createDateConv ?? currDateInner}{' '}
        </span>{' '}
        <br />
        <div>
          {pageInfo?.properties?.tags?.multi_select?.map((item) => {
            return (
              <span key={item.id} style={{ color: item.color }} className="tw-text-sm">
                {item.name} &nbsp;
              </span>
            );
          })}
        </div>
      </div>

      {contentPageInfo?.results?.map((item, idx) => {
        return (
          <React.Fragment key={idx}>
            {renderContentConfidePage(item.type, item, handleOpenModal)}
          </React.Fragment>
        );
      })}

      <ModalImage handleClose={handleCloseModal} imgSrc={imgScr} isOpen={isOpenModal} />
    </div>
  );
}

DevDetailPage.Layout = EmptyLayout;
export default DevDetailPage;
