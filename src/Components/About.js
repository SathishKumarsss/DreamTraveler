
import React from 'react';
import style from './About.module.css';
import ImgAb from '../assets/ImgAb.jpg';
function AboutUs() {
  return (<section className={style.aboutus}>
          
  <div className={style.about}>
    <img src={ImgAb} className={style.img} alt='pic'/>
    <div className={style.text}>  
      <h2>About Us</h2>
      <h5>Welcome TO DreamTraveler<span>Enjoy To Book Your Journey</span></h5>
      <p>Thankyou for visit our website and this is used to Book a Tiket For 24*7 And Any Quries Means Call Our Customer Care No:79922-55678.</p>
      
    </div>
  </div>
</section>

  );
};

export default AboutUs;
