import React, { useState } from 'react';

import style from '../Components/Model.module.css';


function Model() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
  setPopupVisible(!isPopupVisible);
  };
  return (
  <div>
  <button onClick={togglePopup} className={style.book}>Open Booking Form</button>
  {isPopupVisible && (
  <div className={style.popup}>
  <div className={style.popupcontent}>
  <h2>Booking Form</h2>
  <form>

  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="number" placeholder="Enter Your No"/>
<input type="datetime-local" placeholder="Date"/>
<input type="checkbox"/>Men
<input type="checkbox"/>Women
<input type="checkbox"/>Child
<select>
<option>Dubai</option>
<option>Thailand</option>
<option>Paris</option>
<option>America</option>
<option>Bora Bora</option>
<option>Hong Kong</option>
</select>
<input type="text" placeholder="Enter Your Current Location"/>
 <button type="submit" className={style.submit} onClick={()=>alert('Thanks For Your Tiket Booking Team Will Call You And Explain Other Details.')}>Submit</button>
  </form>
  <button onClick={togglePopup}className={style.close}>Close</button>
  </div>
  </div>
  )}
  </div>
  );
  }
  export default Model;
