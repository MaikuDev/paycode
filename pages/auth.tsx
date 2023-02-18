import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getCookie } from 'cookies-next';
import { Auth } from '@app/containers/Auth';

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res });

  if (token) {
    return {
      redirect: {
        permanent: true,
        destination: '/dashboard',
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};

export default Auth;
