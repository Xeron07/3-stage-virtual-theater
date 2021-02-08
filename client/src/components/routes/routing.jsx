import React, { Component } from 'react';
 import routes from "../../routes";
 import { Switch, Route, Redirect } from "react-router-dom";
 class Routing extends Component {
     state = {  }
     render() { 
         return (
             <Switch>
             {
                 routes.map(r=><Route exact path={r.path} component={r.component} key={r.key} />)
             }
             <Redirect exact to="/login" />
             </Switch>
           );
     }
 }
  
 export default Routing;