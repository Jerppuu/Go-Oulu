import React from 'react';

function Login(props) {
    return (
        <div className="loginRegisterGrid">
            <header>
                Go@Oulu
            </header>

            <div className="loginInput">
                <input type="text" name="username" placeholder="Käyttäjätunnus"/>
                <input type="text" name="Password" placeholder="Salasana"/>
            </div>

            <div className="loginRegisterButtons">
                <button className="button" disabled={true}>Kirjaudu</button>
                <button onClick={()=> props.switchView("Start")}  className="button">Takaisin</button>


            </div>

        </div>
    );
}

export default Login;