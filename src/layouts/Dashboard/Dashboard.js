import React, { useState } from 'react';
import './Dashboard.scss';

import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import Copyright from '../../components/Copyright/Copyright';
import Nav from '../../components/Nav/Nav';
import SelectColor from '../../components/Main/SelectColor';
import SelectElements from '../../components/Main/SelectElements';
import SelectMounting from '../../components/Main/SelectMounting';
import SelectOtherElements from '../../components/Main/SelectOtherElements';
import SelectShipping from '../../components/Main/SelectShipping';
import UserDataForm from '../../components/Main/UserDataForm';
import OrderSummary from '../../components/Main/OrderSummary';
import UserConfiguration from '../../components/Sidebar/UserConfiguration';
import Price from '../../components/Price/Price';

function Dashboard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [selectedElements, setSelectedElements] = useState(null);
  const [selectedMounting, setSelectedMounting] = useState(null);
  const [mainColor, setMainColor] = useState("");


  const nextStep = () => {
    if (currentStep <= 6) {
      setCurrentStep((prevState) => prevState + 1)
    }
  };
  const prevStep = () => {
    if (currentStep !== 1) {
      setCurrentStep((prevState) => prevState - 1)
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-grid animate">
        <div className="dashboard__logo">
          <Logo />
          <p>| Konfigurator</p>
        </div>
        <div className="dashboard__header">
          <Header step={currentStep} />
        </div>
        <div className="dashboard__sidebar">
          <UserConfiguration
            color={selectedColor}
            elements={selectedElements}
            mounting={selectedMounting} />
        </div>
        <div className="dashboard__price">
          <Price price={currentPrice} setPrice={setCurrentPrice} />
        </div>
        <div className="dashboard__main">
          {currentStep === 1 && <SelectColor
            color={selectedColor}
            onSelection={setSelectedColor}
            setPrice={setCurrentPrice} />}
          {currentStep === 2 && <SelectElements
            elements={selectedElements}
            setSelectedElements={setSelectedElements}
            setPrice={setCurrentPrice} />}
          {currentStep === 3 && <SelectMounting
            mounting={selectedMounting}
            onSelectionMounting={setSelectedMounting}
            setPrice={setCurrentPrice} />}
          {currentStep === 4 && <SelectOtherElements mainColor={mainColor} setMainColor={setMainColor} />}
          {currentStep === 5 && <SelectShipping />}
          {currentStep === 6 && <UserDataForm />}
          {currentStep === 7 && <OrderSummary />}
        </div>
        <div className="dashboard__footer">
          <Copyright />
        </div>
        <div className="dashboard__nav">
          <Nav nextStep={nextStep} prevStep={prevStep} step={currentStep} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;