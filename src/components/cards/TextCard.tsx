import styled from 'styled-components';

interface TextCardProps {
  title: string;
  children: string;
  label?: string;
}

const TextCard = ({ title, children, label = '' }: TextCardProps) => {
  return (
    <TextCardWrapper>
      {label && <TextCardLabel>{label}</TextCardLabel>}
      <TextCardTitle>{title}</TextCardTitle>
      {children}
    </TextCardWrapper>
  );
};

const TextCardWrapper = styled.div`
  ${({ theme }) => theme.typography.Body}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;
  height: auto;
  padding: 80px;
`;

const TextCardLabel = styled.p`
  ${({ theme }) => theme.typography.Caption}
  margin-bottom: 24px;
`;

const TextCardTitle = styled.h3`
  ${({ theme }) => theme.typography.Heading3}
  margin-bottom: 16px;
`;

export default TextCard;
