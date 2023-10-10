import React from "react";
import service1 from '../assets/service1.jpeg';
import service2 from '../assets/service2.jpeg';
import service3 from '../assets/service3.jpeg';
import service4 from '../assets/service4.png';
import style from './Services.module.css';
import { Element } from "react-scroll";
function Myservice(){
    const data=[{
        icon:service1,
        title:"Get Best Price",
        subTitle:"Pay through the best price  for money expolre them to advice",
    },
    {
        icon:service2,
        title:"Covid 19",
        subTitle:"All safety precaution to prevent them of thse journey",
    },
    {
        icon:service3,
        title:"Best Payment Method",
        subTitle:"To apply any way to refund money or everythig",
    },
    {
        icon:service4,
        title:"Choose your location",
        subTitle:"Enjoy to choose location and go for your jorney to spend time",
    },


];
    return(<Element className={style.section}>
        {
            data.map((service)=>{
                return(<div className={style.service}>
                    <div className={style.icon}>
                        <img className={style.img}  src={service.icon} alt=""/>
                    </div>
                    <h3 className={style.service}>{service.title}</h3>
                    <p className={style.service}>{service.subTitle}</p>
                </div>)
            })
        }

    </Element>)
}
export default Myservice;