import React from 'react'
// import "../assets/css/bootstrap.min.css"
import "./itemDetail7.css"
import { withRouter } from 'react-router-dom'
import itemImage from '../img/搶尾刀.jpg'
import itemImage1 from '../img/搶尾刀2.jpg'
import itemImage2 from '../img/搶尾刀3.jpg'
import leftImage from '../img/left.png'
import rightImage from '../img/right.png'
import titleBoxImage from '../img/title-box.png'
import heartImage from '../img/heart.png'
import cartImage from '../img/cart.png'
import btnFavImage from '../img/btn-fav.png'
import ItemCard from "../components/itemCards/ItemCard"
import Add from '../../../components/Add'
import { item1, item2, item3, item4, item5, item6, item7, item8 } from "../components/itemCards/itemData1"

const midImage = {
    width: '80px',
    margin: '5px'
};
const itemStyle = {
    width: '17rem',
    border: '0px'
}

const ItemDetail7 = (props) => {
    const {
    } = props
    return (
        <>
            <div className="itemDetail">
                <div className="container">

                    <div className="itemDetail-card-body row">
                        <div className="itemDetail-left text-center ">
                            <div className="itemDetailA mb-1">
                                <img src={itemImage} alt="" />
                            </div>
                            <div className="container">
                                <div className="row ddd itemDetailB">
                                    <div>
                                        <img src={leftImage} style={{ marginTop: '33px', paddingRight: '5px' }} alt="" />
                                    </div>
                                    <div>
                                        <img src={itemImage} style={midImage} alt="" />
                                    </div>
                                    <div>
                                        <img src={itemImage1} style={midImage} alt="" />
                                    </div>
                                    <div>
                                        <img src={itemImage2} style={midImage} alt="" />
                                    </div>
                                    <div>
                                        <img src={itemImage1} style={midImage} alt="" />
                                    </div>
                                    <div>
                                        <img src={itemImage2} style={midImage} alt="" />
                                    </div>
                                    <div>
                                        <img src={rightImage} style={{ marginTop: '33px', paddingLeft: '5px' }} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                                <div className="">
                                    <div className="">
                                        <div className="divimg" id="img1"><img src={itemImage} className="bigimg3 active" alt="" /></div>
                                        <div className="divimg" id="img2"><img src={itemImage1} className="bigimg3" alt="" /></div>
                                        <div className="divimg" id="img3"><img src={itemImage2} className="bigimg3" alt="" /></div>
                                        <div className="divimg" id="img4"><img src={itemImage1} className="bigimg3" alt="" /></div>
                                        <div className="divimg" id="img5"><img src={itemImage2} className="bigimg3" alt="" /></div>
                                    </div>
                                    <div className="smallgroup">
                                        <a href="#img"><img src={leftImage} style={{ marginTop: '6px', paddingRight: '10px' }} alt="" /></a>
                                        <a href="#img1"><img src={itemImage} className="smallimg" alt="" /></a>
                                        <a href="#img2"><img src={itemImage1} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img3"><img src={itemImage2} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img4"><img src={itemImage1} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img5"><img src={itemImage2} className="smallimg" style={midImage} alt="" /></a>
                                        <a href="#img"><img src={rightImage} style={{ marginTop: '6px', paddingLeft: '10px' }} alt="" /></a>
                                    </div>
                                </div>
                            </div> */}
                        <div className="itemDetail-middle col-12 col-lg-6">
                            <div className="d-flex">
                                <div className="info-title p-1">000007</div>
                            </div>
                            <div className=" d-flex">
                                <div className="info-title p-1" style={{ fontSize: '32px' }}>搶尾刀</div>
                            </div>
                            <div className="d-flex">
                                <div className="info-title p-1">★想來點睡前的輕鬆寧靜遊戲嗎？</div>
                            </div>
                            <div className="d-flex cardA">
                                <div className="card-text1 p-1">定價NT$490</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-text2 p-1">特價NT$390</div>
                            </div>
                            <div className="d-flex cardB">
                                {/* <button className="btn1">-</button>
                                    <input type="text" className="input px-0" />
                                    <button className="btn2">+</button> */}
                                <ul className="counter1">
                                    <div className="Additem"><Add /></div>
                                    {/* <li id="minus" className="btn11">
                                        <input type="button" onclick="minuser()" value="-" className="button11" />
                                    </li>
                                    <li id="countnum1" className="btn12">1</li>
                                    <li id="plus" className="btn13">
                                        <input type="button" onclick="adder()" value="+" className="button13" />
                                    </li> */}
                                </ul>
                                <button className="join ml-2">加入購物車</button>
                            </div>
                        </div>
                        <div className="itemDetail-right">
                            <img src={btnFavImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className=" itemcontent">
                    <p>想來點睡前的輕鬆寧靜遊戲嗎？<br />
                        玩家依序出一、二或三張牌以湊成一排，當一排中有三張「3」、四張「4」、五張「5」、六張「6」或七張「7」時，這排便完成了。<br />
                        你獲得你所完成的那排中所有的紙牌。<br />
                        遊戲結束時，擁有最多牌的玩家獲勝。<br />
                        簡單的規則讓全家大小輕鬆上手，享受寧靜的刀光劍影！
                    </p>

                    <p>作者｜Leo Colvini & Dario di Toffoli<br /><br />
                        ★想來點睡前的輕鬆寧靜遊戲嗎？<br />
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="">
                    <div className="thumbnail text-center">
                        <img src={titleBoxImage} alt="" />
                        <div className="caption">
                            <p className="">其他商品</p>
                        </div>
                    </div>
                </div>
                <div className="step1">
                    <div className="row step2">
                        <div className="pic"><a href="/item-detail"><ItemCard step={item1} /></a></div>
                        <div className="pic"><a href="/item-detail2"><ItemCard step={item2} /></a></div>
                        <div className="pic"><a href="/item-detail3"><ItemCard step={item3} /></a></div>
                        <div className="pic"><a href="/item-detail4"><ItemCard step={item4} /></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(ItemDetail7)
