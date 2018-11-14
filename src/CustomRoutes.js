import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './Container/Posts';

const CustomRoutes = () => (
    <Switch>
        <Route path="/" exact render={()=>('<div>Home page content</div>')} />
        <Route path="/list" exact component={Posts} />
    </Switch>
);

export default CustomRoutes;