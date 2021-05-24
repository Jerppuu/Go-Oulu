import React from 'react';

function Places({switchView ,markers}) {
    //const dropdownRef = useRef(null);
    //const [isActive, setIsActive] = useState(false);
    //const onClick = () => setIsActive(!isActive);

    //<div className="menu-container">
    //    <button onClick={onClick} className="menu-trigger">
    //        <span>Käydyt kohteet</span>
    //    </button>
    //    <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
    //        <ul>
    //            <li><a href="/Kauppuri5">Kauppuri5</a></li>
    //            <li><a href="/Ainolanpuisto">Ainolanpuisto</a></li>
    //            <li><a href="/Yliopisto">Yliopisto</a></li>
    //            <li><a href="/45 special">45 special</a></li>
    //        </ul>
    //    </nav>


    const table = markers;
    const place = ["Paikka käymättä","Paikka käymättä","Paikka käymättä","Paikka käymättä","Paikka käymättä","Paikka käymättä",];
    for (let i = 0; i < markers.length; i++) {
        if (table[i].isVisited === true) {
            place[i] = table[i].name
        }
    }
        return (
        <div>
            <div>
                <div className="place">{place[0]}</div>
                <div className="place">{place[1]}</div>
                <div className="place">{place[2]}</div>
                <div className="place">{place[3]}</div>
                <div className="place">{place[4]}</div>
                <div className="place">{place[5]}</div>
            </div>
            <div className="info">
                <div style={{margin: "20px"}}>Vieraile paikoissa avataksesi ne</div>
                <div>Paikka avautuu, kun paikannat itsesi kartta osiossa ollessasi tarpeeksi lähellä kohdetta.</div>
            </div>

            <div className="footer">
                <div className="footerGrid">
                    <button onClick={() => switchView("Places")} className="footerButton">Paikat</button>
                    <button onClick={() => switchView("Map")} className="footerButton">Kartta</button>
                    <button onClick={() => switchView("Profile")} className="footerButton">Profiili</button>
                </div>
          </div>
        </div>
        )
}

export default Places;

