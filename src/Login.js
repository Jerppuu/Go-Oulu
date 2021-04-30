import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
                <div className="loginRegisterGrid">

                    <header>
                        Logo
                    </header>

                    <div className="loginInput">
                        <input type="text" name="username" placeholder="Käyttäjätunnus"/>
                        <input type="text" name="Password" placeholder="Salasana"/>
                    </div>

                    <div className="loginRegisterButtons">
                        <button className="button">Kirjaudu</button>
                        <button className="button">Takaisin</button>


                    </div>
                    <div className="footer">

                    </div>

                </div>

        );
    }
}

export default Login;