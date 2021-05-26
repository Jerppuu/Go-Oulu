import React from 'react';
import Logo from "./Icons/logo.PNG";

function Register(props) {
    return (
        <div>
            <img src={Logo} alt="Logo" className="logo"/>

            <div className="loginRegisterInput">
                <input type="text" name="username" placeholder="Käyttäjätunnus"/>
                <input type="text" name="Password" placeholder="Salasana"  style={{marginTop: "15px"}}/>
            </div>

            <div className="loginRegisterButtons">
                <button className="button" disabled={true} >Rekisteröidy</button>
                <button onClick={()=> props.switchView("Start")}  className="button">Takaisin</button>
            </div>



        </div>
    );
}

export default Register;