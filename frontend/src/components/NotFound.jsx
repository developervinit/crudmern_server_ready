import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
//import { notFndEmpclasses } from "../cssstyle/MuiStyle.js";


 const notFndEmpclasses = makeStyles({
   notFndEmp_Contnr: {
       marginTop: '200px',
       position: "relative",
       width: "50vmax",
       margin: "auto",
       marginBottom: "292px"
   },    
   notFndEmp_Messg: {
       fontFamily: "Red Hat Display, sans-serif",
       color: "#8b646e",
     },
   notFndEmp_Code: {
       fontFamily: "Red Hat Display, sans-serif",
       color: "#8b646e",
       fontWeight: "900"
     },
   notFndEmp_Btn: {
       color: "#8b646e",
       backgroundColor: "white"
   }  
});

export default function NotFound(){

    const clss = notFndEmpclasses();

    return(<>
             <div className={clss.notFndEmp_Contnr}>
                <h1 className={clss.notFndEmp_Code}>ERROR 404</h1>
                <h1 className={clss.notFndEmp_Messg}>Oops we can't find that page!</h1>
                <Button className={clss.notFndEmp_Btn} variant="contained" href="/">Home</Button>
             </div> 
            </>)
}