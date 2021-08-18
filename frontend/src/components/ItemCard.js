import React, { useState } from 'react'
import './itemCard.css'
import heart1 from '../pages/image/png/heart.png'
import cart from '../pages/image/png/cart.png'

const ItemCard = (props) => {
  //props: step (str), stepIcon(img, src), Hover(component), stepImage(img,src), stepHeader(str), stepDetail(str)
  const {
    itemName,
    heart1Icon,
    heartIcon,
    Hover,
    link,
    buttonText,
    itemImage,
    OriginalPrice,
    SpecialOffer,
    stepGroup,
    cartIcon,
  } = props.step

  //for components' hover state
  const [hover, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      className="na-itemCard"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="img-wrapperA">
        <img src={itemImage} alt="pricing-table" />
        {/* hover than show the button */}
        {Hover && (
          <Hover
            link={link}
            buttonText={buttonText}
            className={'card-button ' + (hover ? 'button-show' : '')}
          />
        )}
      </div>
      <div className="na-itemName">
        <span>{itemName}</span>
      </div>
      <div className="item-groupA">
        <div>
          <span className="item-headerA">{OriginalPrice}</span>
        </div>
        <div>
          <span className="item-detailA">{SpecialOffer}</span>
        </div>
        <div className="heartA">
          <img src={heart1} alt="step" />
        </div>
        <div className="cartA">
          <img src={cart} alt="step" />
        </div>
      </div>
    </div>
  )
}

export default ItemCard
