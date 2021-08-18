import React, { useState, useEffect } from 'react'
import './Shoppingcart3.css'
import pinkline from '../Cart/img/pinkline.svg'
import grayline from '../Cart/img/grayline.svg'
import launch from '../Cart/img/launch.svg'
import launch2 from '../Cart/img/launch2.svg'
import pay1 from '../Cart/img/pay.svg'
import deliver1 from '../Cart/img/deliver.svg'
import coupon from '../Cart/img/coupon.svg'
import { withRouter } from 'react-router-dom'
import Popup from './components/Popup'
function Shoppingcart3(props) {
  const [clickpopup, setclickpopup] = useState(false)
  const [deliveryTypeId, setdeliveryTypeId] = useState('')
  const [paymentTypeId, setpaymentTypeId] = useState('')
  const [dataLoading, setDataLoading] = useState(false)
  const [orderName, setorderName] = useState('')
  const [orderMobile, setorderMobile] = useState('')
  const [orderMail, setorderMail] = useState('')
  const [orderAddress, setorderAddress] = useState('')
  const [voucherId, setvoucherId] = useState('')
  const [mycart, setMycart] = useState([])
  const { updateCartNum } = props
  const [mycartDisplay, setMycartDisplay] = useState([])
  // function getCartFromLocalStorage() {
  //   // 開啟載入的指示圖示
  //   setDataLoading(true)
  //   const newCart = localStorage.getItem('cart')
  //   console.log(JSON.parse(newCart))
  //   setMycart(JSON.parse(newCart))
  // }

  // useEffect(() => {
  //   getCartFromLocalStorage()
  // }, [])

  // // / 每次mycart資料有改變，1秒後關閉載入指示
  // // componentDidUpdate
  // useEffect(() => {
  //   setTimeout(() => setDataLoading(false),100)
  //   // mycartDisplay運算
  //   let newMycartDisplay = []
  //   //尋找mycartDisplay
  //   for (let i = 0; i < mycart.length; i++) {
  //     //尋找mycartDisplay中有沒有此mycart[i].id
  //     //有找到會返回陣列成員的索引值
  //     //沒找到會返回-1
  //     const index = newMycartDisplay.findIndex(
  //       (value) => value.itemId === mycart[i].itemId
  //     )
  //     //有的話就數量+1
  //     if (index !== -1) {
  //       //每次只有加1個數量
  //       //newMycartDisplay[index].amount++
  //       //假設是加數量的
  //       newMycartDisplay[index].amount += mycart[i].amount
  //     } else {
  //       //沒有的話就把項目加入，數量為1
  //       const newItem = { ...mycart[i] }
  //       newMycartDisplay = [...newMycartDisplay, newItem]
  //     }
  //   }
  //   console.log(newMycartDisplay)
  //   setMycartDisplay(newMycartDisplay)
  // }, [mycart])

  // const newCart = localStorage.getItem('cart') || '[]'
  // const newCartJson = JSON.parse(newCart)
  // const neworderData2 = { newCartJson }
  // console.log('newCartJson', newCartJson)

  // const updateCartToLocalStorage1 = (item, isAdded = true) => {
  //   console.log(item, isAdded)
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || []
  //   console.log('index', currentCart)
  //   // find if the product in the localstorage with its id
  //   const index = currentCart.findIndex((v) => v.itemId === item.itemId)
  //   console.log('index', index)
  //   // found: index! == -1
  //   if (index > -1) {
  //     isAdded ? currentCart[index].amount++ : currentCart[index].amount--
  //   }
  //   localStorage.setItem('cart', JSON.stringify(currentCart))
  //   // 設定資料
  //   setMycart(currentCart)
  // }

  async function addtextToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const neworderData = {
      orderName,
      orderMobile,
      orderMail,
      orderAddress,
      deliveryTypeId,
      paymentTypeId,
      voucherId,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/itemorders/'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(neworderData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(neworderData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)


     //待開發
    // const neworderData2 = { items: newCartJson }
    // console.log('neworderData2', neworderData2)

    // const url2 = 'http://localhost:6005/itemLists/'

    // // 注意資料格式要設定，伺服器才知道是json格式
    // const request2 = new Request(url2, {
    //   method: 'POST',
    //   body: JSON.stringify(neworderData2),
    //   headers: new Headers({
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }),
    // })

    // console.log(JSON.stringify(neworderData2))

    // const response2 = await fetch(request2)
    // const data2 = await response2.json()

    // console.log('伺服器回傳的json資料', data2)
    // //  要等驗証過，再設定資料(簡單的直接設定)





  //   //直接在一段x秒關掉指示器
  //   setTimeout(() => {
  //     setDataLoading(false)
  //   }, 500)
  // //    //把購物車清空
 
   }
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <>
      <div className="container ">
        <div className="top m-5">
          <img src={launch} alt width={100} height={100} />
          <img src={pinkline} alt width={200} height={100} />
          <img src={launch} alt width={100} height={100} />
          <img src={grayline} alt width={200} height={100} />
          <img src={launch2} alt width={100} height={100} />
        </div>
        <div className="top1 mb-5 ">
          <p2 className="cartwhite">購物明細</p2>
          <p2 className="cartwhite"> 付款資料</p2>
          <p3 className="cartgray">訂單資訊</p3>
        </div>
        <div className="cart3title1 p-3">
          <p4 class="cartbold">付款資料</p4>
        </div>
        {/* 訂購資料 */}
        <div className="nobottom p-3  ">
          <div className="svg6 mt-4">
            <img src={pay1} alt width={200} height={100} />
          </div>
        </div>
        <div className="title3 pb-4 cartwhite2">
          <div className=" title4 " />
          <div className="edit-form">
            <div className="input-box pb-4 p2 ">
              <label  htmlFor="user ">姓名</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="ordername"
                  placeholder="請輸入你的姓名"
                  value={orderName}
                  onChange={(e) => {
                    setorderName(e.target.value)
                  }}
                />
              </div>
              <br />
              <label  htmlFor="user">電話</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="ordermobile"
                  placeholder="請輸入你的電話"
                  value={orderMobile}
                  onChange={(e) => {
                    setorderMobile(e.target.value)
                  }}
                />
              </div>
              <br />
              <label   htmlFor="user">mail</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="ordermail"
                  placeholder="請輸入你的mail"
                  value={orderMail}
                  onChange={(e) => {
                    setorderMail(e.target.value)
                  }}
                />
              </div>
              <br />
              <label     htmlFor="user">地址</label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="orderaddress"
                  placeholder="請輸入你的地址"
                  value={orderAddress}
                  onChange={(e) => {
                    setorderAddress(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 配送及付款方式 */}

        <div className="nobottom p-4 pb-3 ">
          <div className="svg6 mt-4">
            <img src={deliver1} alt width={200} height={100} />
          </div>
        </div>
        <div className="nobottom p-3  ">
          <div className="cart3title2 cart3frame  pl-3 pt-3 cartwhite2 ">
          <p >  配送方式：</p>
            <br />
            <br />
            <div className="select ">
              <input
                value={deliveryTypeId}
                type="radio"
                value="宅配到府"
                checked={deliveryTypeId === '宅配到府'}
                onChange={(e) => {
                  setdeliveryTypeId(e.target.value)
                }}
              />
              <label>宅配到府</label>
              <br></br>
              <br></br>
              <input
                value={deliveryTypeId}
                type="radio"
                value="超商取貨"
                checked={deliveryTypeId === '超商取貨'}
                onChange={(e) => {
                  setdeliveryTypeId(e.target.value)
                }}
              />
              <label>超商取貨</label>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="title3 p-3 pb-5 ">
          <div className="cart3title2 cart3frame  pl-3 pt-3 cartwhite2 ">
           <p> 付款方式：</p>
            <br />
            <br />
            <div className="select ">
              <input 
                value={paymentTypeId}
                type="radio"
                value="信用卡"
                checked={paymentTypeId === '信用卡'}
                onChange={(e) => {
                  setpaymentTypeId(e.target.value)
                  setclickpopup(true)
                }}
              />

              <label> 信用卡</label>
              <Popup trigger={clickpopup} setTrigger={setclickpopup}>
                <label htmlFor="userName "></label>
              </Popup>
              <Popup trigger={clickpopup} setTrigger={setclickpopup}>
                <label htmlFor="userName "></label>
              </Popup>

              <br></br>
              <br></br>
              <input
                value={paymentTypeId}
                type="radio"
                value="取貨付款"
                checked={paymentTypeId === '取貨付款'}
                onChange={(e) => {
                  setpaymentTypeId(e.target.value)
                }}
              />
              <label>取貨付款</label>
              <br />
              <br />
            </div>
          </div>
        </div>
        {/* 優惠券 */}
        <div className="nobottom p-4 ">
          <div className="svg6  mt-4 ">
            <img src={coupon} alt width={200} height={100} />
          </div>
        </div>
        <div className="title3 pb-4 mb-4  ">
          <div className=" title4 " />
          <div className="edit-form">
            <div className="input-box py-4">
              {/* <label for="userGender"></label> */}
              <div className="input-frame">
                <select
                  className="form-control transparent-input "
                  id="voucher"
                  value={voucherId}
                  onChange={(e) => {
                    setvoucherId(e.target.value)
                  }}
                >
                  <option value="">請選擇一張優惠券</option>
                  <option value="50">50元優惠券</option>
                
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="buttoncart1 pb-4">
        <button  className="btn homeP-btn booking"
          onClick={() => {
            props.history.push('/Shoppingcart2')
          }}
        >
          回上一步
        </button>
        <button className="btn homeP-btn items"
          onClick={() => {
            props.history.push('/Shoppingcart4')
            addtextToSever()
            localStorage.removeItem('cart')
          }}
        >
          送出訂單
        </button>
      </div>
    </>
  )
  return <>{dataLoading ? loading : display}</>
}

export default withRouter(Shoppingcart3)
