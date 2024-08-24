import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import FooterContactItem from '@components/texts/FooterContactItem';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import { FooterContactItemType } from '@pages/sections/FooterContact';

interface FooterContactListProps {
  children: string;
  contactItems: FooterContactItemType[];
}

const FooterContactList = ({
  children,
  contactItems,
}: FooterContactListProps) => {
  return (
    <FooterContactListWrapper>
      <FooterInfoTittle>{children}</FooterInfoTittle>
      <Ul>
        {contactItems.map(({ title, children }) => (
          <FooterContactItem title={title} key={uuidv4()}>
            {children}
          </FooterContactItem>
        ))}
      </Ul>
    </FooterContactListWrapper>
  );
};

const FooterContactListWrapper = styled.div``;

const Ul = styled.ul``;

export default FooterContactList;
