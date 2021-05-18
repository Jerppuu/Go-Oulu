import React, {useCallback, useRef, useState} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow,} from "@react-google-maps/api";
import mapStyles from "./mapStyles";


function Map(props) {
    const libraries = ["places"];
    const mapContainerStyle = {
        width: "100vw",
        height: "100vh"
    };
    const center = {
        lat: 65.012093,
        lng: 25.465076,
    };
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
    }

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, [])

    //TODO: Add all places and descriptions for them
    const markers = [
        {lat: 65.012804, lng: 25.466924, name: "Kauppuri 5", description:"Ruokatarjoilua opiskelija-arkeen ja juhlaan Oulun keskustassa. Runsailla täytteillä varustetut hampurilaiset auttavat opiskelijaa jaksamaan opiskelijabileistä toiseen siirtymisessä.", openingHours: "ma-su 11:00-01:00"},
        {lat: 65.010717, lng: 25.469784, name: "45 Special", description:"45sessa tulevat vastakohdatkin toimeen keskenään, eikä ihmisten sosiaalisella statuksella tai titteleillä ole mitään merkitystä. Tarjolla livemusiikkia, purtavaa ja hyvää menoa. K-18.", openingHours: "pe-la 15:00-01:00 (Kööki auki pe 16-22:30 / la 15-22:30)"},
        {lat: 65.013280, lng: 25.464708, name: "Toripoliisi", description:"Polliisi on kaikkien kaveri. Kohtaamispaikka Oulussa.", openingHours: "24/7"},
        {lat: 65.012650, lng: 25.471390, name: "Ainolanpuisto", description: "Kaunis ja viehättävä ulkoilukohde keskellä kaupunkia, rentoa menoa ja kiva kahvila.",openingHours:"24/7"},
        {lat: 65.054898, lng: 25.470785, name: "Linnanmaan liikuntahalli", description: "Lähimpänä yliopistoa sijaitseva liikuntahalli, jossa on monipuoliset lajimahdollisuudet.Erityistarjouksia korkeakoululiikunnan sporttipassilaisille.", openingHours:"ma-pe 07:30-22:00, la-su 08:30-22:00"},
        {lat: 65.05932479995828, lng: 25.466073708801243, name: "Oulun yliopisto", description: "Kampukselle pääsee helposti pyöräillen, julkisella liikenteellä tai omalla autolla.",openingHours:"8:00 - 15:45"}];

    const [selected, setSelected] = useState(null);

    const {isLoaded, loadError} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, libraries,});

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps"

    return (
        <div>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center} options={options}>

                    {markers.map((marker) => (
                    <Marker
                        key={marker.name}
                        position={{lat: marker.lat, lng: marker.lng}}
                        //TODO : add marker image
                        /*icon={{
                            url: "./imagehere",
                            scaledSize: new window.google.maps.size(30,30),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15),

                        }}*/
                        onClick={() => setSelected(marker)}
                    />
                    ))}

                    //Todo: add more information about places
                    {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => {setSelected(null)}}>
                        <div>
                            <h2>{selected.name}</h2>
                            <p>{selected.description}</p>
                            <p>{selected.openingHours}</p>
                        </div>
                    </InfoWindow>) : null}

                    </GoogleMap>


            <div className="footer">
                <div className="footerGrid">
                    <button onClick={()=> props.switchView("Places")}   className="footerButton">Paikat</button>
                    <button onClick={()=> props.switchView("Map")}   className="footerButton">Kartta</button>
                    <button onClick={()=> props.switchView("Profile")}   className="footerButton">Profiili</button>
                </div>
            </div>
        </div>
    );
}

export default Map;