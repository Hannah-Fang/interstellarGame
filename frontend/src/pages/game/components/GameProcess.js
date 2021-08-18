import React from 'react'
import step1 from '../img/step1.svg'
import step2 from '../img/step2.svg'
import step3 from '../img/step3.svg'

function GameProcess() {
  return (
    <>
      <div className="processContainer">
        <div className="step step1">
          <div className="planent">
            <img src={step1} alt="" />
          </div>
          <div className="steptext">
            <p className="mainText">
              step 1 <span>登入會員</span>
            </p>
            <p className="subText">
              註冊您的帳號並登入會員，稍後完成遊戲時，系統會將優惠券自動存入您的帳戶中。
            </p>
          </div>
        </div>
        <div className="step step2">
          <div className="planent">
            <img src={step2} alt="" />
          </div>
          <div className="steptext">
            <p className="mainText">
              step 2 <span>挑戰遊戲</span>
            </p>
            <p className="subText">
              點擊開始遊戲，以鍵盤上下方向鍵操縱太空船，閃避的隕石越多分數越高；太空船共有3點生命值，每當被隕石命中會減少。
            </p>
          </div>
        </div>
        <div className="step step3">
          <div className="planent">
            <img src={step3} alt="" />
          </div>
          <div className="steptext">
            <p className="mainText">
              step 3 <span>領取並使用</span>
            </p>
            <p className="subText">
              若遊戲中獲得的分數高於100分，遊戲結算後，即可獲得優惠券。小提醒 :
              每個月會重置小遊戲優惠券的獲取次數，記得回來挑戰喔!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameProcess
