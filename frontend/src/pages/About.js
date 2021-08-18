import React, { useEffect } from 'react'
import $ from 'jquery'

import './about.css'
import Button from '../components/Button'

import iconEarth from './image/svg/about_bg-earth.svg'
import about_01 from './image/jpg/about_01.jpg'
import about_venue from './image/jpg/about_venue-01.jpg'
import about_bgordering from './image/jpg/about_bgordering-01.jpg'
import vr_Q1 from './image/png/about_vr-Q1.png'
import vr_Q2 from './image/png/about_vr-Q2.png'
import vr_Q3 from './image/png/about_vr-Q3.png'
import vr_Q4 from './image/png/about_vr-Q4.png'
import bo_Q1 from './image/png/about_bo-Q1.png'
import bo_Q2 from './image/png/about_bo-Q2.png'
import bo_Q3 from './image/png/about_bo-Q3.png'
import bo_Q4 from './image/png/about_bo-Q4.png'

const About = () => {
  useEffect(() => {
    $(function () {
      // 預設第一個 click
      const firstClick = 0
      const $another = $('.click-title li').eq(firstClick).addClass('active')
      $($another.find('a').attr('href')).siblings().hide()

      // li 頁籤被 click
      $('.click-vr')
        .click(function () {
          // 找 li 裡的 a href'#id'
          const $this = $(this),
            clickThis = $this.find('a').attr('href')

          // 自己有 active，其他沒有
          $this.addClass('active').siblings('.active').removeClass('active')

          $(clickThis).stop(false, true).fadeIn().siblings().hide()

          return false
        })
        .find('a')
        .focus(function () {
          this.blur()
        })
      $('.click-bo')
        .click(function () {
          // 找 li 裡的 a href'#id'
          const $this = $(this),
            clickThis = $this.find('a').attr('href')

          // 自己有 active，其他沒有
          $this.addClass('active').siblings('.active').removeClass('active')

          $(clickThis).stop(false, true).fadeIn().siblings().hide()

          return false
        })
        .find('a')
        .focus(function () {
          this.blur()
        })
    })
  })

  return (
    <div className="bg-about">
      <div className="about-container">
        <div className="server-title">
          <div className="server-text">
            <p className="little-title fontcolor-w about-fontWeight">
              關於星際漫遊
            </p>
            <p className="about-title2 fontcolor-w about-fontWeight">
              服務項目、場地租借、桌遊訂購
            </p>
          </div>
          <div className="server-icon">
            <img className="earth about-downup" src={iconEarth} alt="" />
          </div>
        </div>
        <div className="server-items">
          <div className="si-pic">
            <img src={about_01} alt="" />
          </div>
          <div className="si-content">
            <p className="si-title little-title fontcolor-b about-fontWeight">
              服務項目
            </p>
            <p className="content-text si-text fontcolor-b about-fontWeight">
              門市除了專業的解說人員及舒適的空間，控延伸許多種進階服務項目。包含揪團留言板與桌遊產品訂購。
            </p>
          </div>
        </div>
        <div className="venue-rental">
          <div className="introdution-box">
            <div className="ib-title">
              <p className="about-title2 title-bg fontcolor-w about-fontWeight">
                場地租借
              </p>
            </div>
            <div className="ib-content">
              <p className="content-text border-bg fontcolor-w about-fontWeight">
                門市有著整潔、乾淨、明亮的環境，適合親子同樂也是好友相約的好所在。各種遊戲的玩法都有點元的親切說明，我們秉持著帶給客人最大歡樂的宗旨。
              </p>
              <Button
                className="btn booking"
                link="/booking/steps"
                buttonText="立即預約"
              />
            </div>
          </div>
          <div className="vr-pic">
            <img src={about_venue} alt="" />
          </div>
        </div>
        <div className="boardgame-ordering">
          <div className="bgo-pic">
            <img src={about_bgordering} alt="" />
          </div>
          <div className="introdution-box bgo-box">
            <div className="ib-title">
              <p className="about-title2 title-bg fontcolor-w about-fontWeight">
                桌遊訂購
              </p>
            </div>
            <div className="ib-content">
              <p className="content-text border-bg fontcolor-w about-fontWeight">
                不論是指定商品或是您的特定需求，我們將盡力達成!且提供種類豐富的遊戲種類，讓您購買到理想的遊戲。
              </p>
              <Button
                className="btn items"
                link="/item-list"
                buttonText="購買遊戲"
              />
            </div>
          </div>
        </div>
        <div className="fqa">
          <div className="fqa-title">
            <p className="about-title fontcolor-b about-fontWeight">
              常見 Q&amp;A
            </p>
          </div>
          <div className="fqa-bookmark">
            <ul className="click-title">
              <li className="click-vr">
                <a className="vr-a fqa-click" href="#vr">
                  場地 Q&amp;A
                </a>
              </li>
              <li className="click-bo">
                <a className="bo-a fqa-click" href="#bo">
                  訂購 Q&amp;A
                </a>
              </li>
            </ul>
            <div className="content-group">
              <div id="vr" className="con-g fqa-content1">
                <img className="fqa-block" src={vr_Q1} alt="" />
                <img className="fqa-block" src={vr_Q2} alt="" />
                <img className="fqa-block" src={vr_Q3} alt="" />
                <img className="fqa-block" src={vr_Q4} alt="" />
              </div>
              <div id="bo" className="con-g fqa-content2">
                <img className="fqa-block" src={bo_Q1} alt="" />
                <img className="fqa-block" src={bo_Q2} alt="" />
                <img className="fqa-block" src={bo_Q3} alt="" />
                <img className="fqa-block" src={bo_Q4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="store-location">
          <div className="sl-title">
            <p className="about-title foncolor-b about-fontWeight">門市位置</p>
          </div>
          <div className="sl-group">
            <input
              type="radio"
              name="panel-radio"
              id="sl-1"
              className="sl-control"
              defaultChecked
            />
            <input
              type="radio"
              name="panel-radio"
              id="sl-2"
              className="sl-control"
            />
            <div className="sl-namegroup">
              <label className="sl-name fontcolor-w" htmlFor="sl-1">
                台北大安店
              </label>
              <label className="sl-name fontcolor-w" htmlFor="sl-2">
                台北松山店
              </label>
            </div>
            <div className="sl-mapgroup">
              <div className="sl-map sl-1">
                <iframe
                  title={' '}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.084002936476!2d121.55161311537873!3d25.031223144555838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abcc810abcbb%3A0x81fc11febc2ebcfe!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A6YCa5YyW6KGXMjjlt7cy6Jmf!5e0!3m2!1szh-TW!2stw!4v1626622510640!5m2!1szh-TW!2stw"
                  width={550}
                  height={240}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="sl-map sl-2">
                <iframe
                  title={' '}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6242809078517!2d121.54862491537892!3d25.04682164393057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abc30cba3463%3A0x7ff346aa633ba9e1!2zMTA15Y-w5YyX5biC5p2-5bGx5Y2A5YWr5b636Lev5LiJ5q61MTLlt7cxMeiZnw!5e0!3m2!1szh-TW!2stw!4v1626622890619!5m2!1szh-TW!2stw"
                  width={550}
                  height={240}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
