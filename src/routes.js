import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Lesson from './pages/Lesson';

export default()=>{
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Lesson}/>
			</Switch>
		</Router>
	)
}