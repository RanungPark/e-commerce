import styled from 'styled-components';
import IconButton from '@components/buttons/IconButton';
import { mixins } from '@styles/Mixin';
import { v4 as uuidv4 } from 'uuid';
import { SNSIconDatas } from '@data/buttonDatas';

const SNSIconButtonList = () => {
  return (
    <SNSIconButtonListWrapper>
      {SNSIconDatas.map(({ IconComponent, SNSName }) => (
        <IconButton
          key={uuidv4()}
          onClick={() => {
            console.log(`go to ${SNSName}`);
          }}
          IconComponent={IconComponent}
        />
      ))}
    </SNSIconButtonListWrapper>
  );
};

const SNSIconButtonListWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;

export default SNSIconButtonList;
