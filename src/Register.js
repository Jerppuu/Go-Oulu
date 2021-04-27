import React, {Component} from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="loginRegisterGrid">
                    <header>
                        Go@Oulu
                    </header>

                    <div className="loginInput">
                        <input type="text" name="username" placeholder="Käyttäjätunnus"/>
                        <input type="text" name="Password" placeholder="Salasana"/>
                    </div>

                    <div className="loginRegisterButtons">
                        <button className="button">Rekisteröidy</button>
                        <button className="button">Takaisin</button>


                    </div>

                </div>

            </div>
        );
    }
}

export default Register;