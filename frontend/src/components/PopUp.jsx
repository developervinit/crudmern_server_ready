import React from "react";
//import { popUpEmpclasses } from "../cssstyle/MuiStyle.js";
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';

 const popUpEmpclasses = makeStyles({
    popUpEmp_Cntnr: {
        top: "129px",
        padding: "10px",
        position: "fixed",
        minWidth: "300px",
        borderRadius: "8px",
        backgroundColor: "#e6bfbfcf",
        left: "0px",
        right: "0px",
        width: "300px",
        margin: "auto",
        boxShadow: "0px 1px 14px 1px #b59198"
    },
    popUpEmp_CloseBtn: {
        top: "-20px",
        color: "#885757",
        right: "-20px",
        cursor: "pointer",
        display: "inline-block",
        position: "absolute",
        borderRadius: "10px",
        backgroundColor: "#f7b6b6",
        padding: "2px 4px",
        textAlign: "center"
    },
    popUpEmp_Img: {
        width: "302px",
        height: "238px"
    },
    popUpEmp_EmpInfoWrpr: {
        fontSize: "16px",
        fontFamily: "Red Hat Display, sans-serif",
    },
    popUpEmp_lbleVlueWrpr: {
        marginBottom: "12px",
        borderBottom: "1px solid #d19e9e"
    },
    popUpEmp_lbel: {
        color: "#583c3c",
        fontSize: "14px",
    },
    popUpEmp_vlue: {
        color: "#583c3c",
        fontWeight: "600"
    }
    
 });

export default function PopUp(props){

    const clss = popUpEmpclasses();
    
    function crossIt(){
        props.setTrigger(false);
    }

    const userData = props.userObj;
    const demoImage = "./dfimage.png";

    return (props.trigger) ? (<>
                                <div className={clss.popUpEmp_Cntnr}>
                                    <div className={clss.popUpEmp_CloseBtn} onClick={crossIt} ><CloseIcon /></div>
                                    <img className={clss.popUpEmp_Img} src={demoImage} alt="Employee" />
                                    <div className={clss.popUpEmp_EmpInfoWrpr}>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Name</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.fullname}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Designation</span>
                                        <div className={clss.popUpEmp_vlue}>{userData.designation}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Department</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.department}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Email</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.email}</div>
                                        </div>

                                        <div className={clss.popUpEmp_lbleVlueWrpr}>
                                        <span className={clss.popUpEmp_lbel}>Phone</span> 
                                        <div className={clss.popUpEmp_vlue}>{userData.phone}</div>
                                        </div>
                                    </div>
                                </div>  </>) : "";
}