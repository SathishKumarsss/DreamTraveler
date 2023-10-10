import React from "react";
import BackgroundTop from '../assets/BackgroundTop.jpg'
import style from './Imagebar.module.css';
function ImgTopbar(){
    return(<section  className={style.Imgbar}>
        <div className={style.background}>
           <img className={style.img}  src={BackgroundTop} alt=""/>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    <h1 className={style.h}>Travel To Explore</h1>
                    <p className={style.p}>You Enjoy Your Vaccation Travel in our Website Visit to Go YOUR Dream Places.</p>

                </div>

<div className={style.search}>
    <div className={style.container}>
        <label htmlFor="" className={style.label}>Where You Want To Go</label>
<input type="text" placeholder="Search Your Location" className={style.input}/>
    </div>
    <div className={style.container}>
        <label htmlFor="" className={style.label}>Check-in</label>
<input type="date" className={style.input}/>
    </div>
    <div className={style.container}>
        <label htmlFor="" className={style.label}>Check-out</label>
<input type="date" className={style.input}/>
    </div>
    <button className={style.MyButton}>Explore Now</button>
    </div>
    
            </div>

    </section>
    )
}

export default ImgTopbar;