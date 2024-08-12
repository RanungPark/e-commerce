import FooterContactList from '@components/lists/FooterContactList';
import SNSIconButtonList from '@components/lists/SNSIconButtonList';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import styled from 'styled-components';

export interface FooterContactItemType {
  title: string;
  children: string;
}

const contactItems: FooterContactItemType[] = [
  { title: 'address', children: '경기도 시흥시 진말로 36번지' },
  { title: 'Phone', children: '01087971558' },
  { title: 'General Enquiry:', children: 'ckehfqkr302@gamil.com' },
];

const FooterContact = () => {
  return (
    <FooterContactWrapper className="bb-1 p-5">
      <FooterContactList contactItems={contactItems}>
        contact us
      </FooterContactList>
      <FooterInfoTittle>follow us</FooterInfoTittle>
      <SNSIconButtonList />
    </FooterContactWrapper>
  );
};

const FooterContactWrapper = styled.div``;

export default FooterContact;
