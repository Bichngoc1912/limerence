import MainLayout from '@/components/Layout/MainLayout';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

function HomePage(props: any) {
  return <div className="tw-flex ">confide page</div>;
}

HomePage.Layout = MainLayout;

export default HomePage;
