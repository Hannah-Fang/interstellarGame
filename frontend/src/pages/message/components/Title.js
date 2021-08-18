import React from 'react'
import astronaut from '../img/astronaut.svg'

function Title() {
  return (
    <div className="messagetitle">
      <img src={astronaut} alt="" />
      <p className="text01">募集志同道合的星際旅伴</p>
      <p className="text02">出發吧!</p>
    </div>
  )
}

export default Title
