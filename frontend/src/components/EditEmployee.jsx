import React, { useState, useEffect } from 'react';
import { getEditEmployee, updateEmployee } from "../service/api.js"
import { FormGroup, FormControl, Input, InputLabel, Button, Select, MenuItem, makeStyles } from "@material-ui/core";
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrPop from "./ErrPop.jsx";
//import { editEmpclasses } from "../cssstyle/MuiStyle.js"; 


//schema for validadtion
const schema = yup.object().shape({ 
  fullname: yup.string().required(),
  designation: yup.string().required(),
  department: yup.string().required(),
  email: yup.string().email().strict().lowercase("email must be in lowercase").required(),
  phone: yup.string().min(10).max(10).required()
});



 const editEmpclasses = makeStyles((theme) => ({
  editFormContainer: {
      width: "39vmax",
      maxWidth: "600px",
      minWidth: "200px",
      margin: "auto",
      marginTop: "140px"
  },
  editEmp_head: {
      marginTop: "100px",
      fontFamily: "Red Hat Display, sans-serif",
      color: "#8b646e",
      width: "550px"
    },
  editEmp_btn: {
      marginTop: "32px",
      backgroundColor: "#a8d96f",
      color: "#4e850d",
      padding: "8px 24px",
      fontSize: "16px",
      fontFamily: "Red Hat Display, sans-serif",
      boxShadow: "1px 1px 1px 1px #81b841",
      fontWeight: "600",
      marginBottom: "14px"
    },
  editEmp_err: {
      color: "red"
    },
    [theme.breakpoints.down('sm')]: {
      editFormContainer: {
        width: "37vmax"
    },
    editEmp_head: {
      width: "374px"
    },
  }
}))  



//this component to edit perticular user's data
export default function EditEmployee(){

  const nextPage = useHistory(); //this hook to redirect on differnt-page
  const clss = editEmpclasses(); //mui classes for css-style 
  const { id } = useParams(); //getting current user's id from url

  const [ mongoerr, setmongoErr ] = useState([]);
  
  const [ stuObj, setStuObj ] = useState({
    fullname: "",
    designation: "",
    department: "",
    email: "",
    phone: ""
  });

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    getEditUserData();
  }, []);

  //fetching user-value according id, for pre filled fields.
  async function getEditUserData(){
    const userObj = await getEditEmployee(id);
    setStuObj(userObj.data);
}
 

  //to get value from input-field form
  const getValue = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setStuObj((preValue) => {
      return {
        ...preValue, [name]: value
      }
      
    });
  }

  //to submit user's edited data into database 
  async function submitData(){
    try{
      const response = await updateEmployee(id, stuObj); //updating the employee data
      
      if(response.status === 200){
        alert("Form is Edited Succesfully");
        nextPage.push("/allemployees") //redirecting to users-page
      }else if(response.status === 409) {
         setmongoErr(response.data.message)
      }
    }catch(err){
         console.log(err);
    }
      
  }

  return(<>
           <div className={clss.editFormContainer}>
             <h1 className={clss.editEmp_head}>Edit Employee Details</h1>
             <ErrPop trigger={mongoerr} setTrigger={setmongoErr} errText={mongoerr} />
             
             <FormGroup>
               <FormControl>
                 <InputLabel>Name</InputLabel>
                 <Input
                      autoFocus={true}
                      {...register("fullname")}
                      onChange={getValue} 
                      
                      value={stuObj.fullname}
                 />
                 <p className={clss.editEmp_err}>{errors.fullname?.message}</p>

               </FormControl>
               <FormControl>
                 <InputLabel>Designation</InputLabel>
                 <Input
                      {...register("designation")}
                      onChange={getValue} 
                      
                      value={stuObj.designation}
                 />
                 <p className={clss.editEmp_err}>{errors.designation?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Department</InputLabel>
                 <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        
                        {...register("department")}
                        onChange={getValue}
                        
                        value={stuObj.department}
                         >
                           <MenuItem value="Accounts and Finance">Accounts and Finance</MenuItem>
                           <MenuItem value="HR">HR</MenuItem>
                           <MenuItem value="R & D">R & D</MenuItem>
                           <MenuItem value="Learning and development">Learning and development</MenuItem>
                           <MenuItem value="IT services">IT services</MenuItem>
                           <MenuItem value="Product development">Product development</MenuItem>
                           <MenuItem value="Admin department">Admin department</MenuItem>
                  </Select>
                  <p className={clss.editEmp_err}>{errors.department?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Email</InputLabel>
                 <Input
                      {...register("email")}
                      onChange={getValue}

                      value={stuObj.email}
                 />
                  <p className={clss.editEmp_err}>{errors.email?.message}</p>
               </FormControl>

               <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input
                      {...register("phone")}
                      onChange={getValue}
                      type="number"
                      value={stuObj.phone}
                 />
                 <p className={clss.editEmp_err}>{errors.phone?.message}</p>
               </FormControl>
               <Button onClick={handleSubmit(submitData)} className={clss.editEmp_btn}>Edit</Button>
             </FormGroup>
            </div>
             
          </>)
}