import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from "react-router"

import Home from "./containers/HomeContainer"
import ProductDetails from "./containers/ProductsContainer"
import EmployeeDetails from "./containers/EmployeeContainer"

import ProductInfo from "./components/ProductInfo"




class App extends React.Component{
  render() {
    return (
      <div>
        <h2 className="heading">Welcom to Django+Reactjs SPA</h2>
        <p className="description">This is single page application using Django+reactjs.</p>
        <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stuff">Employees</Link></li>
           {/*  <li><Link to="/addemp">Add Employee</Link></li> */}
           <li><Link to="/products">Products</Link></li>
        </ul>
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
};



{/* Routing */}


render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="stuff" component={EmployeeDetails} />
            <Route path="products" component={ProductDetails}/>
            <Route path = "products/:id" component = {ProductInfo}/>
           {/*  <Route path="addemp" component={FormUpload} /> */}
        </Route>
    </Router>,
    document.getElementById('App1')
);
