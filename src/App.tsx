import React from 'react';
import TextIconButton from './components/common/Buttons/TextIconButton';
import Button from './components/common/Buttons/Button';
import RadioButton from './components/common/Buttons/RadioButton';
import Checkbox from './components/common/Buttons/Checkbox';
import StepIndicator from './components/common/Navigation/StepIndicator';
import NavbarLink from './components/common/Navigation/NavbarLink';
import Navbar from './components/common/Navigation/Navbar';
import BenefitBlock from './components/common/Cards/BenefitBlock';
import CardCategory from './components/common/Cards/CardCategory';
import CardItem from './components/common/Cards/CardItem';
import AdditionalProductCard from './components/common/Cards/AdditionalProductCard';
import PlanCard from './components/common/Cards/PlanCard';
import snowfall from './assets/image/flower/Snowfall.jpg';
import steelVase from './assets/image/other/Steel Vase.jpg';
import ThreeClassic from './assets/image/flower/Three Classic.jpg';
import DropdownFAQ from './components/common/Dropdowns/DropdownFAQ';
import Dropdown from './components/common/Dropdowns/Dropdown';
import InputText from './components/common/Inputs/InputText';
import InputSelect from './components/common/Inputs/InputSelect';
import DatePickerComponent from './components/common/Inputs/DatePickerComponent';
import InputSteppers from './components/common/Inputs/InputSteppers';

const App = () => {
  const planCardList = [
    'Price $45',
    'Free Delivery',
    'Best for a budget',
    'Glass vase with first delivery',
    'Save up to 25%',
    'Save up to 25%',
  ];

  const inputSelectList = ['Option A', 'Option B', 'Option C', 'Option D'];

  return (
    <>
      <Button label="Button" />
      <Button colorType="secondary" label="Button" arrowIcon="left" />
      <Button
        colorType="tertiary"
        label="Button"
        arrowIcon="right"
        isDisabled={true}
      />
      <TextIconButton label="Button" />
      <TextIconButton
        label="Button"
        arrowIcon="leftIcon"
        textOrIcon="onlyIcon"
      />
      <TextIconButton label="Button" arrowIcon="leftIcon" />
      <TextIconButton label="Button" arrowIcon="withText" isDisabled={true} />
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" />
      <RadioButton label="Radio Button" />
      <RadioButton label="Radio Button" />

      <InputText
        label="Label"
        placeholder="Placeholder"
        textHelper="Text helper"
      />
      <InputSelect options={inputSelectList} />
      <DatePickerComponent />
      <InputSteppers />

      <DropdownFAQ
        label="How often will I get a new bouquet?"
        replay="Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. What's more, you can also pay for your subscription as you go or pay entirely upfront. Choose any combination that works for you!"
      />
      <Dropdown label="Dropdown closed" />

      <BenefitBlock
        label="Stylish bouquets by florists"
        description="The task of the organization, especially the strengthening and development of the structure allows us to assess the importance of the directions of progressive development. "
      />
      <CardCategory label="Fresh Flowers" buttonText="Button" />
      <CardItem
        bgImg={snowfall}
        label="Bouquets Fresh Flowers"
        price="price 70$"
      />
      <PlanCard
        productImg={ThreeClassic}
        label="Classic"
        lists={planCardList}
      />
      <AdditionalProductCard
        productImg={steelVase}
        label="No Vase"
        price="$0"
      />

      <NavbarLink label="Link" />
      <Navbar
        label1st="Shop"
        label2ed="Contact"
        label3rd="Sgin in"
        label4th="Cart"
      />
      <StepIndicator />
    </>
  );
};

export default App;
