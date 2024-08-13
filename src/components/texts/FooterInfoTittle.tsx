import styled from 'styled-components';

interface FooterInfoTittleProps {
  children: string;
}

const FooterInfoTittle = ({ children }: FooterInfoTittleProps) => {
  return <FooterInfoTittleWrapper>{children}</FooterInfoTittleWrapper>;
};

const FooterInfoTittleWrapper = styled.h5`
  ${({ theme }) => theme.typography.Heading5}
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 24px;
  text-transform: capitalize;
`;

export default FooterInfoTittle;
