import React, { useState, useEffect } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import './styles/memberIndex.scss'

//pop up套件
import swal from 'sweetalert'

// images
import memberImg from './images/member-img.png'
import fun01 from './images/fun01.png'
import fun02 from './images/fun02.png'
import fun03 from './images/fun03.png'
import fun04 from './images/fun04.png'

function MemberIndex(props) {
  // 從localStorage抓取該會員所有資料
  const userId = JSON.parse(localStorage.getItem('userId'))

  const [nickname, setNickname] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [img, setImg] = useState('')

  const [userDataIsExist, setUserDataIsExist] = useState(true)

  // 載入會員資料
  async function getUserFromServer() {
    // 開啟載入指示

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/getUser/' + userId

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
    console.log('data', data)

    // 設定資料
    setNickname(data.userNickname)
    setName(data.userName)
    setGender(data.userGender)
    setBirthday(data.userBirthday)
    setEmail(data.userEmail)
    setPhone(data.userPhone)
    setAddress(data.userAddress)
    setImg(data.userImg)

    // 如果從伺服器回傳的資料沒有id值
    if (!data.id) {
      setUserDataIsExist(false)
      return
    }
    console.log('data:', data)

    const newData = data
    console.log(newData)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    window.scrollTo(0, 0)
    getUserFromServer()
  }, [])

  // 會員登出
  async function logoutToSever() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/logout'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    swal({
      text: '登出成功！',
      icon: 'success',
      button: false,
      timer: 3000,
    })

    const response = await fetch(request)
    // const data = await response.json()

    localStorage.clear()
    window.location.replace(`/Homepage`)
  }

  // 轉換日期格式
  function convert_date(date_text) {
    // date_text
    const myDate = new Date(date_text)
    const date_text_new = myDate.toISOString().substring(0, 10)
    return `${date_text_new}`
  }

  const display = (
    <>
      <div className="member mt-5">
        <div className="container m-container">
          <div className="member-card">
            <div className="member-card-title row">
              <p className="text-light member-card-title-p">ID CARD</p>
              {/* <span className="member-card-title-tips">完成個人資訊可獲得折價券！</span> */}
            </div>
            <div className="member-card-body row">
              <div className="member-left col-12 col-lg-3 text-center ">
                <div className="member-card-memberA">
                  <div className="member-left-img-frame">
                    <img
                      src={img ? img : memberImg}
                      alt="memberImg"
                      className="member-left-img"
                    />
                  </div>
                  <p className="member-left-p">
                    {nickname ? nickname : '未設定暱稱'}
                  </p>
                </div>
                <div className="member-card-memberB">
                  <button
                    className="my-1 member-left-btn"
                    onClick={() => {
                      props.history.push('/member/memberPwdEdit/' + userId)
                    }}
                  >
                    修改密碼
                  </button>
                  <button
                    className="my-3 member-left-btn"
                    onClick={() => {
                      logoutToSever()
                    }}
                  >
                    登出
                  </button>
                </div>
              </div>
              <div className="member-middle col-12 col-lg-6">
                <div className="pb-2 d-flex">
                  <div className="member-middle-info-title p-1">姓名</div>
                  <div className="member-middle-info-text p-1">
                    {name ? name : '未設定'}
                  </div>
                </div>
                <div className="py-2 d-flex">
                  <div className="member-middle-info-title p-1">性別</div>
                  <div className="member-middle-info-text p-1">
                    {gender ? gender : '未設定'}
                  </div>
                </div>
                <div className="py-2 d-flex">
                  <div
                    className="member-middle-info-title p-1"
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                  >
                    生日
                  </div>
                  <div className="member-middle-info-text p-1">
                    {birthday ? convert_date(birthday) : '未設定'}
                  </div>
                </div>
                <div className="py-2 d-flex">
                  <div className="member-middle-info-title p-1">Email</div>
                  <div className="member-middle-info-text p-1">{email}</div>
                </div>
                <div className="py-2 d-flex">
                  <div className="member-middle-info-title p-1">手機</div>
                  <div className="member-middle-info-text p-1">
                    {phone ? phone : '未設定'}
                  </div>
                </div>
                <div className="py-2 d-flex">
                  <div className="member-middle-info-title p-1">地址</div>
                  <div className="member-middle-info-text p-1">
                    {address ? address : '未設定'}
                  </div>
                </div>
              </div>
              <div className="member-right col-12 col-lg-3">
                <button
                  className="member-right-btn"
                  onClick={() => {
                    props.history.push('/member/memberEdit/' + userId)
                  }}
                >
                  修改個人資訊
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-container">
        <div className="member-btn-group text-center row mb-5">
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberOrder')
            }}
          >
            <img src={fun01} alt="fun01" className="member-btn-group-img" />
            <p className="py-1 member-btn-group-p">查詢訂單</p>
          </div>
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberOrder')
            }}
          >
            <img src={fun02} alt="fun02" className="member-btn-group-img" />
            <p className="py-1 member-btn-group-p">查詢預約</p>
          </div>
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberFavList')
            }}
          >
            <img src={fun03} alt="fun03" className="member-btn-group-img" />
            <p className="py-1 member-btn-group-p">我的最愛</p>
          </div>
          <div
            className="col-6 col-lg-3"
            onClick={() => {
              props.history.push('/member/memberCoupon')
            }}
          >
            <img src={fun04} alt="fun04" className="member-btn-group-img" />
            <p className="py-1 member-btn-group-p">我的優惠券</p>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <h1 className="text-light text-center mt-5 m-index-h1">修改個人資料</h1>
      {display}
    </>
  )
}

export default withRouter(MemberIndex)
