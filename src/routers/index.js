import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Lesson from "../pages/Lesson"
import Home from '../pages/Home'

export default()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/lesson" component={Lesson} />
            </Switch>
        </BrowserRouter>
    )
}