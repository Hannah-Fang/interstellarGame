import React, { useEffect } from 'react'

import $ from 'jquery'

import './homepage.css'
// import '../components/itemCard.css'
import Button from '../components/Button'
import ItemCard from '../components/ItemCard'
import { item9, item10, item11, item12 } from '../components/itemData1'

import kv_earth from '../pages/image/svg/kv - earth.svg'
import kv_astronaut from '../pages/image/svg/kv - astronaut.svg'
import kv_moon from '../pages/image/svg/kv - moon.svg'
import kv_Saturn from '../pages/image/svg/kv - Saturn.svg'
// import p1_shuttle from '../pages/image/png/p1-shuttle.png'
import p1_astronaut1 from '../pages/image/svg/p1 - astronaut1.svg'
import p1_astronaut2 from '../pages/image/svg/p1 - astronaut2.svg'
import about_store1_1 from '../pages/image/jpg/about_store1-1.jpg'
import about_store1_2 from '../pages/image/jpg/about_store1-2.jpg'
import about_store1_3 from '../pages/image/jpg/about_store1-3.jpg'
import about_store2_1 from '../pages/image/jpg/about_store2-1.jpg'
import about_store2_2 from '../pages/image/jpg/about_store2-2.jpg'
import about_store2_3 from '../pages/image/jpg/about_store2-3.jpg'
import p2_astronaut from '../pages/image/svg/p2 - astronaut.svg'
import p2_satellite from '../pages/image/svg/p2 - satellite.svg'
import arrow_left from '../pages/image/svg/icon-arrow_left.svg'
import arrow_right from '../pages/image/svg/icon-arrow_right.svg'
import icon_step from '../pages/image/svg/icon-step.svg'
import p3_astronaut from '../pages/image/svg/p3 - astronaut.svg'

