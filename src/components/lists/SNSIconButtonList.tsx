import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import IconButton from '@components/buttons/IconButton';
import { SNSIconDatas } from '@data/buttonDatas';
import { mixins } from '@styles/Mixin';

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
          ariaLabel={SNSName}
        />
      ))}
    </SNSIconButtonListWrapper>
  );
};

const SNSIconButtonListWrapper = styled.div`
  ${mixins.flexBox({ justify: 'space-between' })}
`;

export default SNSIconButtonList;
