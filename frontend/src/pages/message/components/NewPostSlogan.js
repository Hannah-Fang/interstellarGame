import React from 'react'
import arrowAstronaut from '../img/ArrowAstronaut.png'

function NewPostSlogan() {
  return (
    <>
      <div className="postSlogan">
        <div className="postcontainer">
          <h5>
            找不到合適的團隊嗎?
            <br />
            那就自己成為新的團主吧!
          </h5>
          <div className="arrowAstronaut">
            <img src={arrowAstronaut} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPostSlogan
