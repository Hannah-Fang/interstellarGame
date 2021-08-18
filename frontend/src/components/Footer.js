import React from 'react'
import './footer.css'

import location from '../pages/image/svg/icon-location.svg'
import phone from '../pages/image/svg/icon-phone.svg'

const Footer = () => {
  return (
    <footer>
      <div className="container footer-c">
        <div className="footer-item footer-content">
          <div className="foobox1">
            <span className="foo-title">探索星際漫遊</span>
            <hr />
            <div className="foo-link">
              <a href="/Homepage">首頁</a>
              <a href="/messageboard">太空交誼廳</a>
              <a href="/item-list">宇宙市集</a>
              <a href="/Game">星際任務</a>
            </div>
          </div>
          <div className="foobox1">
            <span className="foo-title">線上服務</span>
            <hr />
            <div className="foo-link">
              <a href="/member">會員中心</a>
              <a href="/booking/steps">預約艙房</a>
              <a href="/About">FAQ 常見問題</a>
            </div>
          </div>
          <div className="foobox1">
            <span className="foo-title">社交媒體</span>
            <hr />
            <div className="foo-link">
              <a href="/">Facebook</a>
              <a href="/">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-item footer-store">
          <div className="foobox2">
            <div className="store-address">
              <img src={location} alt="" />
              <span className="address">台北市大安區通化街28巷2號</span>
            </div>
            <div className="store-phone">
              <img src={phone} alt="" />
              <span className="phone">(02)2703-6003 | 0906666265</span>
            </div>
          </div>
          <div className="foobox2">
            <div className="store-address">
              <img src={location} alt="" />
              <span className="address">台北市松山區八德路三段12巷11號</span>
            </div>
            <div className="store-phone">
              <img src={phone} alt="" />
              <span className="phone">(02)2579-8608</span>
            </div>
          </div>
        </div>
        <div className="footer-item footer-copyright">
          <div className="foobox3">
            <p className="copyright">Copyright © 2021 星際漫遊 桌遊</p>
            <p className="copyright">
              Power By Interstellar Wandering Board Game
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
