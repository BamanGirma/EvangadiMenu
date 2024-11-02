import React, { Component } from 'react'

export default class FoodItem extends Component {
  render() {
    let {img,title,price,desc} = this.props
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{desc}</div>
        </div>
      </>
    );
  }
}
