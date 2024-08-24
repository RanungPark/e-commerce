import { ReactNode } from 'react';
import styled from 'styled-components';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

const LayoutWrapper = styled.main`
  display: grid;
  position: relative;
  grid-template-rows: auto 1fr auto; /* Header, main content, footer */

  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export default Layout;
