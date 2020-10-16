import React, {useState} from 'react';
import './App.scss';
import Welcome from '../layouts/Welcome/Welcome';
import Application from '../layouts/Application/Application';

function App() {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(true);
  }

  return (
    <>
      {change ? <Application /> : <Welcome click={handleChange}/>}
    </>
  );
}

export default App;