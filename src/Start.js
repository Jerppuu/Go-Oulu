import React from 'react';

function Start(props) {
    return (
        <div className="startGrid">
            <header>
                Go@Oulu
            </header>

            <div className="startButtons">
                <button onClick={()=> props.switchView("Register")} className="button">Rekisteröidy</button>
                <button onClick={()=> props.switchView("Login")} className="button">Kirjaudu</button>
                <button onClick={()=> props.switchView("Map")} className="button">Jatka kirjautumatta</button>


            </div>

        </div>
        );
}

export default Start;