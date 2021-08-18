import React from 'react'
// import "../assets/css/bootstrap.min.css"
import "./itemDetail5.css"
import { withRouter } from 'react-router-dom'
import itemImage from '../img/妙廚上菜.jpg'
import itemImage1 from '../img/妙廚上菜2.jpg'
import itemImage2 from '../img/妙廚上菜3.jpg'
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

const ItemDetail5 = (props) => {
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
                                <div className="info-title p-1">000005</div>
                            </div>
                            <div className=" d-flex">
                                <div className="info-title p-1" style={{ fontSize: '32px' }}>妙廚上菜</div>
                            </div>
                            <div className="d-flex">
                                <div className="info-title p-1">★料理界的奇觀！</div>
                            </div>
                            <div className="d-flex cardA">
                                <div className="card-text1 p-1">定價NT$1590</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-text2 p-1">特價NT$1490</div>
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
                    <p>料理界的奇觀！<br /><br />
                        大家都知道，人多手雜就會壞了事。在這款遊戲中，玩家們在嘶嘶作響的爐火上烹煮料理，<br />
                        並暗自期望著與自己爭奪大廚職位的對手們，會端出太鹹而且毫無價值的菜餚。<br />
                        當每一位玩家都在關心爐火是否完美時，你還必須發揮超級手感來灑上完美而正確的香料組合；<br />
                        燒焦或是過度調味的料理，只能塞滿垃圾桶而已。
                        唯有能掌控在廚房中所有的危機與風險的玩家，才能成為真正的頂尖大廚。
                    </p>

                    <p>作者｜Karl-Heinz Schmiel<br />
                        插畫｜Christof Tisch<br /><br />
                        ★2001 德國年度遊戲獎入圍 料理界的奇觀！<br />
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

export default withRouter(ItemDetail5)
