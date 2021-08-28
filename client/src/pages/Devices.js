import React from "react";
import styles from "./styles.css"
import Button from "react-bootstrap/Button";
import off from '../assets/off.png';
import Locked from '../assets/Locked.png';
import Unloked from '../assets/Unloked.png';
import on from '../assets/on.png';


const Devices = () => {
 
  
  return (
        <div className="container">
            <div className="gik">
            <p  className="page-d-1">Devices</p>
            <Button variant="light"  href="/" className="page-d-2">Users</Button>
            </div>
            <div className="Box">
                <img className="BoxPhoto" src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg" />
                <div className="BoxText">
                    <p className="DeviceName">Home</p>
                    <p className="DeviceModell">Bg (LS-3i)</p>

                <img className="switch" src={off} />
                </div>
                <img className="BoxPhotolo" src={Locked} />
            </div>
             <div className="Box">
                <img className="BoxPhoto" src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg" />
                <div className="BoxText">
                    <p className="DeviceName">Home</p>
                    <p className="DeviceModell">Bg (LS-3i)</p>

                <img className="switch" src={on} />
                </div>
                <img className="BoxPhotoon" src={Unloked} />
            </div>
           

        </div>

  );
}

export default Devices;

	
