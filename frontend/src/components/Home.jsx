import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
//import { homeEmpclasses } from "../cssstyle/MuiStyle.js";

 const homeEmpclasses = makeStyles({
  container: {
      width: "44vmax",
      textAlign: "center",
      position: "relative",
      margin: "auto",
      marginTop: "260px"
  },
  HomeBtnCreat: {
      backgroundColor: "#a8d96f",
      color: "#4e850d",
      padding: "8px 24px",
      fontSize: "16px",
      fontFamily: "Red Hat Display, sans-serif",
      boxShadow: "1px 1px 1px 1px #81b841",
      fontWeight: "600"
   },
  hello: {
      fontFamily: "'Red Hat Display', sans-serif",
      color: "#91555e",
      fontSize: "54px",
      textShadow: "0px 0px 4px #b2b1b1"
  },
  HomePStyle: {
      color: "#c7a3a9",
      width: "44vmax",
      margin: "auto",
      fontSize: "14px",
      marginTop: "60px",
      textAlign: "center",
      fontFamily: "Red Hat Display, sans-serif"
  }

});


export default function Home() {

   const clss = homeEmpclasses();

    return(<>
            <div className={clss.container}>
               <h1 className={clss.hello}>Hello World</h1>
               <Button component={Link} to="/addemployee" className={clss.HomeBtnCreat}>Create New Employee</Button>
             </div>
             <p  className={clss.HomePStyle}>This crudmern app provides numberous functionalities such as create, delete, edit, and view employee's simple details with filter functionality according department field.</p> 
           </>)
}