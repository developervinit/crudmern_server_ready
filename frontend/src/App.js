import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import AddEmployee from './components/AddEmployee.jsx';
import AllEmployees from './components/AllEmployees.jsx';
import EditEmployee from './components/EditEmployee.jsx';
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import { makeStyles } from '@material-ui/core';
import { HashRouter, Route, Switch } from 'react-router-dom';

const classes = makeStyles((theme) => ({
    superContainer_v: {
       width: "88vmax",
       margin: "auto",
       position: "relative"
    },
    [theme.breakpoints.down('sm')]: {
      superContainer_v: {
         width: "52vmax",
      }
    }
}))

function App() {

  const clss = classes();

  return (
          
           <HashRouter>
              <NavBar />
              <div className={clss.superContainer_v}>
               <Switch>
                <Route  exact path="/" component={Home} />
                <Route  exact path="/addemployee" component={AddEmployee} />
                <Route  exact path="/allemployees" component={AllEmployees} />
                <Route exact path="/edit/:id" component={EditEmployee}/>
                <Route component={NotFound} />
               </Switch>
               <Footer />
               </div>
                
            </HashRouter>
            
          );
}

export default App;
