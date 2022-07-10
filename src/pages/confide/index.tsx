import HomeLayout from '@/components/Layout/HomeLayout';
import CardItem from '@/components/cards/CartItem';
import { getArticleList } from '@/services/api/getArticleList';
import { useRouter } from 'next/router';
import { generateConfideDetailRouter } from '@/services/bussiness/router/generateRouter';

export async function getServerSideProps() {
  const reqParam = {
    filter: {
      and: [
        {
          property: 'tags',
          multi_select: {
            contains: '#tâm_sự_nhỏ',
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

function HomePage(props: any) {
  const router = useRouter();

  const handleClickViewDetailPageItem = (id: string) => {
    const asPath = generateConfideDetailRouter({ id: id })?.asPath;
    if (asPath) {
      router.push(asPath);
    }
  };

  const renderArticleList = props?.results?.map((item: any, idx: number) => {
    return (
      <CardItem
        key={idx}
        data={item}
        handleRedirectToDetail={handleClickViewDetailPageItem}
      />
    );
  });

  return (
    <div className="tw-block dark:tw-bg-slate-800">
      <div className="tw-mb-4">
        <span className="tw-text-blue-500 tw-font-semibold">
          {' '}
          CONFIDE - Tâm sự linh tinh{' '}
        </span>
      </div>

      <div className="sm:tw-grid tw-block lg:tw-grid-cols-3  sm:tw-grid-cols-2 sm:tw-gap-4">
        {renderArticleList}
      </div>
    </div>
  );
}

HomePage.Layout = HomeLayout;
export default HomePage;
