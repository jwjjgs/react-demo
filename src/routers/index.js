import React from 'react'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Lesson from "../pages/Lesson"
import Home from '../pages/Home'

export default()=>{
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lesson" component={Lesson} />
            </Switch>
        </Router>
    )
}