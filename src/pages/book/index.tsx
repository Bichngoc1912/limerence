import MainLayout from '@/components/Layout/MainLayout';
import BookCard from '@/components/cards/BookCard';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';

async function getStaticProps() {
  const reqParam = {
    filter: {
      and: [
        {
          property: 'tags',
          multi_select: {
            contains: '#book',
          },
        },
      ],
    },
  };

  const resp = await getArticleList(reqParam);
  return {
    props: {
      data: JSON.stringify(resp),
    },
  };
}

function BookPage(props: any) {
  const { data } = props;
  const dataConvert = JSON.parse(data) as ArticleListInterface;

  return (
    <div className="grid gap-4 justify-items-center grid-cols-2 mt-8 mb-4">
      {dataConvert?.results?.map((item, idx) => {
        return <BookCard key={idx} data={item} />;
      })}
    </div>
  );
}

BookPage.Layout = MainLayout;
export default BookPage;
