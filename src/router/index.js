import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SampleContainer from '../views/SampleContainer';
import Main from "../views/Main";
import PageNotFound from '../views/PageNotFound';
import Nav from '../components/Nav';

const Router = () => {
	return (
		<BrowserRouter>
			<Nav/>
			<Switch>
				<Route path="/" component={Main} exact={true}/>
				<Route path="/sample" component={SampleContainer}/>

				{/* PageNotFound : 404 */}
				<Route component={PageNotFound}/>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
