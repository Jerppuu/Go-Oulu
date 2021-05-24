import React, {useState} from 'react';
import Start from "./Start";
import Register from "./Register";
import Login from "./Login";
import Map from "./Map";
import Places from "./Places";
import Profile from "./Profile";

function App() {

    const [view, setView] = useState("Start");

    //TODO: Add all places and descriptions for them
    const [markers, setMarkers] = useState([
        {lat: 65.012804, lng: 25.466924, name: "Kauppuri 5", description:"expample description", openingHours: "10:00-12:00", isVisited: false},
        {lat: 65.010717, lng: 25.469784, name: "45 Special", description:"expample description", openingHours: "10:00-12:00", isVisited: false},
        {lat: 65.013280, lng: 25.464708, name: "Toripoliisi", description:"expample description", openingHours: "10:00-12:00", isVisited: false},
    ]);

    function switchView (View_var){
        setView(View_var);
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
                    <Map switchView = {switchView} markers={markers} setMarkers={setMarkers}/>
                </div>

                <div hidden={view !== "Places"}>
                    <Places switchView = {switchView} markers={markers}/>
                </div>

                <div hidden={view !== "Profile"}>
                    <Profile switchView = {switchView}/>
                </div>
            </div>

        </div>
    );
}

export default App;