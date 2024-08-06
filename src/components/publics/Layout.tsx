import { ReactNode } from 'react';
import styled from 'styled-components';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
};

const StyledLayout = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default Layout;
