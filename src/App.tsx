import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router';

import Footer from '@components/publics/Footer';
import Header from '@components/publics/Header';
import Layout from '@components/publics/Layout';
import useScrollToTop from '@hooks/useScrollToTop';

const App = () => {
  useScrollToTop();

  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default App;
