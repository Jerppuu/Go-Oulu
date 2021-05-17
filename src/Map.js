import React from 'react';
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

    const {isLoaded, loadError} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, libraries,});

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps"

    return (
        <div>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />

                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={center} options={options} ></GoogleMap>



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