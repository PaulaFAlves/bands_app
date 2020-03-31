import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Band from './pages/band';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/bands/:id' component={Band} />
        </Switch>
    </BrowserRouter>
);

export default Routes;