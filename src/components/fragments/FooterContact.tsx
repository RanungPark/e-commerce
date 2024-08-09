import FooterContactList from '@components/lists/FooterContactList';
import SNSIconButtonList from '@components/lists/SNSIconButtonList';
import FooterInfoTittle from '@components/texts/FooterInfoTittle';
import styled from 'styled-components';

export interface FooterContactItemType {
  title: string;
  children: string;
}

const contactItems: FooterContactItemType[] = [
  { title: 'address', children: '15/4 Khreshchatyk Street, Kyiv' },
  { title: 'Phone', children: '+380980099777' },
  { title: 'General Enquiry:', children: 'Kiev.Florist.Studio@gmail.com' },
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
