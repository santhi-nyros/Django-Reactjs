import React from "react"
import { render } from "react-dom"
import StarRatingComponent from 'react-star-rating-component'
import { Tabs, Tab } from 'react-bootstrap';
var ReactDOM = require('react-dom');
import ProductTabs from "../components/ProductTabs"

import Product from "../components/Product"

var ProductInfo = React.createClass({
    getInitialState(){
        return{  item:"", comments:[] };
    },
    componentDidMount() {
        var handler = $.ajax({
            url: 'products/view/'+this.props.params.id+'/',
            type: "GET",
            dataType: "json",
            success: function ( result ) {
                this.setState({
                    item:result.data.item,
                    comments:result.data.comments,
                });
            }.bind(this)
        });
        handler.fail(function() {
            console.log('error');
        });
    },
    componentWillUnmount() {
        this.serverRequest.abort();
    },
    render(){
    return(
            <div className="product_details">
                <h4>{this.state.item.product_name} </h4>
                <img src={this.state.item.image} width="200px" height="250px" />
                <div className="Tab-div">
                    <ProductTabs data={this.state}/>
                </div>
            </div>
        );
    }
});

module.exports = ProductInfo;
