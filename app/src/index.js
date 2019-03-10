import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";
import * as serviceWorker from './serviceWorker';


const routing = (
	<Router>
	  <div>
		<Route path="/" exact component={ProductList} />
		<Route path="/product-detail/:item_id" exact component={ProductDetail} />
	  </div>
	</Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
