import React, { useState } from 'react';
import './Dashboard.scss';
import Modal from "../../components/Modal/Modal";
import useModal from '../../components/Modal/useModal';

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
  const [step, setStep] = useState(1);
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [elements, setElements] = useState([{
    id: 1,
    name: "Bucik",
    price: 15,
  }]);
  const [mounting, setMounting] = useState("");
  const { isShowing, toggle } = useModal();

  const toggleSelected = (item) => {
    if (typeof elements) {
      const newElements = elements.filter((element) => {
        return item.id !== element.id
      })
      setElements([...newElements]);
    } else {
      setElements([...elements, item])
    }

    const newElements = elements.filter((element) => {
      return item.id !== element.id
    })
    setElements([...newElements]);
  }



  //SelectOtherElements states
  const [mainColor, setMainColor] = useState("");
  const [spotColors, setSpotColors] = useState("");
  const [theme, setTheme] = useState("");
  const [comment, setComment] = useState("");

  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  const [shipping, setShipping] = useState("");


  //UserDataForm states
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("")
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [shippingName, setShippingName] = useState("")




  const nextStep = () => {
    if (step === 1 && color.length === 0) {
      alert("Nie wybrano koloru")
    } else if (step === 1) {
      setStep((prevState) => prevState + 1)
    }
    if (step === 2 && elements.length === 0) {
      alert("Wybierz co najmniej jeden element")
    } else if (step === 2) {
      setStep((prevState) => prevState + 1)
    }
    if (step === 3 && mounting.length === 0) {
      alert("Wybierz sposób montażu")
    } else if (step === 3) {
      setStep((prevState) => prevState + 1)
    }
    if (step === 4 && mainColor.length === 0) {
      alert("Podaj kolor główny i dodatkowe")
    } else if (step === 4) {
      setStep((prevState) => prevState + 1)
    }
    if (step === 5 && shipping.length === 0) {
      alert("Wybierz sposób wysyłki")
    } else if (step === 5) {
      setStep((prevState) => prevState + 1)
    }
    if (step === 6 && name.length === 0) {
      alert("Podaj swoje dane")
    } else if (step === 6) {
      setStep((prevState) => prevState + 1)
    }
  };

  const prevStep = () => {
    if (step !== 1) {
      setStep((prevState) => prevState - 1)
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-grid animate">
        <div className="dashboard__logo">
          <Logo />
          <p className="logo__title">| Konfigurator</p>
        </div>
        <div className="dashboard__header">
          <Header step={ step } />
        </div>
        <div className="dashboard__sidebar">
          <UserConfiguration
            color={ color }
            elements={ elements }
            mounting={ mounting }
            mainColor={ mainColor }
            spotColors={ spotColors }
            pictures={ pictures }
            shipping={ shipping }
            name={ name }
            adress={ adress }
            postCode={ postCode }
            city={ city }
            email={ email }
            phone={ phone } />
        </div>
        <div className="dashboard__price">
          <Price price={ price } setPrice={ setPrice } />
        </div>
        <div className="dashboard__main">
          { step === 1 &&
            <SelectColor
              color={ color } setColor={ setColor }
              price={ price } setPrice={ setPrice } /> }
          { step === 2 &&
            <SelectElements
              toggleSelected={ toggleSelected }
              elements={ elements } setElements={ setElements }
              price={ price } setPrice={ setPrice } /> }
          { step === 3 &&
            <SelectMounting
              mounting={ mounting } setMounting={ setMounting }
              price={ price } setPrice={ setPrice } /> }
          { step === 4 &&
            <SelectOtherElements
              mainColor={ mainColor } setMainColor={ setMainColor }
              spotColors={ spotColors } setSpotColors={ setSpotColors }
              theme={ theme } setTheme={ setTheme }
              comment={ comment } setComment={ setComment }
              onDrop={ onDrop }
              pictures={ pictures } setPictures={ setPictures } /> }
          { step === 5 && <SelectShipping
            shipping={ shipping } setShipping={ setShipping }
            price={ price } setPrice={ setPrice } /> }
          { step === 6 && <UserDataForm
            name={ name } setName={ setName }
            adress={ adress } setAdress={ setAdress }
            postCode={ postCode } setPostCode={ setPostCode }
            city={ city } setCity={ setCity }
            email={ email } setEmail={ setEmail }
            phone={ phone } setPhone={ setPhone }
            shippingName={ shippingName } setShippingName={ setShippingName }
          /> }
          { step === 7 && <OrderSummary
            price={ price }
            color={ color }
            elements={ elements }
            mounting={ mounting }
            mainColor={ mainColor }
            spotColors={ spotColors }
            comment={ comment }
            pictures={ pictures }
            shipping={ shipping }
            name={ name }
            adress={ adress }
            postCode={ postCode }
            city={ city }
            email={ email }
            phone={ phone }
            shippingName={ shippingName } /> }
        </div>
        <div className="dashboard__footer">
          <Copyright />
        </div>
        <div className="dashboard__nav">
          <Nav nextStep={ nextStep } prevStep={ prevStep } step={ step } toggle={ toggle } />
        </div>
        <Modal
          isShowing={ isShowing }
          hide={ toggle }
        />
      </div>
    </div>
  );
}

export default Dashboard;