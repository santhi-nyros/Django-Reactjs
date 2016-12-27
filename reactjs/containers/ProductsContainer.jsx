import React from "react"
import { render } from "react-dom"
import { Link, hashHistory } from "react-router"
import Product from "../components/Product"



export default class ProductDetails extends React.Component{
    constructor() {
            super();
            this.state = {data: []};
    };
    componentDidMount() {
        this.serverRequest = $.get('/djreactproducts', function (result) {
          var result = result;
          this.setState({
            data:result
          });
        }.bind(this));
    };
    componentWillUnmount() {
        this.serverRequest.abort();
    };
    render(){
    var products = this.state.data.map(function (product){
        var linkTo = "/products/" + product.id;
        return(
                <Link to={linkTo} >
                    <Product key={product.id} data={product} />
                </Link>
        );
    });
    return (
        <div className="">
            {products}
        </div>
    );
    }
};




