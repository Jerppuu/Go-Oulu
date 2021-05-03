import React, {useState} from 'react';
import Start from "./Start";
import Register from "./Register";
import Login from "./Login";
import Map from "./Map";
import Places from "./Places";
import Profile from "./Profile";

function App() {

    const [view, setView] = useState("Start");

    function switchView (View_var){
        setView(View_var);
        console.log(view);
    }


    return (
        <div>
            <div>

                <div hidden={view !== "Start"}>
                    <Start switchView = {switchView}/>
                </div>

                <div hidden={view !== "Register"}>
                    <Register switchView = {switchView}/>
                </div>

                <div hidden={view !== "Login"}>
                    <Login switchView = {switchView}/>
                </div>

                <div hidden={view !== "Map"}>
                    <Map switchView = {switchView}/>
                </div>

                <div hidden={view !== "Places"}>
                    <Places switchView = {switchView}/>
                </div>

                <div hidden={view !== "Profile"}>
                    <Profile switchView = {switchView}/>
                </div>
            </div>

        </div>
    );
}

export default App;