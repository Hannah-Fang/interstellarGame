import React, { useState, useEffect } from 'react'
import $ from 'jquery'

import './navbar.css'
import Button from './Button'

import logo from '../pages/image/svg/logo.svg'
import icon_shop from '../pages/image/svg/icon-shop.svg'
import memberPreset from '../pages/member/images/member-img.png'
import burgerList from '../pages/image/svg/nav-burgerlist.svg'

// import memberPreset from '../pages/image/jpg/test01.jpg'

const Navbar = () => {
  const userId = JSON.parse(localStorage.getItem('userId'))
  const userImg = JSON.parse(localStorage.getItem('userImg'))
  // const userId = 220

  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])
  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    // console.log(JSON.parse(newCart))

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
    // console.log('商品有多少', mycart.length)

    // console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    // console.log(item, isAdded)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.itemId === item.itemId)

    // console.log('index', index)
    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
  }

  useEffect(() => {
    $('.nav-ul')
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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-c">
          <div className="logo">
            <a href="/homepage">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-link" id="navbarText">
            <button
              type="button"
              class="dropdown-toggle dropdown-toggle-split btn-linkrDropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <a href="/" className="nav-burgerList">
                <img src={burgerList} alt="" />
              </a>

              <span class="sr-only"></span>
            </button>
            <div className="dropdown-menu nav-dropdownMenu">
              <a className="dropdown-item navMenu-link" href="/homepage">
                首頁
              </a>
              <a className="dropdown-item navMenu-link" href="/booking/steps">
                預約艙房
              </a>
              <a className="dropdown-item navMenu-link" href="/item-list">
                宇宙市集
              </a>
              <a className="dropdown-item navMenu-link" href="/Game">
                星際任務
              </a>
              <a className="dropdown-item navMenu-link" href="/messageboard">
                太空交誼廳
              </a>
              <a className="dropdown-item navMenu-link" href="/about">
                聯絡總署
              </a>
            </div>
            <ul className="navbar-ul mx-auto">
              <li className="nav-item">
                <a href="/booking/steps">預約艙房</a>
              </li>
              <li className="nav-item">
                <a href="/item-list">宇宙市集</a>
              </li>
              <li className="nav-item">
                <a href="/Game">星際任務</a>
              </li>
              <li className="nav-item">
                <a href="/messageboard">太空交誼廳</a>
              </li>
              <li className="nav-item">
                <a href="/about">聯絡總署</a>
              </li>
            </ul>
          </div>
          <div className="right-items">
            <div className="shopping-cart">
              <a href="/Shoppingcart1">
                <img src={icon_shop} alt="" />
                {/* <span className="shopping-count">{mycart.length}</span> */}
              </a>
            </div>
            <div className="button-control">
              {userId ? (
                <>
                  <a href="/member">
                    <img
                      className="btn-memberIcon"
                      src={userImg ? userImg : memberPreset}
                      alt=""
                    />
                  </a>
                  <button
                    type="button"
                    class="dropdown-toggle dropdown-toggle-split btn-memberDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu member-dropdownMenu">
                    <a className="dropdown-item memberMenu-link" href="/member">
                      會員中心
                    </a>
                    <a
                      className="dropdown-item memberMenu-link"
                      href="/member/memberOrder"
                    >
                      我的訂單
                    </a>
                    <a
                      className="dropdown-item memberMenu-link"
                      href="/member/memberReservation"
                    >
                      我的預約
                    </a>
                    <a
                      className="dropdown-item memberMenu-link"
                      href="/member/memberFavList"
                    >
                      我的最愛
                    </a>
                    <a
                      className="dropdown-item memberMenu-link"
                      href="/member/memberCoupon"
                    >
                      我的優惠券
                    </a>
                  </div>
                  {/* <Button
                    className="btn2 memberCenter"
                    link="/member"
                    buttonText="會員中心"
                  /> */}
                </>
              ) : (
                <Button
                  className="btn2 login-registered"
                  link="/login"
                  buttonText="登入 / 註冊"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
