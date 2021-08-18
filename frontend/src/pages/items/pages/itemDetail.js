// import "../assets/css/bootstrap.min.css"
import './itemDetail.css'
import { withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import itemImage from '../img/item.png'
import itemImage1 from '../img/目擊者之夜1.jpg'
import itemImage2 from '../img/目擊者之夜2.jpg'
import leftImage from '../img/left.png'
import rightImage from '../img/right.png'
import titleBoxImage from '../img/title-box.png'
import heartImage from '../img/heart.png'
import cartImage from '../img/cart.png'
import btnFavImage from '../img/btn-fav.png'
import ItemCard from '../components/itemCards/ItemCard'
import Add from '../../../components/Add'
import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
} from '../components/itemCards/itemData1'
import { Modal, Button } from 'react-bootstrap'
const midImage = {
  width: '80px',
  margin: '5px',
}
const itemStyle = {
  width: '17rem',
  border: '0px',
}
const ItemDetail = (props) => {
  const [Mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.itemId === item.itemId)
    console.log(currentCart)
    // found: index! == -1id\
    if (index > -1) {
      //currentCart[index].amount++
      setProductName('已加入過此商品')
      handleShow()
      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
    handleShow()
  }
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          className="button55"
          onClick={() => {
            props.history.push('/item-list')
          }}
        >
          繼續購物
        </Button>
        <Button
          className="button66"
          variant="primary"
          onClick={() => {
            props.history.push('/Shoppingcart1')
          }}
        >
          前往結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const display = (
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
                    <img
                      src={leftImage}
                      style={{ marginTop: '33px', paddingRight: '5px' }}
                      alt=""
                    />
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
                    <img
                      src={rightImage}
                      style={{ marginTop: '33px', paddingLeft: '5px' }}
                      alt=""
                    />
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
                            </div>  */}
            <div className="itemDetail-middle col-12 col-lg-6">
              <div className="d-flex">
                <div className="info-title p-1">000001</div>
              </div>
              <div className=" d-flex">
                <div className="info-title p-1" style={{ fontSize: '32px' }}>
                  目擊者之夜
                </div>
              </div>
              <div className="d-flex">
                <div className="info-title p-1">
                  ★2013 德國年度玩家遊戲獎推薦
                </div>
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
                <button
                  type="button"
                  className="join"
                  onClick={() => {
                    updateCartToLocalStorage({
                      itemId: 100,
                      name: '目擊者之夜',
                      amount: 1,
                      price: 390,
                    })
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div className="itemDetail-right">
              <img src={btnFavImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className=" itemcontent">
          <p>疑神疑鬼的密室推理陣營遊戲</p>
          <p>
            山中作客的夜晚，主人慘遭殺害！
            <br />
            殺人魔就在受邀的賓客中，為了避免殺戮繼續蔓延，賓客們交換目擊情報，討論兇手的去向。
            <br />
            在有限的時間內，賓客能否藉由各自職業上的優勢，識破殺人魔與其共犯羅織的謊言，並經由投票將嫌疑人關進鍋爐室裡，確保自身的安全？
          </p>
          <p>
            作者｜ぎゅんぶく屋、すごろくや
            <br />
            插畫｜渋江玖流（ぎゅんぶく屋）<br />
            <br />★ 2021 天鵝獎｜最佳陣營遊戲
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
            <div className="pic">
              <a href="/item-detail5">
                <ItemCard step={item5} />
              </a>
            </div>
            <div className="pic">
              <a href="/item-detail6">
                <ItemCard step={item6} />
              </a>
            </div>
            <div className="pic">
              <a href="/item-detail7">
                <ItemCard step={item7} />
              </a>
            </div>
            <div className="pic">
              <a href="/item-detail8">
                <ItemCard step={item8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {messageModal}
      {display}
    </>
  )
}
export default withRouter(ItemDetail)
