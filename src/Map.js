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

    const markers = [
        {lat: 65.012804, lng: 25.466924, name: "Kauppuri 5"},
        {lat: 65.010717, lng: 25.469784, name: "45 Special"},
    ];

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
                            <h2>Kohteen nimi</h2>
                            <p>{selected.name}</p>
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