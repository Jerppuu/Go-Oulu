import React, {useState} from 'react';
import Start from "./Start";
import Register from "./Register";
import Login from "./Login";
import Map from "./Map";
import Places from "./Places";
import Profile from "./Profile";

import fourtyFiveSpecialPic from "./PlacePictures/fourtyFiveSpecialPic.png"
import ainolanPuistoPic from "./PlacePictures/ainolanPuistoPic.png"
import kauppuri5Pic from "./PlacePictures/kauppuri5Pic.png"
import liikuntaHalliPic from "./PlacePictures/liikuntaHalliPic.png"
import toripolliisiPic from "./PlacePictures/toripolliisiPic.png"
import uniOuluPic from "./PlacePictures/uniOuluPic.png"


function App() {

    const [view, setView] = useState("Start");

    const [markers, setMarkers] = useState([
        {lat: 65.012804, lng: 25.466924,
            name: "Kauppuri 5",
            description:"Ruokatarjoilua opiskelija-arkeen ja juhlaan Oulun keskustassa. Runsailla täytteillä varustetut hampurilaiset auttavat opiskelijaa jaksamaan opiskelijabileistä toiseen siirtymisessä.",
            openingHours: "ma-su 11:00-01:00",
            isVisited: false,
            picture: kauppuri5Pic},

        {lat: 65.010717, lng: 25.469784,
            name: "45 Special",
            description:"45sessa tulevat vastakohdatkin toimeen keskenään, eikä ihmisten sosiaalisella statuksella tai titteleillä ole mitään merkitystä. Tarjolla livemusiikkia, purtavaa ja hyvää menoa. K-18.",
            openingHours: "pe-la 15:00-01:00 (Kööki auki pe 16-22:30 / la 15-22:30)",
            isVisited: false,
            picture: fourtyFiveSpecialPic},

        {lat: 65.013280, lng: 25.464708,
            name: "Toripoliisi",
            description:"Polliisi on kaikkien kaveri. Kohtaamispaikka Oulussa.",
            openingHours: "24/7",
            isVisited: false,
            picture: toripolliisiPic},

        {lat: 65.012650, lng: 25.471390,
            name: "Ainolanpuisto",
            description: "Kaunis ja viehättävä ulkoilukohde keskellä kaupunkia, rentoa menoa ja kiva kahvila.",
            openingHours:"24/7",
            isVisited: false,
            picture: ainolanPuistoPic},

        {lat: 65.054898, lng: 25.470785,
            name: "Linnanmaan liikuntahalli",
            description: "Lähimpänä yliopistoa sijaitseva liikuntahalli, jossa on monipuoliset lajimahdollisuudet.Erityistarjouksia korkeakoululiikunnan sporttipassilaisille.",
            openingHours:"ma-pe 07:30-22:00, la-su 08:30-22:00",
            isVisited: false,
            picture: liikuntaHalliPic},

        {lat: 65.05932479995828, lng: 25.466073708801243,
            name: "Oulun yliopisto",
            description: "Kampukselle pääsee helposti pyöräillen, julkisella liikenteellä tai omalla autolla.",
            openingHours:"8:00 - 15:45",
            isVisited: false,
            picture: uniOuluPic}
]);

    function switchView (View_var){
        setView(View_var);
    }


    return (
        <div>
            <div>

                <div hidden={view !== "Start"}>
                    <Start switchView={switchView}/>
                </div>

                <div hidden={view !== "Register"}>
                    <Register switchView={switchView}/>
                </div>

                <div hidden={view !== "Login"}>
                    <Login switchView={switchView}/>
                </div>

                <div hidden={view !== "Map"}>
                    <Map switchView={switchView} markers={markers} setMarkers={setMarkers}/>
                </div>

                <div hidden={view !== "Places"}>
                    <Places switchView={switchView} markers={markers}/>
                </div>

                <div hidden={view !== "Profile"}>
                    <Profile switchView={switchView} markers={markers}/>
                </div>
            </div>

        </div>
    );
}

export default App;