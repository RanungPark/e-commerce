import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import Header from '@components/publics/Header';
import Footer from '@components/publics/Footer';
import useScrollToTop from '@hooks/useScrollToTop';
import Layout from '@components/publics/Layout';

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
