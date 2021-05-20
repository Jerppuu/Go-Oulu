import React, {useCallback, useRef, useState} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow,} from "@react-google-maps/api";
import mapStyles from "./mapStyles";


import compassIcon from "./Icons/compassIcon.svg"
import placeMarkerIcon from "./Icons/placeMarkericon.svg"
import userMarkerIcon from "./Icons/userMarkerIcon.svg"

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

function Map(props) {

    const {isLoaded, loadError} = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, libraries,});
    const [selected, setSelected] = useState(null);
    const [userLocation, setUserLocation] = useState({lat: null, lng: null});


    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(20);
    }, []);

    //TODO: Add all places and descriptions for them
    const [markers, setMarkers] = useState([
        {lat: 65.012804, lng: 25.466924, name: "Kauppuri 5", description:"expample description", openingHours: "10:00-12:00", isVisited: false},
        {lat: 65.010717, lng: 25.469784, name: "45 Special", description:"expample description", openingHours: "10:00-12:00", isVisited: false},
        {lat: 65.013280, lng: 25.464708, name: "Toripoliisi", description:"expample description", openingHours: "10:00-12:00", isVisited: false},
    ]);


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps"

    return (
        <div>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />

            <Locate panTo={panTo} userLocation={userLocation} setUserLocation={setUserLocation} markers={markers} setMarkers={setMarkers}/>

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15} center={center} options={options}
                onLoad={onMapLoad}
            >

                {markers.map((marker) => (
                    //Marker for places
                    <Marker
                        key={marker.name}
                        position={{lat: marker.lat, lng: marker.lng}}
                        icon={{
                            url: placeMarkerIcon,
                            scaledSize: new window.google.maps.Size(40,40),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(15,15),
                        }}
                        onClick={() => setSelected(marker)}
                    />
                ))}

                {/* Marker for user */}
                <Marker
                    key="User"
                    position={{lat: userLocation.lat, lng: userLocation.lng}}
                    icon={{
                        url: userMarkerIcon,
                        scaledSize: new window.google.maps.Size(40,40),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(15,15),
                    }}
                />

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

function Locate({panTo, setUserLocation, markers, setMarkers}){
    return (
        <button className="locateMe"
                onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });

                    var markerTable = markers;
                    //TODO : Improve accuracy of the place and user comparison
                    for (var i=0; i < markers.length; i++){
                        if (position.coords.latitude.toFixed(3) === markerTable[i].lat.toFixed(3) && position.coords.longitude.toFixed(3) === markerTable[i].lng.toFixed(3)){
                            markerTable[i].isVisited = true;
                        }
                    }
                    setMarkers(markerTable);

                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    if (error.code === 1){
                        alert("Sinun tulee hyväksyä paikannus käyttääksesi tätä toimintoa")
                    }
                    if (error.code === 2){
                        alert("Virhe paikantaessa, yritä uudelleen!")
                    }
                    if (error.code === 3){
                        alert("Virhe paikantaessa, yritä uudelleen!")
                    }
                }
            );
        }} >
            <img src={compassIcon} alt="compass"/>
        </button>
    );

}
export default Map;

