import React from 'react'
import './Popup.css'
import visacard from '../img/visacard.jpeg'
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className=" popup-inner ">
        <img src={visacard} alt width={300} height={180} />

        <div className="row cardinner mt-3">
          <p>信用卡號 </p>
          <input
            type="text"
            className="form-control transparent-input "
          ></input>
        </div>

        <div className="row cardinner">
          <p>有效年月 </p>
          <input
            type="text"
            className="form-control transparent-input "
          ></input>
        </div>

        <div className="row cardinner">
          <p>檢核碼</p>
          <input
            type="text"
            className="form-control transparent-input "
          ></input>
        </div>
        <br></br>
    <div className="row ">
        <button
          className="btn homeP-btn items"
          onClick={() => props.setTrigger()}
        >
          確認送出
        </button>
       
        <button  className="close-btn
        btn homeP-btn booking"
          onClick={() => props.setTrigger()}
        >
         返回
        </button>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}

export default Popup
