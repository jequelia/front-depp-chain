import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Register from '../pages/register';
import Home from '../pages/home';



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/" component={Home}></Route>


        </Switch>
    );
}

export default Routes;