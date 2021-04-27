import React, {Component} from 'react';
import map from './extras/map.png'

class Map extends Component {
    render() {
        return (
            <div>

                <div className="mapGrid">
                    <img src={map} alt="map" style={{maxWidth: "100%", objectFit: "cover", gridRow: "2"}} />
                </div>

                <div className="footer">
                    <div className="footerGrid">
                        <button className="footerButton">Paikat</button>
                        <button className="footerButton">Kartta</button>
                        <button className="footerButton">Profiili</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Map;