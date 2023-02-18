import { getCookie, deleteCookie } from 'cookies-next';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { report as getReport } from '@app/services/actions/dashboard';
import { profile as getProfile } from '@app/services/actions/user';
import { Dashboard } from '@app/containers/Dashboard';

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const token = getCookie('token', { req, res });

  if (!token) {
    deleteCookie('token', { req, res });

    return {
      redirect: {
        permanent: true,
        destination: '/auth',
      },
      props: {},
    };
  }

  try {
    const headers = {
      authorization: `Beare  ${token}`,
    };
    const report = await getReport({
      headers,
    });
    const profile = await getProfile({
      headers,
    });

    return {
      props: {
        report,
        profile,
      },
    };
  } catch (error) {
    deleteCookie('token', { req, res });
    return {
      redirect: {
        permanent: true,
        destination: '/auth',
      },
      props: {},
    };
  }
};

export default Dashboard;
