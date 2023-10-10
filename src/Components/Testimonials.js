import React from "react";
import style from './Testimonials.module.css';
import avatarImage from '../assets/avatarImage.jpg'
function Testimonials(){
    return(<div className={style.main}>
        <div className={style.title}>
            <h2>Happy Customer</h2>
            </div>
            <div className={style.Testimonials}>
                <div className={style.Testimonial}>
                    <p>I Am Very Happy To Go For Dubai.</p>
            <div className={style.info}>
                    <img className={style.img} src={avatarImage} alt=""/>
                    <div className={style.details}>
                        <h4>Praveen</h4>
                        <span className={style.span}>Bussiness Analiyst</span>
                    </div>
                    </div>
                    </div>
                    <div className={style.Testimonial}>
                    <p>Paris Is My Dream Places Thanks your Packages.</p>
            <div className={style.info}>
                    <img className={style.img} src={avatarImage} alt=""/>
                    <div className={style.details}>
                        <h4>Manoj</h4>
                        <span className={style.span}>IT Employee.</span>
                    </div>
                    </div>
                    </div>
                    <div className={style.Testimonial}>
                    <p>I Spend My Time One family Thailand is Wonderfull Experience.</p>
            <div className={style.info}>
                    <img className={style.img} src={avatarImage} alt=""/>
                    <div className={style.details}>
                        <h4>Suresh</h4>
                        <span className={style.span}>Bussiness Man</span>
                    </div>
                    </div>
                    </div>
            </div>
        
    </div>)
}
export default Testimonials;