//import { makeStyles } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";
//import { footrEmpclasses } from "../cssstyle/MuiStyle.js";


 const footrEmpclasses = makeStyles({
   footEmp_Contnr: {
       fontSize: "14px",
       textAlign: "center",
       fontFamily: "Red Hat Display, sans-serif",
       minWidth: "300px",
       maxWidth: "560px",
       color: "#c7a3a9",
       margin: "auto",
       marginTop: "20px"
   },
   footEmp_Decoration: {
       color: "#91555e"
   },

})


export default function Footer() {

    const clss = footrEmpclasses();

    return(<>
             <div className={clss.footEmp_Contnr}>
                <p>This app <span className={clss.footEmp_Decoration}>crudmern</span> is developed & designed by <span className={clss.footEmp_Decoration}>dev.Vinit</span></p>
             </div>  
           </>)  
}