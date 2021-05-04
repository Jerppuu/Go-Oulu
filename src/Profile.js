import React from 'react';
import user from './extras/user.png'

function Profile(props) {
    return (
        <div>
            <div className="profile">
                <div style={{paddingBottom: "10px"}}>Profiili</div>
                <img src={user} alt="userpic" style={{borderRadius: "10", maxHeight: "150px"}}/>
                <div style={{paddingTop: "10px"}}>Testi Käyttäjä</div>


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

export default Profile;