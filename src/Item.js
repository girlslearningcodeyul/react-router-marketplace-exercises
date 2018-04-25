import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'

import './App.css';

class Item extends Component {
  render() {
    let lify = (elem) => <li> {elem} </li>;
    return (
      <div className="card center ">

        {!this.props.details ? (
          <div>
            <img height="100px" src={this.props.imageLocation} />
            <div>
              <div>{this.props.description}</div>
              <div>${this.props.price}</div>
              <div>Number in stock: {this.props.numberStock}</div>
              <Link to={"/seller/" + this.props.sellerId}> Link to seller </Link>
            </div>
            <Link to={"/details/" + this.props.itemID}> Details </Link>
          </div>) :
          (<div> Reviews:
            <ul>
              {this.props.reviews.map(lify)}
            </ul>
            </div>)
        }


      </div>
    );
  }
}

export default Item;