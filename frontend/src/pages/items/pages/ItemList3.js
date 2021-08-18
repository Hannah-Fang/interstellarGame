import React from 'react'
import "./itemList3.css"
import { withRouter } from 'react-router-dom'
// import Button from "../components/Button"
import ItemCard from "../components/itemCards/ItemCard"
import { Link } from 'react-router-dom'
// import { item1, item2, item3, item4, item5, item6, item7, item8 } from "../itemData"
import { item1, item2, item3, item4, item5, item6, item7, item8 } from "../components/itemCards/itemData1"
import all from "../img/rocket.png"
import card from "../img/卡牌.png"
import Strategy from "../img/策略.png"
import party from "../img/派對.png"
import Situation from "../img/情境.png"
import ParentChild from "../img/親子.png"
import camp from "../img/陣營.png"
import Cooperation from "../img/合作.png"
import titleBox from "../img/title-box.png"
import search from "../img/search.png"
import pagesbar from "../img/pagesbar.png"
import Carousel1 from "../img/Carousel1.png"
import Carousel2 from "../img/Carousel2.png"
import Carousel3 from "../img/Carousel3.png"
import Carousel4 from "../img/Carousel4.png"
import Carousel5 from "../img/Carousel5.png"

const ItemList3 = () => {
  return (
    <>
      <div className="">
        <div id="carouselSlides" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={Carousel1} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Carousel2} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Carousel3} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Carousel4} alt="" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Carousel5} alt="" />
            </div>
          </div>
          {/* <!--Carousel indicators 開始--> */}
          <ol className="carousel-indicators">
            <li data-target="#carouselSlides" data-slide-to="0" className="active"></li>
            <li data-target="#carouselSlides" data-slide-to="1" className=""></li>
            <li data-target="#carouselSlides" data-slide-to="2" className=""></li>
            <li data-target="#carouselSlides" data-slide-to="3" className=""></li>
            <li data-target="#carouselSlides" data-slide-to="4" className=""></li>
          </ol>
          {/* <!--Carousel control 開始--> */}
          <a className="carousel-control-prev" href="#carouselSlides" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#carouselSlides" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      <div className="booking-faq-button-wrapper">
        <div className="booking-steps-text"></div>
        <img src={titleBox} alt="" />
        <p className="titletext">商品列表</p>
      </div>
      <div className="container">
        {/* <div className="search">
          <div className="input-group">
            <input
              type="text"
              className="int"
              placeholder="  請輸入要搜尋的遊戲名稱"
            />
            <span className="input-group-btn">
              <!--不換行，與相鄰元素內聯-->
              <button className="btnitem"><img src={search} alt="" /></button>
            </span>
          </div>
        </div> */}
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="titleimg1">
            <img src={titleBox} alt="" />
            <span className="titleimg2">商品列表</span>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row Planetgroup">
          <a href="/item-list"><button className="PlanetA pagination1">
            <img src={all} alt="" />
            <p className="PlanetText">全部</p>
          </button></a>
          <a href="/item-list2"><button className="PlanetA">
            <img src={card} alt="" />
            <p className="PlanetText">卡牌星球</p>
          </button></a>
          <a href="/item-list3"><button className="PlanetA">
            <img src={Strategy} alt="" />
            <p className="PlanetText">策略星球</p>
          </button></a>
          <button className="PlanetA">
            <img src={party} alt="" />
            <p className="PlanetText">派對星球</p>
          </button>
          <button className="PlanetA">
            <img src={Situation} alt="" />
            <p className="PlanetText">情境星球</p>
          </button>
          <button className="PlanetA">
            <img src={ParentChild} alt="" />
            <p className="PlanetText">親子星球</p>
          </button>
          <button className="PlanetA">
            <img src={camp} alt="" />
            <p className="PlanetText">陣營星球</p>
          </button>
          <button className="PlanetA">
            <img src={Cooperation} alt="" />
            <p className="PlanetText">合作星球</p>
          </button>
        </div>
      </div>
      <div className="container">
        {/* <div className="row step1">
          <div className="pic"><a href="/item-detail"><ItemCard step={item1} /></a></div>
          <div className="pic"><a href="/item-detail2"><ItemCard step={item2} /></a></div>
          <div className="pic"><a href="/item-detail3"><ItemCard step={item3} /></a></div>
          <div className="pic"><a href="/item-detail4"><ItemCard step={item4} /></a></div>
        </div> */}
        <div className="row step1">
          <div className="pic"><a href="/item-detail5"><ItemCard step={item5} /></a></div>
          <div className="pic"><a href="/item-detail6"><ItemCard step={item6} /></a></div>
          <div className="pic"><a href="/item-detail7"><ItemCard step={item7} /></a></div>
          <div className="pic"><a href="/item-detail8"><ItemCard step={item8} /></a></div>
        </div>
        {/* <div className="row step1">
          <div className="pic"><a href="/item-detail"><ItemCard step={item1} /></a></div>
          <div className="pic"><a href="/item-detail"><ItemCard step={item2} /></a></div>
          <div className="pic"><a href="/item-detail"><ItemCard step={item3} /></a></div>
          <div className="pic"><a href="/item-detail"><ItemCard step={item4} /></a></div>
        </div>
        <div className="row step1">
          <div className="pic"><a href="/item-detail"><ItemCard step={item5} /></a></div>
          <div className="pic"><a href="/item-detail"><ItemCard step={item6} /></a></div>
          <div className="pic"><a href="/item-detail"><ItemCard step={item7} /></a></div>
          <div className="pic"><a href="/item-detail"><ItemCard step={item8} /></a></div>
        </div> */}
      </div>
      <div className="container">
        <div className="">
          <div className="thumbnail text-center">
            <img src={pagesbar} className="thumbnail1" alt="" />
            <div className="caption">
              <ul className="pagination">
                <li><a href="#">«</a></li>
                <li><a href="#">1</a></li>
                {/* <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">7</a></li>
                <li><a href="#">8</a></li> */}
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ItemList3)