const Homepage = () => {
  let nowPage = 0
  useEffect(() => {
    $('.left-arrow').click(function () {
      // console.log('left-arrow')
      // >= 大於等於 / <= 小於等於
      if (nowPage <= 0) return
      nowPage--
      changePage()
      sic()
    })
    $('.right-arrow').click(function () {
      // console.log('right-arrow')
      // >= 大於等於 / <= 小於等於
      if (nowPage < 5) {
        nowPage++
      } else {
        nowPage = 0
      }
      changePage()
      sic()
    })
    // ----------
    const sic = function () {
      const moveX = -790 * nowPage
      if ((0 > moveX, moveX > -1581)) {
        $('.ic-1').addClass('ic-move-b').removeClass('ic-move-h')
        $('.ic-2').addClass('ic-move-h').removeClass('ic-move-b')
        // console.log('1-3頁')
      } else {
        $('.ic-2').addClass('ic-move-b').removeClass('ic-move-h')
        $('.ic-1').addClass('ic-move-h').removeClass('ic-move-b')
        // console.log('4-6頁')
      }
    }

    sic()

    let timer = null
    const timerFunction = function () {
      timer = setInterval(() => {
        if (nowPage < 5) {
          nowPage++
        } else {
          nowPage = 0
        }
        changePage()
        sic()
      }, 3000)
    }

    timerFunction()
    // ----------
    $('.si-carousel').mouseenter(function () {
      // console.log('hover')
      clearInterval(timer)
    })

    $('.si-carousel').mouseleave(() => {
      timerFunction()
    })
    // ----------
    function changePage() {
      const moveX = -790 * nowPage
      $('.img-wrap').css('transform', `translateX(${moveX}px)`)
    }
  }, [nowPage])

  return (
    <>
      <div className="bg-homepage">
        <div className="h-container">
          <div className="kv">
            <div className="kv-slogan fontcolor-w">
              <p className="kv-slogan-t homeP-fontWeight">
                地球的生活太枯燥乏味？
              </p>
              <p className="kv-slogan-t homeP-fontWeight">
                遨遊星際桌遊盡情享受未知的旅程吧！
              </p>
              <p className="bigslogan homeP-fontWeight">
                準備好來場太空冒險了嗎？
              </p>
            </div>
            <div className="kv-btn">
              <Button
                className="btn homeP-btn booking"
                link="/booking/steps"
                buttonText="立即預約"
              />
              <Button
                className="btn homeP-btn items"
                link="/item-list"
                buttonText="購買遊戲"
              />
            </div>
            <div className="kv-scrolldown a-downup">
              <span className="fontcolor-w scrolldown homeP-fontWeight">
                Scroll Down
              </span>
              <div className="triangle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height="17.436"
                  viewBox="0 0 20 17.436"
                >
                  <path
                    id="多边形_1"
                    data-name="多边形 1"
                    d="M8.265,3.025a2,2,0,0,1,3.47,0l6.547,11.416a2,2,0,0,1-1.735,3H3.453a2,2,0,0,1-1.735-3Z"
                    transform="translate(20 17.436) rotate(180)"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
            <div className="kv-bg">
              <img className="kv-svg-earth a-rotate" src={kv_earth} alt="" />
              <img
                className="kv-svg-astronaut a-downup"
                src={kv_astronaut}
                alt=""
              />
              <img className="kv-svg-moon a-rotate" src={kv_moon} alt="" />
              <img className="kv-svg-Saturn a-downup" src={kv_Saturn} alt="" />
            </div>
          </div>
          <div className="new-arrival">
            <div className="na-title title fontcolor-w">
              <p className="blcok-header homeP-fontWeight">NEW ARRIVAL</p>
              <p className="blcok-slogan homeP-fontWeight">最新最熱的桌遊！</p>
            </div>
            <div className="na-carousel step-a">
              <div className="na-itemCards">
                <ItemCard step={item9} />
              </div>
              <div className="na-itemCards">
                <ItemCard step={item10} />
              </div>
              <div className="na-itemCards">
                <ItemCard step={item11} />
              </div>
              <div className="na-itemCards">
                <ItemCard step={item12} />
              </div>
            </div>
            <div className="na-bg">
              {/* <img className="na-png-shuttle" src={p1_shuttle} alt="" /> */}
              <img
                className="na-svg-astronaut1 a-downupAndrotate"
                src={p1_astronaut1}
                alt=""
              />
              <img
                className="na-svg-astronaut2 a-downup"
                src={p1_astronaut2}
                alt=""
              />
            </div>
          </div>
          <div className="store-introdution">
            <div className="si-title title fontcolor-w">
              <p className="blcok-header homeP-fontWeight">
                STORE INTRODUCTION
              </p>
              <p className="blcok-slogan homeP-fontWeight">
                舒適安心的遊戲環境！
              </p>
            </div>
            <div className="si-text fontcolor-w">
              <p className="homeP-fontWeight">
                提供安心、安全以及輕鬆、舒適的環境，創造快樂回憶的神隊友，店內收藏近千款桌遊，親切的服務與詳細的遊戲介紹，讓玩家盡情享受遊戲的樂趣！
              </p>
            </div>
            <div className="si-carousel">
              <div className="carousel-pic">
                <ul className="list-unstyled img-wrap">
                  <li>
                    <img src={about_store1_1} alt="" />
                  </li>
                  <li>
                    <img src={about_store1_2} alt="" />
                  </li>
                  <li>
                    <img src={about_store1_3} alt="" />
                  </li>
                  <li>
                    <img src={about_store2_1} alt="" />
                  </li>
                  <li>
                    <img src={about_store2_2} alt="" />
                  </li>
                  <li>
                    <img src={about_store2_3} alt="" />
                  </li>
                </ul>
              </div>
              <div className="carousel-arrow">
                <div className="left-arrow">
                  <img src={arrow_left} alt="" />
                </div>
                <div className="right-arrow">
                  <img src={arrow_right} alt="" />
                </div>
              </div>
              <div className="information-card">
                <div className="ic ic-1">
                  <p className="ic-1 ic-title homeP-fontWeight">台北大安店</p>
                  <div className="ic-content">
                    <p className=" homeP-fontWeight">場地類型| 10人精緻包廂</p>
                    <p className=" homeP-fontWeight">
                      22:00 開放預訂時間 週一至週日10:00
                    </p>
                    <p className=" homeP-fontWeight">
                      店家地址 |台北市大安區通化街28巷2號
                    </p>
                    <p className=" homeP-fontWeight">場地費用 | 50 / 人</p>
                  </div>
                </div>
                <div className="ic ic-2">
                  <span className="ic-title homeP-fontWeight">台北松山店</span>
                  <div className="ic-content">
                    <p className=" homeP-fontWeight">場地類型| 10人精緻包廂</p>
                    <p className=" homeP-fontWeight">
                      22:00 開放預訂時間 週一至週日10:00
                    </p>
                    <p className=" homeP-fontWeight">
                      店家地址 |台北市松山區八德路三段12巷11號
                    </p>
                    <p className=" homeP-fontWeight">場地費用 | 50 / 人</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="si-bg">
              <img
                className="si-svg-astronaut a-downupAndrotate"
                src={p2_astronaut}
                alt=""
              />
              <img
                className="si-svg-satellite a-downupAndrotate2"
                src={p2_satellite}
                alt=""
              />
            </div>
          </div>
          <div className="reservations">
            <div className="b-title na-title fontcolor-w">
              <p className="blcok-header homeP-fontWeight">BOOKING</p>
              <p className="blcok-slogan homeP-fontWeight">
                預約你的桌遊冒險！
              </p>
            </div>
            <div className="b-btn">
              <Button
                className="btn homeP-btn booking"
                link="/booking/steps"
                buttonText="立即預約"
              />
            </div>
            <div className="b-step">
              <div className="stepbox stepOne a-downup">
                <div className="stepnumber">
                  <img className="stepicon" src={icon_step} alt="" />
                  <p className="stepnum fontcolor-w homeP-fontWeight">1</p>
                </div>
                <div className="steptext">
                  <div className="step-title">
                    <p className="content-title fontcolor-w homeP-fontWeight">
                      STEP 1　
                      <span className="content-title fontcolor-y homeP-fontWeight">
                        尋找夥伴
                      </span>
                    </p>
                  </div>
                  <div className="step-content">
                    <p className="content fontcolor-w homeP-fontWeight">
                      尋找身邊想一起探索桌遊宇宙的太空人夥伴，建議3人以上成行。
                    </p>
                  </div>
                </div>
              </div>
              <div className="stepbox stepTwo a-downup">
                <div className="stepnumber">
                  <img className="stepicon" src={icon_step} alt="" />
                  <p className="stepnum fontcolor-w homeP-fontWeight">2</p>
                </div>
                <div className="steptext">
                  <div className="step-title">
                    <p className="content-title fontcolor-w homeP-fontWeight">
                      STEP 2　
                      <span className="content-title fontcolor-y homeP-fontWeight">
                        預約艙房
                      </span>
                    </p>
                  </div>
                  <div className="step-content">
                    <p className="content fontcolor-w homeP-fontWeight">
                      我們有舒適寬敞的分店供您選擇，來看一下離你最近的分店！
                    </p>
                  </div>
                </div>
              </div>
              <div className="stepbox stepThree a-downup">
                <div className="stepnumber">
                  <img className="stepicon" src={icon_step} alt="" />
                  <p className="stepnum fontcolor-w homeP-fontWeight">3</p>
                </div>
                <div className="steptext">
                  <div className="step-title">
                    <p className="content-title fontcolor-w homeP-fontWeight">
                      STEP 3　
                      <span className="content-title fontcolor-y homeP-fontWeight">
                        完成付款
                      </span>
                    </p>
                  </div>
                  <div className="step-content">
                    <p className="content fontcolor-w homeP-fontWeight">
                      確認您的預約內容無誤，會開放付款功能，請您完成線上付款。
                    </p>
                  </div>
                </div>
              </div>
              <div className="stepbox stepFour a-downup">
                <div className="stepnumber">
                  <img className="stepicon" src={icon_step} alt="" />
                  <p className="stepnum fontcolor-w homeP-fontWeight">4</p>
                </div>
                <div className="steptext">
                  <div className="step-title">
                    <p className="content-title fontcolor-w homeP-fontWeight">
                      STEP 4　
                      <span className="content-title fontcolor-y homeP-fontWeight">
                        探險開始
                      </span>
                    </p>
                  </div>
                  <div className="step-content">
                    <p className="content fontcolor-w homeP-fontWeight">
                      付款完成後，請依照時間抵達預約探險的太空艙，開始您的探險。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b-bg">
              <img className="b-svg-astronaut" src={p3_astronaut} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage
