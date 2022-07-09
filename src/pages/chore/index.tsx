import HomeLayout from '@/components/Layout/HomeLayout';
import Image from 'next/image';
import CardItem from '@/components/cards/CartItem';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';
import { APP_CONFIGS } from '@/configs/app';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const reqParam = {
    filter: {
      and: [
        {
          property: 'tags',
          multi_select: {
            contains: '#chore',
          },
        },
      ],
    },
  };

  return {
    props: {
      ...(await getArticleList(reqParam)),
    },
  };
}
function ChorePage(props: any) {
  const data = props as ArticleListInterface;
  const router = useRouter();

  const handleClickViewDetailChore = (id: string) => {
    router.push(`/chore/${id}`);
  };

  const renderArticleList = props?.results?.map((item: any, idx: number) => {
    return (
      <CardItem
        key={idx}
        data={item}
        handleRedirectToDetail={handleClickViewDetailChore}
      />
    );
  });

  return (
    <div className="tw-block">
      <div className="tw-mb-4">
        <span className="tw-text-blue-500 tw-font-semibold">
          {' '}
          CHORE - Những điều nhỏ nhặt{' '}
        </span>
      </div>
      <div className="sm:tw-grid tw-block lg:tw-grid-cols-3  sm:tw-grid-cols-2 sm:tw-gap-4">
        {renderArticleList}
      </div>
    </div>
  );
}

ChorePage.Layout = HomeLayout;
export default ChorePage;
