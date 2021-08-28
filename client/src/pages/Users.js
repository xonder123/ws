import React from "react";
import styles from "./styles.css"
import Button from "react-bootstrap/Button";

const Users = () => {
 
	
  return (
        <div className="container">
            <div className="gik">
            <Button href='Devices'variant="light"  className="page-1">Devices</Button>
            <p className="page-2">Users</p>
            </div>
            <div className="Box">
                <img className="BoxPhoto" src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg" />
                <div className="BoxText">
                    <p className="UserName">xonder</p>
                    <p className="UserEmail">dharjusd@gmail.com</p>
                </div>
                <button className="UserButton">Active</button>
            </div>
            <div className="Box">
                <img className="BoxPhoto" src="https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg" />
                <div className="BoxText">
                    <p className="UserName">xonder2</p>
                    <p className="UserEmail">dharjusd@gmail.com</p>
                    <p className="UserData">aug 10:30 - 18 10:30</p>
                
                </div>
                <button className="UserButton1">Upcoming</button>

            </div>        

        </div>

  );
}

export default Users;
