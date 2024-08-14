import { FooterContactItemType } from '@components/fragments/FooterContact';
import FooterContactItem from '@components/texts/FooterContactItem';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

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
      <FooterContactListUl>
        {contactItems.map(({ title, children }) => (
          <FooterContactItem title={title} key={uuidv4()}>
            {children}
          </FooterContactItem>
        ))}
      </FooterContactListUl>
    </FooterContactListWrapper>
  );
};

const FooterContactListWrapper = styled.div``;

const FooterContactListUl = styled.ul``;

export default FooterContactList;
