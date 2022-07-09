import HomeLayout from '@/components/Layout/HomeLayout';
import { useRouter } from 'next/router';
import { getArticleList } from '@/services/api/getArticleList';
import { ArticleListInterface } from '@/types/common';
import CardItem from '@/components/cards/CartItem';
import { generateBookDetailRouter } from '@/services/bussiness/router/generateRouter';

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
      ...(await getArticleList(reqParam)),
    },
  };
}

function BookPage(props: any) {
  const data = props as ArticleListInterface;
  const router = useRouter();

  const handleClickViewDetailBook = (id: string) => {
    const asPath = generateBookDetailRouter({ id: id })?.asPath;
    if (asPath) {
      router.push(asPath);
    }
  };

  return (
    <div className="tw-block">
      <div className="tw-mb-4">
        <span className="tw-text-blue-500 tw-font-semibold">
          {' '}
          BOOK - bngoc tri thức :)){' '}
        </span>
      </div>

      <div className="sm:tw-grid tw-block lg:tw-grid-cols-3  sm:tw-grid-cols-2 sm:tw-gap-4">
        {data?.results?.map((item, idx) => {
          return (
            <CardItem
              key={idx}
              data={item}
              handleRedirectToDetail={handleClickViewDetailBook}
            />
          );
        })}
      </div>
    </div>
  );
}

BookPage.Layout = HomeLayout;
export default BookPage;
