import { FooterContactItemType } from '@pages/sections/FooterContact';
import styled from 'styled-components';

interface FooterContactItemProps extends FooterContactItemType {}

const FooterContactItem = ({ title, children }: FooterContactItemProps) => {
  return (
    <FooterContactItemWrapper>
      <FooterContactItemTitleWrapper>{title}</FooterContactItemTitleWrapper>
      {children}
    </FooterContactItemWrapper>
  );
};

const FooterContactItemWrapper = styled.li`
  ${({ theme }) => theme.typography.Links}
  margin-bottom: 24px;
`;

const FooterContactItemTitleWrapper = styled.h6`
  ${({ theme }) => theme.typography.Caption}
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 8px;
  text-transform: capitalize;
`;

export default FooterContactItem;
