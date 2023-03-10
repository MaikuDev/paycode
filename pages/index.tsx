import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getCookie } from 'cookies-next';

function IndexPage() {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res });
  const destination = token ? '/dashboard' : '/auth';

  return {
    redirect: {
      destination,
      permanent: true,
    },
    props: {},
  };
};

export default IndexPage;
