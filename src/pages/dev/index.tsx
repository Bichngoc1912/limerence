import MainLayout from '@/components/Layout/MainLayout';
import DevCard from '@/components/cards/DevCard';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';

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

  return (
    <div className=" tw-block">
      <div className="tw-grid tw-gap-4 tw-justify-items-center md:tw-grid-cols-2 tw-grid-cols-1 tw-mt-8 tw-mb-4">
        {data?.results?.map((item, idx) => {
          return <DevCard key={idx} data={item} />;
        })}
      </div>
    </div>
  );
}

DevPage.Layout = MainLayout;
export default DevPage;
