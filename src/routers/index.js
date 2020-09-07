import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Lesson from "../pages/Lesson"

export default()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Lesson} />
                <Route path="/lesson" component={Lesson} />
            </Switch>
        </BrowserRouter>
    )
}