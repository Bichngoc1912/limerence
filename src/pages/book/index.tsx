import MainLayout from '@/components/Layout/MainLayout';
import BookCard from '@/components/cards/BookCard';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';

export async function getServerSideProps() {
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

  return {
    props: {
      ...(await getArticleList(reqParam))
    },
  };
}

function BookPage(props: any) {
  const data = props as ArticleListInterface;

  return (
    <div className="grid gap-4 justify-items-center grid-cols-2 mt-8 mb-4">
      {data?.results?.map((item, idx) => {
        return <BookCard key={idx} data={item} />;
      })}
    </div>
  );
}

BookPage.Layout = MainLayout;
export default BookPage;
