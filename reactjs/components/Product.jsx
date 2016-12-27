import React from "react"
import { render } from "react-dom"



export default class Product extends React.Component {
  render(){
    return(
        <div className="Product">
            <h4>{this.props.data.product_name} </h4>
            <img src={this.props.data.image} width="100" height = "100" />
        </div>
    )
    };
};
