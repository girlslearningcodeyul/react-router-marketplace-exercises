import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Seller from './Seller.js'
import Item from './Item.js'
import './App.css';

let items = [{
  description: "Nice boats. 50% off. wow.",
  price: 10000,
  image: "boat.png",
  sellerId: 0,
  numberStock: 10,
  reviews: {
    reviews: ["good", "bad", "mediocre", "not bad at all", "love it"],
    reviewer: ["john", "sara", "kevin", "richard", "ksenia"]
  }
},
{
  description: "Lawn chairs",
  price: 50,
  image: "lawnchair.jpg",
  sellerId: 1,
  numberStock: 1,
  reviews: {
    reviews: ["worst lawn chairs I've ever had"],
    reviewer: ["richard"]
  }
},
{
  description: "Baseball cap - ponytail",
  price: 5,
  image: "hat.jpg",
  sellerId: 1,
  numberStock: 100,
  reviews: {
    reviews: ["best hat", "worst hat"],
    reviewer: ["sara", "ksenia"]
  }
},
{
  description: "Books",
  price: 20,
  image: "books.jpg",
  sellerId: 2,
  numberStock: 1,
  reviews: {
    reviews: ["bad books", "great quality", "fast delivery"],
    reviewer: ["richard", "sara", "ksenia"]
  }
},
{
  description: "KD - you love it",
  price: 2,
  image: "kd.jpg",
  sellerId: 2,
  numberStock: 25,
  reviews: {
    reviews: ["I love KD"],
    reviewer: ["kevin"]
  }
}
]

let renderAllItems = () => {
  return items.map((item, ind) => (<Item
    price={item.price}
    sellerId={item.sellerId}
    imageLocation={item.image}
    description={item.description}
    numberStock={item.numberStock}
    reviews={item.reviews.reviews}
    itemID={ind} />))
}

let renderSeller = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Seller id={routerData.match.params.id} />)
}

let renderReviews = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Item details={true} reviews={items[routerData.match.params.id].reviews.reviews} />)
}
let renderReviewers = routerData => {
  // the .id is the same as the :id from the Route below. 
  // You can give it any name, but they have to match.
  // For example, routerData.match.params.uniqueID would be fine too
  // But you would have to modify the Route below to /seller/:uniqueID
  return (<Item reviewer={true} reviewers={items[routerData.match.params.id].reviews.reviewers} />)
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={renderAllItems} />
          <Route exact={true} path='/seller/:id' render={renderSeller} />
          <Route exact={true} path='/details/:id' render={renderReviews} />
          <Route exact={true} path='/details/:id/:reviewer' render={renderReviewers} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
