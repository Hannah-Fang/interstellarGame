import { React, useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberCoupon.scss'
import fun00 from './images/fun00.png'
import fun01 from './images/fun01.png'
import fun02 from './images/fun02.png'
import fun03 from './images/fun03.png'
import fun04 from './images/fun04.png'

function MemberCoupon(props) {
  const userId = JSON.parse(localStorage.getItem('userId'))
  const [coupon, setCoupon] = useState([])

  async function getCouponFromServer() {
    // 連接的伺服器資料網址
    const url = `http://localhost:3000/members/getCoupon/` + userId

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    // 設定資料
    setCoupon(data)

    console.log(data)
  }

  useEffect(() => {
    getCouponFromServer()
  }, [])

  // 轉換日期格式
  function convert_date(date_text) {
    // date_text
    const myDate = new Date(date_text)
    const date_text_new = myDate.toISOString().substring(0, 10)
    return `${date_text_new}`
  }

  const couponDisplay = (
    <>
      <div className="container m-container">
        <table className="m-coupon-table">
          <thead>
            <tr>
              <th scope="col">優惠券名稱</th>
              <th scope="col">優惠內容</th>
              <th scope="col">獲得日期</th>
              <th scope="col">使用狀況</th>
            </tr>
          </thead>
          <tbody className="m-coupon-tbody">
            {coupon.length &&
              coupon.map((coupon) => {
                return (
                  <tr>
                    <td>{coupon.voucherName}</td>
                    <td>商城購物結帳金額-{coupon.voucherPrice}元</td>
                    <td>{convert_date(coupon.created_at)}</td>
                    <td>{(coupon.discountUse = 0 ? '未使用' : '已使用')}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  )

  return (
    <>
      <div className="container mt-5 m-container">
        <div className="member-btn-group text-center row">
          <div
            className="member-btn col col1"
            onClick={() => {
              props.history.push('/member')
            }}
          >
            <img src={fun00} alt={fun00} />
            <p className="py-1 m-0 member-btn-p">會員中心</p>
          </div>
          <div
            className="member-btn col col2"
            onClick={() => {
              props.history.push('/member/memberOrder')
            }}
          >
            <img src={fun01} alt={fun01} />
            <p className="py-1 m-0 member-btn-p">查詢訂單</p>
          </div>
          <div
            className="member-btn col col3"
            onClick={() => {
              props.history.push('/member/memberReservation')
            }}
          >
            <img src={fun02} alt={fun02} />
            <p className="py-1 m-0 member-btn-p">查詢預約</p>
          </div>
          <div
            className="member-btn col col4"
            onClick={() => {
              props.history.push('/member/memberFavList')
            }}
          >
            <img src={fun03} alt={fun03} />
            <p className="py-1 m-0 member-btn-p">我的最愛</p>
          </div>

          <div
            className="member-btn col col5"
            onClick={() => {
              props.history.push('/member/memberCoupon')
            }}
          >
            <img src={fun04} alt={fun04} className="m-btn-active" />
            <p className="py-1 m-0 m-btn-active member-btn-p">我的優惠券</p>
          </div>
        </div>
      </div>
      {couponDisplay}
    </>
  )
}

export default withRouter(MemberCoupon)
