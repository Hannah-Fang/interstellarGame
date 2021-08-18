import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Shoppingcart1.css'
import { withRouter } from 'react-router-dom'
import itemphoto from './img/item1.png'
import './Shoppingcart2.css'
import grayline from './img/grayline.svg'
import launch from './img/launch.svg'
import launch2 from './img/launch2.svg'

function Shoppingcart1(props) {
  const [clickpopup, setclickpopup] = useState(false)
  console.log(props)
  const [ItemOne, setItemOne] = useState(1)
  const [ItemTwo, setItemTwo] = useState(1)
  const [ItemThree, setItemThree] = useState(1)
  const {} = props
  const [show, setshow] = useState(1)
  const [handclose, sethandclose] = useState(1)

  const currentCart = JSON.parse(localStorage.getItem('cart')) || ''
  // 代表每個產品的單價
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  const { updateCartNum } = props
  const messageModal = (
    <Modal show={show} onHide={handclose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>“購物車是空的”</Modal.Body>
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
    </Modal>)
  function getCartFromLocalStorage() {

    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  // 每次mycart資料有改變，1秒後關閉載入指示
  // componentDidUpdate
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1000)

    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.itemId === mycart[i].itemId
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.itemId === item.itemId)

    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    
    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }
  // 刪除單一項目
  const updateCartRemove = (index) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(currentCart[index])

    const a = currentCart.filter((v, i) => {
      console.log(v)
      if (index !== i) {
        return v
       
      }
    })
    console.log(a)

    localStorage.setItem('cart', JSON.stringify(a))

    // 設定資料
    setMycart(a)
    // 更新購物車數量
    let total = 0
    for (let i = 0; i < a.length; i++) {
      total += a[i].amount
    }
    // updateCartNum()
  }
  if (
    !localStorage.getItem('cart') ||
    JSON.parse(localStorage.getItem('cart')).length === 0
  ) {
  
    
  }
  
  // 計算總價
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  // 計算所有商品數量

  return (
    <>
   
      <div className="cart1title1 p-3 mt-5">
        <p4 class="cartbold  ">購物車</p4>
      </div>
    
      <table className="cart1title2  ">
        <tbody>
          <tr>
            <th  className="thcart" width="150px "></th>
            <th  className="thcart" width="200x">商品名稱</th>
            <th className="thcart" width="200px">商品單價</th>
            <th className="thcart" width="220px">商品數量</th>
            <th className="thcart" width="200px">金額小計</th>
            <th className="thcart" width="100px" />
          </tr>
          {mycart.map((item, index) => {
            return (
              <tr key={item.itemId}>
           
                <td className="tdcart"
                  id={item.itemId}
                  onClick={() => {
                    const cartList = [...mycart]
                    cartList.splice(index, 1)
                    setMycart(cartList)
                    localStorage.setItem('cart', JSON.stringify(cartList))
                  }}
                ></td>

                {/* <td height="150px">
                  {' '}
                  <img
                    className="itemphoto"
                    src={itemphoto}
                    alt=""
                    width={100}
                    height={100}
                  />
                </td>  */}
                <td  className="tdcart" height="130px">{item.name}</td>
                <td className="tdcart2" >{item.price}</td>
                <td className="tdcart1">
                
                  <div className="counter2  ">
                    <li  className="ccc" id="minus">
                      <a
                        href="#/"
                        onClick={() => {
                          // 限制數量為最少要買1件
                          if (item.amount === 1) return
                          updateCartToLocalStorage(item, false)
                        }}
                      >

                        <input
                          type="button"
                          onclick="minuser()"
                          defaultValue="-"
                        />
                      </a>
                    </li>

                    <li  id="countnum2"> {item.amount}</li>

                    <li id="plus">
                      <a
                        href="#/"
                        onClick={() => {
                          updateCartToLocalStorage(item, true)
                        }}
                      >
                        <input
                          type="button"
                          onclick="adder()"
                          defaultValue="+"
                        />
                      </a>
                    </li>
                  </div>
                </td>
                <td className="tdcart2"> NT${item.amount * item.price}</td>
                <td className="tdcart">
                  <i
                    className=" far fa-trash-alt"
                    onClick={() => {
                      updateCartRemove(index)
                     
                    }}
                  />
                </td>
              </tr>
            )
          })}
        
        </tbody>
      </table>
      <div className="end  p-5 mb-5">
        <p className="cartwhite">訂單總金額: NT${sum(mycartDisplay)}</p>
      </div>

      <div className="buttoncart1 pb-4">
        <button
          className="btn homeP-btn booking"
          onClick={() => {
            props.history.push('/item-list')
          }}
        >
        繼續購物
        </button>
        <button
            className="btn homeP-btn items"
          onClick={() => {
            props.history.push('/Shoppingcart2')
            
          }}
        >
          前往結帳
        </button>
      </div>
    </>
  )
}

export default withRouter(Shoppingcart1)
