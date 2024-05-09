import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header/Tablet&Mobile';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.main`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 1px; */
  display: flex;
  flex-direction: column;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default Layout;
