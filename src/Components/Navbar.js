import style from './Navbar.module.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Login from './Login';

function Navbar(){
    const [showmodel,setShowmodel]=useState(false); 
       
return(<>
    <nav className={style.nav}>
        <div className={style.brand}>
            <div className={style.container}>
<img className={style.img} src={logo} alt=""/>
    DreamTraveler
</div>
<div className="toggle"></div>
        </div>
        <ul>
        <Link to="Imagebar" className={style.a}>
                <li >Booking</li>
                </Link>
             <Link to="Services" className={style.a}>
                <li >Services</li>
                </Link>
             <Link to="Places" className={style.a}>
                <li >Destination</li>
                </Link>
             <Link to="Testimonials" className={style.a}><li >Review</li></Link>
             <Link to="About" className={style.a}><li >About</li></Link>
             <Link to="Footer" className={style.a}><li >Contact</li></Link>
            
            
        </ul>
        <button className={style.button}onClick={()=>setShowmodel(true)}>Login</button>
        {showmodel &&(
            <Login title={<p>Hello</p>}
            content={<p>hello</p>}
            close={setShowmodel}
            />
                
            
        )}
 
        
    </nav>
    </>)
}


export default Navbar;