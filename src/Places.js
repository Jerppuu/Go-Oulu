import React, {useState, useRef} from 'react';


function Places(props) {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    return(
        <div className="menu-container">
            <button onClick={onClick} className="menu-trigger">
                <span>Käydyt kohteet</span>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><a href="/Kauppuri5">Kauppuri5</a></li>
                    <li><a href="/Ainolanpuisto">Ainolanpuisto</a></li>
                    <li><a href="/Yliopisto">Yliopisto</a></li>
                    <li><a href="/45 special">45 special</a></li>
                </ul>
            </nav>
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