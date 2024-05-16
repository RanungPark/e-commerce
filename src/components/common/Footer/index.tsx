import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import Buttons from '../Buttons';
import TextField from '../TextField';
import Icon from '../Icon';
import { SelectObject } from 'src/@types/utils';
import { ReactComponent as Instagram } from 'src/assets/icons/wght300/Brands/Instagram.svg';
import { ReactComponent as Pinterest } from 'src/assets/icons/wght300/Brands/Pinterest.svg';
import { ReactComponent as Facebook } from 'src/assets/icons/wght300/Brands/Facebook.svg';
import { ReactComponent as Twitter } from 'src/assets/icons/wght300/Brands/Twitter.svg';
import { ReactComponent as Telegram } from 'src/assets/icons/wght300/Brands/Telegram.svg';
import { mixins } from 'src/styles/Mixin';
import { FooterData } from 'src/data/footer';

type RemindDataProps = SelectObject<FooterData, 'remindData'>;
type ContactDataProps = SelectObject<FooterData, 'contactData'>;
type ShopAndServiceDataProps = SelectObject<FooterData, 'shopAndServiceDate'>;
type AboutDataProps = SelectObject<FooterData, 'aboutdata'>;

function Footer({ footerData }: { footerData: FooterData }) {
  const { remindData, contactData, shopAndServiceDate, aboutdata } = footerData;
  return (
    <StyledFooter>
      <Remind remindData={remindData} />
      <Contact contactData={contactData} />
      <ShopAndService shopAndServiceDate={shopAndServiceDate} />
      <About aboutdata={aboutdata} />
    </StyledFooter>
  );
}

function Remind({ remindData }: { remindData: RemindDataProps }) {
  return (
    <StyledFooterInfo>
      <Text as="p" typography="Body">
        {remindData.content}
      </Text>
      <StyledForm>
        <TextField placeholder={remindData.input.placeholder} />
        <Buttons
          label={remindData.button.label}
          buttonType="contained"
        ></Buttons>
      </StyledForm>
    </StyledFooterInfo>
  );
}

function Contact({ contactData }: { contactData: ContactDataProps }) {
  return (
    <StyledFooterInfo>
      <ContactInfos title="Contact Us" infos={contactData.contactInfo} />
      <IconInfos
        title="Follow Us"
        icons={[Instagram, Pinterest, Facebook, Twitter, Telegram]}
      />
    </StyledFooterInfo>
  );
}

function ShopAndService({
  shopAndServiceDate,
}: {
  shopAndServiceDate: ShopAndServiceDataProps;
}) {
  return (
    <StyledFooterInfo>
      <PublicInfos title="Shop" infos={shopAndServiceDate.shopInfos} />
      <PublicInfos title="Service" infos={shopAndServiceDate.serviceInfo} />
    </StyledFooterInfo>
  );
}

function About({ aboutdata }: { aboutdata: AboutDataProps }) {
  return (
    <StyledFooterInfo>
      <PublicInfos title="About Us" infos={aboutdata.aboutInfos} />
    </StyledFooterInfo>
  );
}

function ContactInfos({
  title,
  infos,
}: {
  title: string;
  infos: { title: string; info: string }[];
}) {
  return (
    <>
      <Text as="h5" typography="Heading5" color="gray">
        {title}
      </Text>
      {infos.map(info => (
        <StyledInfos>
          <Text as="h6" typography="Caption" color="gray">
            {info.title}
          </Text>
          <Text as="p" typography="Links">
            {info.info}
          </Text>
        </StyledInfos>
      ))}
    </>
  );
}

function IconInfos({
  title,
  icons,
}: {
  title: string;
  icons: React.FC<React.SVGProps<SVGSVGElement>>[];
}) {
  return (
    <>
      <Text as="h5" typography="Heading5" color="gray">
        {title}
      </Text>
      <StyledIcons>
        {icons.map(icon => (
          <Icon as={icon} />
        ))}
      </StyledIcons>
    </>
  );
}

function PublicInfos({ title, infos }: { title: string; infos: string[] }) {
  return (
    <>
      <Text as="h5" typography="Heading5" color="gray">
        {title}
      </Text>
      <StyledInfos>
        {infos.map(info => (
          <Text as="p" typography="Links">
            {info}
          </Text>
        ))}
      </StyledInfos>
    </>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto;
  ${mixins.border({ width: 'right' })}

  & > div {
    ${mixins.border({ width: 'leftAndBottom' })}
    padding: 40px;
  }
`;

const StyledFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledIcons = styled.div`
  display: flex;
  gap: 32px;
`;

const StyledInfos = styled(StyledFooterInfo)`
  gap: 8px;
`;

const StyledForm = styled(StyledFooterInfo)`
  gap: 16px;
`;

export default Footer;
