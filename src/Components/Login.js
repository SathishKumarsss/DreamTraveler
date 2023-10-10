import React, { useState } from 'react';

import style from '../Components/Login.module.css';


function Login() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
  setPopupVisible(!isPopupVisible);
  };
  return (
  <div>
  <button onClick={togglePopup} className={style.button}>Click To Login</button>
  {isPopupVisible && (
  <div className={style.popup}>
  <div className={style.popupcontent}>
  <h2>Enter Your Details</h2>
  <form>

  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="number" placeholder="Enter Your No"/>
  <h4><a></a></h4>
 <button type="submit" className={style.submit}>Enter</button>
  </form>
  <button onClick={togglePopup}className={style.close}>Close</button>
  </div>
  </div>
  )}
  </div>
  );
  }
  export default Login;
