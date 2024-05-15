import Layout from './components/common/Layout';
import Header from './components/common/Header/Tablet&Mobile';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router';
import { footerData } from './data/footer';

const App = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer footerData={footerData} />
    </Layout>
  );
};

export default App;
