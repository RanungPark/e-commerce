import React from 'react';
import TextIconButton from './components/TextIconButton';
import Button from './components/Button';
import RadioButton from './components/RadioButton';
import Checkbox from './components/Checkbox';
import StepIndicator from './components/StepIndicator';
import NavbarLink from './components/NavbarLink';

const App = () => {
  return (
    <div>
      <Button $colorType="primary" text="Button"></Button>
      <TextIconButton></TextIconButton>
      <RadioButton></RadioButton>
      <RadioButton></RadioButton>
      <Checkbox></Checkbox>
      <Checkbox></Checkbox>
      <StepIndicator></StepIndicator>
      <NavbarLink></NavbarLink>
    </div>
  );
};

export default App;
