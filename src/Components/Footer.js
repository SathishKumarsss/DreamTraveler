import React from 'react';
import style from './Footer.module.css';


function Footer() {
  return (
    <div className={style.footercontainer}>
      <section className={style.footersubscription}>
        <p className={style.footersubscriptionheading}>
          Happy to Book Your Tikets And Go To Your Journey.
        </p>
        <p className={style.footersubscriptiontext}>
         Subscribe Of Website
        </p>
        <div className={style.inputareas}>
          <form>
            <input
              className={style.footerinput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className={style.btns}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className={style.footerlinks}>
        <div className={style.footerlinkwrapper}>
          <div className={style.footerlinkitems}>
            <h2>About Us</h2>
            <a href='#'>Offers</a>
            <a href='#'>Help us</a>
            <a href='#'>Careers</a>
            <a href='#'>Details</a>
            <a href='#'>Terms of Service</a>
          </div>
          <div className={style.footerlinkitems}>
            <h2>Contact Us</h2>
            <a href='#'>Contact</a>
            <a href='#'>Support</a>
            <a href='#'>Destinations</a>
            <a href='#'>Sponsorships</a>
          </div>
        </div>
        <div className={style.footerlinkwrapper}>
          <div className={style.footerlinkitems}>
            <h2>Videos</h2>
            <a href='#'>Upload Your Videos</a>
            <a href='#'>How To Apply</a>
            <a href='#'>Teams</a>
            <a href='#'>Our Events</a>
          </div>
          <div className={style.footerlinkitems}>
            <h2>Social Media</h2>
            <a href='#'><i class="fa-brands fa-square-instagram"></i>Instagram</a>
            <a href='#'><i class="fa-brands fa-facebook"></i>Facebook</a>
            <a href='#'><i class="fa-brands fa-youtube"></i>Youtube</a>
            <a href='#'><i class="fa-brands fa-x-twitter"></i>Twitter</a>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Footer;