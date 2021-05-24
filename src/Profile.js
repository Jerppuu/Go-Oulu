import React from 'react';
import user from './extras/user.png'

function Profile({switchView, markers}) {

    function UserPercentage (){
        let percent = 0
        for (let i = 0; i < markers.length; i++){
            if (markers[i].isVisited){
                percent += 16.7;
            }
        }
        if (percent > 100){
            percent = 100;
        }
        return percent;
    }

    return (
        <div>
            <div className="profile">
                <h2 style={{paddingBottom: "10px"}}>Profiili</h2>
                <img src={user} alt="userpic" style={{borderRadius: "10", maxHeight: "150px"}}/>
                <h3 style={{paddingTop: "10px"}}>Testi Käyttäjä</h3>
                <h3>Paikkoja käyty: {UserPercentage()}%</h3>

                <button style={{margin: 150}} onClick={()=>window.location.reload()} className="button">Kirjaudu ulos</button>
            </div>



            <div className="footer">
                <div className="footerGrid">
                    <button onClick={()=> switchView("Places")}   className="footerButton">Paikat</button>
                    <button onClick={()=> switchView("Map")}   className="footerButton">Kartta</button>
                    <button onClick={()=> switchView("Profile")}   className="footerButton">Profiili</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;