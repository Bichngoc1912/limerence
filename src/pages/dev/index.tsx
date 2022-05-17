import MainLayout from '@/components/Layout/MainLayout';
import DevCard from '@/components/cards/DevCard';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';

export async function getServerSideProps(){
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
      ...(await getArticleList(reqParam))
    },
  }
}
function DevPage(props: any) {
  const data = props as ArticleListInterface;

  return (
    <div className=" block">
      <div className='grid gap-4 justify-items-center md:grid-cols-2 grid-cols-1 mt-8 mb-4'>
         {data?.results?.map((item, idx) => {
            return <DevCard key={idx} data={item} />;
          })}
      </div>
    </div>
  );
}

DevPage.Layout = MainLayout;
export default DevPage;
