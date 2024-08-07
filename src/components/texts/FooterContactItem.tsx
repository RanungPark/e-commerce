import { FooterContactItemType } from '@components/fragments/FooterContact';
import React from 'react';
import styled from 'styled-components';

interface FooterContactItemProps extends FooterContactItemType {}

const FooterContactItem = ({ title, children }: FooterContactItemProps) => {
  return (
    <FooterContactItemWrapper className="mb-3">
      <FooterContactItemTitleWrapper className="mb-1">
        {title}
      </FooterContactItemTitleWrapper>
      {children}
    </FooterContactItemWrapper>
  );
};

const FooterContactItemWrapper = styled.li`
  ${({ theme }) => theme.typography.Links}
`;

const FooterContactItemTitleWrapper = styled.h6`
  ${({ theme }) => theme.typography.Caption}
  color: ${({ theme }) => theme.colors.gray};
  text-transform: capitalize;
`;

export default FooterContactItem;
