import Layout from './components/common/Layout';
import Header from './components/common/Header/Tablet&Mobile';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router';
import { footerData } from './data/footer';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer footerData={footerData} />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default App;

/**
 * 1. box model 만들기
 *   - eg) classname: mb-1 , my-1
 *
 * 2. fetch
 *   - usecase 분석
 *   - request spec 확인
 *   - msa 대응
 *   - 추상화 다시
 *
 * 3. Text, Button
 *   - a 태그가 될 수 있도록 변경, href prop 활용
 *
 * 4. 타이포그라피 uppercase 코드 수정
 *
 * 5. lint, prettier, nvm, gitignore, gitattributes, env
 */
