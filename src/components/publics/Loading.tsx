import styled from 'styled-components';
import { mixins } from '@styles/Mixin';

const Loading = () => {
  return (
    <LoadingWrapper>
      잠시만 기다려 주세요 로딩중입니다.
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  ${mixins.flexBox({ align: 'start', direction: 'column' })}
  ${({ theme }) => theme.typography.Heading5}
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 80px;
  height: 160px;
  gap: 10px;
`;

const LoadingText = styled.p`
  ${({ theme }) => theme.typography.Heading6}
`;

export default Loading;
