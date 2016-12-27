import React from "react"
import { render } from "react-dom"
import StarRatingComponent from 'react-star-rating-component'
import { Tabs, Tab } from 'react-bootstrap';
var ReactDOM = require('react-dom');

import Product from "../components/Product"

export default class ProductTabs extends React.Component{
    render(){
    return(
        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <Tab eventKey={1} title="Description">
                <div className="product_details">
                    <ul>
                        <li>Product: {this.props.data.item.product_name}</li>
                        <li>Price: Rs.{this.props.data.item.price}/- Only</li>
                        <li>Description: {this.props.data.item.product_desc}</li>
                    </ul>
                </div>
            </Tab>
            <Tab eventKey={2} title="Reviews">
                <div>
                    <ProductReview data={this.props.data.item} />
                </div>
            </Tab>
            <Tab eventKey={3} title="Rating">
                <div>
                    <ProductRating key={this.props.data.item.id} data={this.props.data.item} />
                </div>
            </Tab>
        </Tabs>
    );
    }
};

var ProductReview = React.createClass({
    getInitialState() {
        return {
                comments:[]
            };
    },
    componentDidMount() {
        var handler = $.ajax({
            url: 'products/view/'+this.props.data.id+'/',
            type: "GET",
            dataType: "json",
            success: function ( result ) {
                this.setState({
                    comments:result.data.comments,
                });
            }.bind(this)
        });
        handler.fail(function() {
            console.log('error');
        });
    },
    onReview(e){
        e.preventDefault();
        var reviewtxt =  ReactDOM.findDOMNode(this.refs.reviewtext).value;
        var csrftoken = Cookies.get('csrftoken');
        var data = {
                    "csrfmiddlewaretoken": csrftoken,
                    "comment":reviewtxt,
                };
        var handler = $.ajax({
              data : data,
              url: 'products/view/'+this.props.data.id+'/',
              type: "POST",
              dataType: "json",
              success: function ( result ) {
                this.setState({comments: result.data.comments});
                ReactDOM.findDOMNode(this.refs.reviewtext).value = "";
              }.bind(this)
        });
          handler.fail(function(error) {
          console.log(error);
        });
    },
    render(){
        return(
            <div className="ratingForm">
                <form ref="uploadForm" onSubmit={this.onReview}>
                    <textarea ref="reviewtext" placeholder="Give your review here...." required/>
                    <input type="submit" value="Post" className="button"/>
                </form>
                <div>
                    <h3>Comments.....</h3>
                    <ul>
                    {this.state.comments.map(function(comm,i){
                        return(
                            <li className="reviews" key={i}>{comm.comment}</li>
                        );
                    })
                    }
                    </ul>
                </div>
            </div>
        );
    }
})

var ProductRating = React.createClass({
    getInitialState() {
        return {
                rating: this.props.data.product_rating
            };
    },
    onPerClick(name, value) {
        var csrftoken = Cookies.get('csrftoken');
        var data = {
                    "csrfmiddlewaretoken": csrftoken,
                    "rating":name,
                };
        var handler = $.ajax({
                  data : data,
                  url: 'products/'+this.props.data.id+'/addrating/',
                  type: "POST",
                  dataType: "json",
                  success: function ( result ) {
                    this.setState({rating: name});
              }.bind(this)
            });
            handler.fail(function(error) {
              console.log(error);
            });
    },
    render(){
    return(
        <div>
            <div className="rating">
                <StarRatingComponent name={"rate_"+this.props.data.id} starCount={5} value={this.state.rating} onStarClick={this.onPerClick.bind(this)}/>
                <h4><b>Product rating:{this.state.rating}</b></h4>
            </div>
        </div>
    )
    }

});
