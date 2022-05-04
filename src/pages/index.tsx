import HomeLayout from "@/components/layout/HomeLayout";
import BlogCard from '@/components/cards/BlogCard';
import { getArticleList } from "@/services/api/getArticleList";

export async function getStaticProps() {
  const reqParam = {
    "filter": {
      "and": [
          {
              "property": "tags",
              "multi_select": {
                  "contains": "#tâm_sự_nhỏ"
              }
          }
      ]
    }
  }

  const resp = await getArticleList(reqParam);
  return {
    props: {
      data: JSON.stringify(resp),
    },
  }
}

export function HomePage(props: any) {
  return (<div> 
    <BlogCard data={JSON.parse(props.data)} /></div>)
}

HomePage.Layout = HomeLayout;
export default HomePage