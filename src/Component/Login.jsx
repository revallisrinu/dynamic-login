import React, { useState } from 'react'
import "./Login.css"
import mail_icon from "./Assests/mail.jpeg"
import profile_icon from "./Assests/profile.png"
import lock from "./Assests/lock.png"

let Login=()=>{

    let [action,setAction]=useState('Login')
  
    return <>
    <div id="container">
        <div id="signup">
            <div id="header">
                <div className="nav">
                   <div id="text">{action}</div>
                   <div id="underline"></div>
                 </div>

                {action==='Login'?<div></div>:<div className="input_name">
                    <img src={profile_icon} id="mail_icon" />
                    <input type="text" placeholder="Name" id="username"/>
                </div>}
                

                <div className="input_mail">
                    <img src={mail_icon} id="user_icon" />
                    <input type="email" id="email" placeholder="enter mail"/>
                </div>

                <div className="input_password">
                  <img src={lock} id="lock_icon" />
                  <input type="password" id="password" placeholder="enter password"/>
                </div>
              
               {action==='Sign Up'?<div></div>: <div className="forgotpassword">Forgot-Password?<a href="">click-Here</a></div>}
               

                <div id='submit-container'>
                    <div className={action==="Login"? "submit gray":"submit"}
                    onClick={()=>{setAction("Sign Up")}}>sign up</div>
                    
                    <div className={action==='Sign Up'? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
              
            </div>
        </div>
    </div>
        
    </>
}

export default Login