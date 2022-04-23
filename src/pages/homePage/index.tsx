import { useEffect } from 'react';
import { getArticleList } from '@/services/api/queryDatabase';

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
  useEffect(() => {
    getArticleList()
      .then(res => {
        console.log("res...", res);
      })
      .catch(err => {
        console.log("err...", err)
      })
  }, [])

  return <div>home page ne</div>
}

export default HomePage;