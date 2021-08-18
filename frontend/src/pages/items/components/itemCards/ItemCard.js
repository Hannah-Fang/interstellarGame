import React, { useState } from 'react'
import "./itemCard.css"
import heart1 from '../..//img/heart1.png'
import cart from '../..//img/cart.png'

const ItemCard = (props) => {
  const {
    itemName,
    itemImage,
    OriginalPrice,
    SpecialOffer,
  } = props.step

  //for components' hover state
  const [hover, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      className="item-card"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="item-wrapper">
        <img src={itemImage} alt="pricing-table" />
        {/* hover than show the button */}
        {/* {Hover && (
          <Hover
            link={link}
            buttonText={buttonText}
            className={"card-button " + (hover ? "button-show" : "")}
          />
        )} */}
      </div>
      <div className="item-Name">
        <span>{itemName}</span>
      </div>
      <div className="item-group row">
        <div>
          <div>
            <span className="item-header">{OriginalPrice}</span>
          </div>
          <div>
            <span className="item-detail">{SpecialOffer}</span>
          </div>
        </div>
        <div>
          <div className="heart1-icon ">
            <img src={heart1} alt="item" />
          </div>
          <div className="cart-icon">
            <img src={cart} alt="item" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard