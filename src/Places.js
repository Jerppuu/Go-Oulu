import React from 'react';

function Places(props) {
    return(
        <div>

            <div className="placeList">
                <div className="place"> Kauppuri5 </div>
                <div className="place"> Ainolanpuisto </div>
                <div className="place"> Yliopisto</div>
                <div className="place"> 45 Special</div>
            </div>

            <div className="footer">
                <div className="footerGrid">
                    <button onClick={()=> props.switchView("Places")}   className="footerButton">Paikat</button>
                    <button onClick={()=> props.switchView("Map")}   className="footerButton">Kartta</button>
                    <button onClick={()=> props.switchView("Profile")}   className="footerButton">Profiili</button>
                </div>
            </div>
        </div>
    )
    ;
}

export default Places;