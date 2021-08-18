import React, { useState, useEffect } from 'react'
import './Shoppingcart4.css'
import itemphoto from './img/item拷貝.png'
import itemphoto2 from './img/數字急轉彎拷貝.jpg'
import itemphoto3 from './img/504拷貝.jpg'
import launch from './img/launch.svg'
import pinkline from './img/pinkline.svg'
import axios from '../Cart/components/axios'

export default class Shoppingcart4 extends React.Component {
  constructor() {
    super()
    this.state = {
      data: false,
    }
  }
  componentWillReceiveProps = (nextProps) => {
    const { match } = this.props
    if (match.params.id !== nextProps.match.params.id) {
      this.Id = nextProps.match.params.id
      this.getData()
    }
  }
  componentDidMount() {
    let url = 'http://localhost:6005/neworders/'
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp })
      })
    })
  }

  render() {
    const data = this.state.data
    console.warn(data)
    return (
      <div>
        {data ? (
          <div className="orderpage">
            <div className="cart4top m-5">
              <img
                className="launch"
                src={launch}
                alt=""
                width={100}
                height={100}
              />
              <img
                className="pinkline"
                src={pinkline}
                alt=""
                width={200}
                height={100}
              />
              <img
                className="launch"
                src={launch}
                alt=""
                width={100}
                height={100}
              />
              <img
                className="pinkline"
                src={pinkline}
                alt=""
                width={200}
                height={100}
              />
              <img
                className="launch"
                src={launch}
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="cart4top mb-5 mr-5">
              <p2 className="cartwhite">購物明細</p2>
              <p2 className="cartwhite">付款資料</p2>
              <p2 className="cartwhite">訂單資訊</p2>
            </div>
            <div className="  cart4order1    p-3">
              <div className="cart4ordertitle ">
                <p4 class="cartbold">訂單資訊</p4>
              </div>
            </div>
            <div className="cart4title1 ">
              <div className="cart4title2 cartp ">
                <div className="m-4 cartp">訂單編號：0082</div>
                <div className=" frame  pl-4 pt-4  mb-3">
                  <p> 收件人：{data.orderName}</p>
                  <br></br>

                  <p> 電話：{data.orderMobile}</p>
                  <br></br>

                  <p> mail：{data.orderMail}</p>
                  <br></br>

                  <p> 地址：{data.orderAddress}</p>
                  <br></br>

                  <p>配送方式：{data.deliveryTypeId}</p>
                  <br></br>

                  <p> 付款方式：{data.paymentTypeId}</p>
                  <br></br>
                </div>
                <div>
                  <br></br> <p className="cartp">共3項商品</p>
                  <br></br>
                </div>
              </div>
            </div>
            <table className="cart4title3 cartp2  ">
              <tbody>
                <tr className="cart4th  ">
                  <th width="120px" />
                  <th width="200px">商品名稱</th>
                  <th width="200px">商品單價</th>
                  <th width="180px">商品數量</th>
                  <th width="200px">金額小計</th>
                </tr>

                <tr>
                  <td height="150px" className="time">
                    {' '}
                    <img
                      className="itemphoto"
                      src={itemphoto}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>

                  <td className="time ">
                    <p>目擊者之夜</p>
                  </td>
                  <td className="time">
                    <p>NT$390</p>
                  </td>
                  <td className="time">
                    <p>2</p>
                  </td>
                  <td className="time">
                    <p>NT$780</p>
                  </td>
                </tr>
                <tr>
                  <td height="150px" className="time">
                    {' '}
                    <img
                      className="itemphoto"
                      src={itemphoto2}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>

                  <td className="time">數字急轉彎</td>
                  <td className="time">NT390</td>
                  <td className="time">2</td>
                  <td className="time">NT$780</td>
                </tr>
                <tr>
                  <td height="150px" className="time">
                    {' '}
                    <img
                      className="itemphoto"
                      src={itemphoto3}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </td>

                  <td className="time">504</td>
                  <td className="time">NT$2650</td>
                  <td className="time">1</td>
                  <td className="time">NT$2650</td>
                </tr>
              </tbody>
            </table>
            <div className="Shoppingcart4end  p-3 mb-5">
              <div className=" Shoppingcart4end1 pl-2 pt-5 cartp3">
                <p>金額總計: NT$4210</p>
                <p>運費金額: NT$60</p>
                <p>優惠券折抵: -NT${data.voucherId}</p>
                <br />{' '}
                <div className="red">
                  <p>訂單金額: NT$4220</p>
                </div>
              </div>
            </div>
            <div className=" buttoncart1 pb-4">
              <a href="/homepage">
                <button className="btn homeP-btn items">回首頁</button>
              </a>
            </div>
          </div>
        ) : (
          <p>Please wat...</p>
        )}
      </div>
    )
  }
}
