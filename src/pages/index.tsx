import HomeLayout from '@/components/Layout/HomeLayout';
import BlogCard from '@/components/cards/BlogCard';
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

  return (
    <div>
      <BlogCard data={props} onClick={handleClickViewDetailPageItem} />
    </div>
  );
}

HomePage.Layout = HomeLayout;
export default HomePage;
