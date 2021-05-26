import React from 'react';
import ReactModal from "react-modal";

const CustomModal = props => {
    const { isOpen } = props;
    return isOpen ? <ReactModal {...props} /> : null;
};

function Places({markers, switchView}) {

    const [useCustomModal] = React.useState(true);
    const [Modal, setModal] = React.useState({show: false, number: 0});
    const ModalComponent = useCustomModal ? CustomModal : ReactModal;

        return (
            <div>
                <div className="placeList">
                    <button onClick={() => setModal({show: true, number: 0})} disabled={!markers[0].isVisited} className="button">{markers[0].isVisited? markers[0].name:"Käymättä" }</button>
                    <button onClick={() => setModal({show: true, number: 1})} disabled={!markers[1].isVisited} className="button">{markers[1].isVisited? markers[1].name:"Käymättä" }</button>
                    <button onClick={() => setModal({show: true, number: 2})} disabled={!markers[2].isVisited} className="button">{markers[2].isVisited? markers[2].name:"Käymättä" }</button>
                    <button onClick={() => setModal({show: true, number: 3})} disabled={!markers[3].isVisited} className="button">{markers[3].isVisited? markers[3].name:"Käymättä" }</button>
                    <button onClick={() => setModal({show: true, number: 4})} disabled={!markers[4].isVisited} className="button">{markers[4].isVisited? markers[4].name:"Käymättä" }</button>
                    <button onClick={() => setModal({show: true, number: 5})} disabled={!markers[5].isVisited} className="button">{markers[5].isVisited? markers[5].name:"Käymättä" }</button>

                    <ModalComponent
                        isOpen={Modal.show}
                        onRequestClose={() => setModal({show: false, number: 0})}
                    >
                        <a href="#" className="close"  onClick={() => setModal({show: false, number: 0})}/>
                        <h2 style={{textAlign: "center"}}>{markers[Modal.number].name}</h2>
                        <img src={markers[Modal.number].picture} alt={markers[Modal.number].name} style={{display: "block",marginLeft: "auto", marginRight: "auto" , width: "100%"}}/>
                        <h3 style={{textAlign: "center"}}>{markers[Modal.number].openingHours}</h3>
                        <div style={{textAlign: "center"}}>{markers[Modal.number].description}</div>
                    </ModalComponent>
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