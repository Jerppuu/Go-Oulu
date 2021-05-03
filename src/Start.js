import React, {Component} from 'react';

class Start extends Component {
    render() {
        return (
            <div className="startGrid">
                <header>
                    Go@Oulu
                </header>

                <div className="startButtons">
                    <button className="button">Rekisteröidy?</button>
                    <button className="button">Kirjaudu</button>
                    <button className="button">Jatka kirjautumatta</button>


                </div>

            </div>
        );
    }
}

export default Start;