import React from 'react';
import { makeStyles } from "@material-ui/core";
//import { errEmpclasses } from "../cssstyle/MuiStyle.js"; 


const errEmpclasses = makeStyles({
  errPop_divWraper: {
      color: "#ffffff",
      padding: "8px 18px",
      position: "fixed",
      fontSize: "16px",
      fontFamily: "Red Hat Display, sans-serif",
      borderRadius: "8px",
      backgroundColor: "#ff8279",
      boxShadow: "0px 1px 5px 1px #d7929c",
      width: "30vmax",
      margin: "auto",
      top: "90px",
      right: "0",
      left: "0",
      textAlign: "center",

      '& > *': {
          margin: "0"
      }
  }  
})

export default function ErrPop(props){

    const clss = errEmpclasses();

    if(props.trigger.length > 0){
        var count = 0;
        const clearIt = setInterval(() => {
           count = count + 1;
           if(count === 5){
             clearInterval(clearIt);
             props.setTrigger(false);
          }
        }, 1000);
        var someClass = clss.errPop_divWraper
      }
    
    return (props.trigger) ? (<>
                                <div className={someClass}>
                                    <p>{props.trigger}</p>
                                    </div>
                              </>) : ""
}