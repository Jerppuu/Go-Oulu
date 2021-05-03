import React from 'react';
import map from "./extras/map.png";

function Map(props) {
    return (
        <div>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
            />
            <div className="mapGrid">
                <img src={map} alt="map" style={{maxWidth: "100%", objectFit: "cover", gridRow: "2"}} />
            </div>

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