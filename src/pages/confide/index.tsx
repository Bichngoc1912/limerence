import { useEffect } from 'react';
import { getArticleList } from '@/services/api/getArticleList';
import MainLayout from '@/components/Layout/MainLayout';

// export async function getServerSideProps() {
//   const resp = await getArticleList();

//   const data = JSON.stringify(resp);
//   console.log("data", resp)
//   return {
//     props: {
//       data
//     }
//   }
// }

function HomePage(props: any) {
  return (
    <div className="flex ">
      confide index
    </div>
  );
}

HomePage.Layout = MainLayout;

export default HomePage;
