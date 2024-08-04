import NavigationButton from '@components/buttons/NavigationButton';
import PrimaryButton from '@components/buttons/PrimaryButton';
import TextButton from '@components/buttons/TextButton';
import Checkbox from '@components/selects/Checkbox';
import RadioButton from '@components/selects/RadioButton';
import DefaultTextField from '@components/textfields/DefaultTextField';
import { mixins } from '@styles/Mixin';
import styled from 'styled-components';
import { ReactComponent as Menu } from '@assets/icons/wght300/Menu.svg';
import NavigationBar from '@components/utilities/NavigationBar';
import BreadCrumb from '@components/utilities/BreadCrumb';
import Stepper from '@components/utilities/Stepper';
import TextCard from '@components/cards/TextCard';
import ActionCard from '@components/cards/ActionCard';
import PrimaryImageCard from '@components/cards/PrimaryImageCard';
import { IMG_PATH } from '@constants/imgPath';
import SecondaryImageCard from '@components/cards/SecondaryImageCard';
import CompleteTextFiled from '@components/textfields/CompleteTextFiled';
import Accordion from '@components/utilities/Accordion';
import ProductCard from '@components/cards/ProductCard';
import DatePicker from '@components/utilities/DatePicker';
import SelectBox from '@components/selects/SelectBox';
import ProductCardInfo from '@components/texts/ProductCardInfo';
import ProductCardInfoList from '@components/lists/ProductCardInfoList';
import { ReactComponent as Check } from '@assets/icons/wght300/Check.svg';
import SelectBoxOption from '@components/texts/SelectBoxOption';
import SelectBoxOptionList from '@components/lists/SelectBoxOptionList';
import { useState } from 'react';
import CheckboxGroup from '@components/groups/CheckboxGroup';
import RadioButtonGroup from '@components/groups/RadioButtonGroup';

const TestPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [stepperValue, setStepperValue] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [selectCheckboxValue, setSelectCheckboxValue] = useState('');
  const [selectCheckboxGroupValue, setSelectCheckboxGroupValue] = useState<
    string[]
  >([]);
  const [selectRadioButtonValue, setSelectRadioButtonValue] = useState('');
  const [selectRadioButtonGroupValue, setSelectRadioButtonGroupValue] =
    useState('');

  const handleMinusClick = () => {
    setStepperValue(prevValue => Math.max(prevValue - 1, 0));
  };

  const handlePlusClick = () => {
    setStepperValue(prevValue => prevValue + 1);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  console.log(`
      selectValue: ${selectValue}
      selectedDate: ${selectedDate}
      stepperValue: ${stepperValue}
      selectCheckboxValue: ${selectCheckboxValue}
      selectCheckboxGroupValue: ${selectCheckboxGroupValue}
      selectRadioButtonValue: ${selectRadioButtonValue}
      selectRadioButtonGroupValue: ${selectRadioButtonGroupValue}
      `);

  return (
    <TestPageWrapper>
      <PrimaryButton
        primaryButtontheme="primary"
        onClick={() => {
          console.log('primarybuttonclick');
        }}
        hasLeftIcon={true}
        CustomButton={Check}
      >
        button
      </PrimaryButton>

      <TextButton
        onClick={() => {
          console.log('textbuttonclick');
        }}
      >
        Button
      </TextButton>

      <Checkbox isGrop={false} onChange={setSelectCheckboxValue}>
        Checkbox
      </Checkbox>

      <CheckboxGroup
        label="Checkbox Grop"
        values={selectCheckboxGroupValue}
        onChange={setSelectCheckboxGroupValue}
      >
        <Checkbox>Checkbox1</Checkbox>
        <Checkbox>Checkbox2</Checkbox>
        <Checkbox>Checkbox3</Checkbox>
      </CheckboxGroup>

      <RadioButton isGrop={false} onChange={setSelectRadioButtonValue}>
        Radio Button
      </RadioButton>

      <RadioButtonGroup
        label="Radio Button Grop"
        value={selectRadioButtonGroupValue}
        onChange={setSelectRadioButtonGroupValue}
      >
        <RadioButton>Radio Button1</RadioButton>
        <RadioButton>Radio Button2</RadioButton>
        <RadioButton>Radio Button3</RadioButton>
      </RadioButtonGroup>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <DefaultTextField
          inputState="default"
          hasHelpMessage={true}
          helpMessage="asf"
        >
          <input />
        </DefaultTextField>
        <DefaultTextField
          inputState="error"
          hasHelpMessage={true}
          helpMessage="asf"
          hasLabel={true}
          label="Label"
          htmlFor="id"
        >
          <input />
        </DefaultTextField>
        <DefaultTextField
          inputState="success"
          hasHelpMessage={true}
          helpMessage="asf"
        >
          <input />
        </DefaultTextField>
      </div>

      <NavigationButton
        onClick={() => {
          console.log('네비게이션 버튼 클릭');
        }}
      >
        Link
      </NavigationButton>

      <NavigationButton
        onClick={() => {
          console.log('네비게이션 아이콘 버튼 클릭');
        }}
        hasIcon={true}
        IconComponent={Menu}
      />

      <NavigationBar onMenuClick={() => {}} onCartClick={() => {}} />

      <BreadCrumb
        onClick={() => {
          console.log('브라운크럼 클릭');
        }}
      >
        infomation
      </BreadCrumb>

      <Stepper
        value={stepperValue}
        onClickMinus={handleMinusClick}
        onClickPlus={handlePlusClick}
      />

      <TextCard title="Stylish bouquets by florists">
        The task of the organization, especially the strengthening and
        development of the structure allows us to assess the importance of the
        directions of progressive development.
      </TextCard>

      <ActionCard
        onClick={() => {
          console.log('액션카드 클릭');
        }}
        buttonText="Button"
      >
        Fresh Flowers
      </ActionCard>
      <div>
        <PrimaryImageCard
          onClick={() => {
            console.log('이미지 카드 클릭');
          }}
          imgPath={IMG_PATH.FLOWER.BlazingBlassoms}
          alt="Bouquets Fresh Flowers"
          price={70}
        >
          Bouquets Fresh Flowers
        </PrimaryImageCard>
      </div>

      <SecondaryImageCard
        onClick={() => {
          console.log('이미지 카드 클릭');
        }}
        imgPath={IMG_PATH.OTHER.GlassVase}
        alt="GlassVase"
        price={0}
      >
        No Vase
      </SecondaryImageCard>

      <CompleteTextFiled
        onClick={() => {
          console.log('텍스트 필드 완성 클릭');
        }}
      >
        Dropdown closed
      </CompleteTextFiled>

      <Accordion title="How often will I get a new bouquet?">
        Our subscriptions allow you to select a delivery frequency that best
        suits your needs - either weekly, bi-weekly, or monthly. You can also
        choose the number of deliveries for your subscription. What's more, you
        can also pay for your subscription as you go or pay entirely upfront.
        Choose any combination that works for you!
      </Accordion>

      <ProductCard
        alt="부케"
        imgPath={IMG_PATH.FLOWER.ThreeClassic}
        infoItems={[
          'Price $45',
          'Free Delivery',
          'Best for a budget',
          'Glass vase with first delivery',
          'Save up to 25%',
          'Save up to 25%',
        ]}
        onClick={() => {
          console.log('프러덕트 카드 클릭');
        }}
      >
        Classic
      </ProductCard>

      <ProductCardInfo> Price $45</ProductCardInfo>

      <ProductCardInfoList
        infoItems={[
          'Price $45',
          'Free Delivery',
          'Best for a budget',
          'Glass vase with first delivery',
          'Save up to 25%',
          'Save up to 25%',
        ]}
      >
        Classic
      </ProductCardInfoList>

      <DatePicker
        placeholder="Select a date"
        value={selectedDate}
        onChange={handleDateChange}
      />

      <SelectBox
        value={selectValue}
        onChange={setSelectValue}
        options={['Option A', 'Option B', 'Option C', 'Option D', 'Option E']}
        placeholder="- Select -"
      />

      <SelectBoxOption onClick={() => console.log('셀렉트 바스 옵션 클리')}>
        Option A
      </SelectBoxOption>

      <SelectBoxOptionList
        onClick={() => console.log('셀렉트 바스 옵션 클리')}
        options={['Option A', 'Option B', 'Option C', 'Option D', 'Option E']}
      />
    </TestPageWrapper>
  );
};

const TestPageWrapper = styled.div`
  ${mixins.flexBox({ direction: 'column' })}
  gap: 32px;
`;

export default TestPage;
