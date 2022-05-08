import HomeLayout from '@/components/Layout/HomeLayout';
import BlogCard from '@/components/cards/BlogCard';
import { getArticleList } from '@/services/api/getArticleList';
import { getPageInfo } from '@/services/api/getPageInfo';
import { useRouter } from 'next/router';

async function getStaticProps() {
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

  const resp = await getArticleList(reqParam);
  return {
    props: {
      data: JSON.stringify(resp),
    },
  };
}

function HomePage(props: any) {
  const router = useRouter();

  const handleClickViewDetailPageItem = (id: string) => {
    return router.push(`/confide/${id}`);
  };

  return (
    <div>
      <BlogCard data={JSON.parse(props.data)} onClick={handleClickViewDetailPageItem} />
    </div>
  );
}

HomePage.Layout = HomeLayout;
export default HomePage;
