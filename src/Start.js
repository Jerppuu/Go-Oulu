import React from 'react';
import Logo from "./extras/logo.PNG"

function Start(props) {
    return (
        <div>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
            <div>
                <img src={Logo} alt="Logo" className="logo"/>

                <div className="startButtons">
                    <button onClick={()=> props.switchView("Register")} className="button">Rekisteröidy</button>
                    <button onClick={()=> props.switchView("Login")} className="button">Kirjaudu</button>
                    <button onClick={()=> props.switchView("Map")} className="button">Jatka kirjautumatta</button>
                </div>
            </div>
        </div>
        );
}

export default Start;