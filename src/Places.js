import React, {Component} from 'react';
import map from "./extras/map.png";

class Places extends Component {
    render() {
        return (
                <div>

                    <div className="placeList">
                        <div className="place"> Kauppuri5 </div>
                        <div className="place"> Ainolanpuisto </div>
                        <div className="place"> Yliopisto</div>
                        <div className="place"> 45 Special</div>


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

export default Places;