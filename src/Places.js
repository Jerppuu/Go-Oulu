import React, {useState} from 'react';
import ReactModal from "react-modal";
const CustomModal = props => {
    const { isOpen } = props;
    return isOpen ? <ReactModal {...props} /> : null;
};



function Places(props) {
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

    //TODO: needs to be integrated with Map.js. Need to add dropdown-menus.
    const [useCustomModal] = React.useState(false);
    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    const ModalComponent = useCustomModal ? CustomModal : ReactModal;

    const [markers, setMarkers] = useState([
        {name: "Kauppuri 5", description: "Kauppuri 5 is a cool place", isVisited: true},
        {name: "45 Special", description: "45 special is a cool place", isVisited: true,},
        {name: "Toripoliisi", description: "Toripoliisi is a cool place", isVisited: false},
    ]);


    const table = markers;
    const place = ["Not yet visited","Not yet visited","Not yet visited"];
    const desc = ["","",""];
    for (let i = 0; i < markers.length; i++) {
        if (table[i].isVisited == true) {
            place[i] = table[i].name
            desc[i] = table[i].description
        }
    }
        return (
            <div className="placeList">
                <button onClick={() => setShowModal1(true)} className="button">{place[0]}</button>
                <button onClick={() => setShowModal2(true)} className="button">{place[1]}</button>
                <button onClick={() => setShowModal3(true)} className="button">{place[2]}</button>
                <ModalComponent
                    isOpen={showModal1}
                    onRequestClose={() => setShowModal1(false)}
                >
                    <div>{desc[0]}</div>
                    <button onClick={() => setShowModal1(false)} style={{float: 'right'}}>Close</button>
                </ModalComponent>
                <ModalComponent
                    isOpen={showModal2}
                    onRequestClose={() => setShowModal2(false)}
                >
                    <div>{desc[1]}</div>
                    <button  onClick={() => setShowModal2(false)} style={{float: 'right'}}>Close</button>
                </ModalComponent>
                <ModalComponent
                    isOpen={showModal3}
                    onRequestClose={() => setShowModal3(false)}
                >
                    <div>{desc[2]}</div>
                    <button onClick={() => setShowModal3(false)} style={{float: 'right'}}>Close</button>
                </ModalComponent>
        <div className="footer">
        <div className="footerGrid">
            <button onClick={() => props.switchView("Places")} className="footerButton">Paikat</button>
            <button onClick={() => props.switchView("Map")} className="footerButton">Kartta</button>
            <button onClick={() => props.switchView("Profile")} className="footerButton">Profiili</button>
            </div>
            </div>
            </div>
        )
}
export default Places;