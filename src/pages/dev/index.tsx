import HomeLayout from '@/components/Layout/HomeLayout';
import CardItem from '@/components/cards/CartItem';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';
import { useRouter } from 'next/router';

export async function getServerSideProps() {
  const reqParam = {
    filter: {
      and: [
        {
          property: 'tags',
          multi_select: {
            contains: '#dev',
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
function DevPage(props: any) {
  const data = props as ArticleListInterface;
  const router = useRouter();

  const handleClickViewDetailDev = (id: string) => {
    return router.push(`/dev/${id}`);
  };

  return (
    <div className='tw-block'>
      <div className='tw-mb-4'>
        <span className='tw-text-blue-500 tw-font-semibold'> DEVELOPER - Làm dev vui thấy bà  </span>
      </div>

      <div className="sm:tw-grid tw-block lg:tw-grid-cols-3  sm:tw-grid-cols-2 sm:tw-gap-4">
        {data?.results?.map((item, idx) => {
          return <CardItem key={idx} data={item} handleRedirectToDetail={handleClickViewDetailDev} />;
        })}
      </div>
    </div>
  );
}

DevPage.Layout = HomeLayout;
export default DevPage;
