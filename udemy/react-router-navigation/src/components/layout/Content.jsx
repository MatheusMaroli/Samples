import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/NotFound';
import './Content.css';

const Content = (props) => {
    return (
        <main className="content">
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/param/:id"><Param/></Route>
                <Route path="*"><NotFound/></Route>
            </Switch>
        </main>
    );
}

export default Content;