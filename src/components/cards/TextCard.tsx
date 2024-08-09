import styled from 'styled-components';

interface TextCardProps {
  title: string;
  children: string;
  label?: string;
}

const TextCard = ({ title, children, label = '' }: TextCardProps) => {
  return (
    <TextCardWrapper className="bb-1 p-10">
      {label ? (
        <TextCardLabelWrapper className="mb-3">{label}</TextCardLabelWrapper>
      ) : (
        <></>
      )}
      <TextCardTitle>{title}</TextCardTitle>
      {children}
    </TextCardWrapper>
  );
};

const TextCardWrapper = styled.section`
  ${({ theme }) => theme.typography.Body}
  width: 100%;
  height: auto;
`;

const TextCardLabelWrapper = styled.p`
  ${({ theme }) => theme.typography.Caption}
`;

const TextCardTitle = styled.h3`
  ${({ theme }) => theme.typography.Heading3}
  margin-bottom: 16px;
`;

export default TextCard;
