import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

// style
import './styles/memberEdit.scss'

//pop up套件
import swal from 'sweetalert'

// image
import memberImg from './images/member-img.png'
// import googleLogin from './images/google-login.png'

function MemberEdit(props) {
  // 從localStorage抓取該會員ID
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

    // const newData = data
    // console.log(newData)

    setNickname(data.userNickname)
    setName(data.userName)
    setGender(data.userGender)
    setBirthday(convert_date(data.userBirthday))
    setEmail(data.userEmail)
    setPhone(data.userPhone)
    setAddress(data.userAddress)
    setImg(data.userImg ? data.userImg : memberImg)

    // 如果從伺服器回傳的資料沒有id值
    if (!data.userId) {
      setUserDataIsExist(false)
      return
    }
    console.log('data:', data)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer()
  }, [])

  // 更新會員資料
  async function updateUserToSever() {
    // 開啟載入指示

    const newData = {
      name,
      email,
      nickname,
      gender,
      phone,
      birthday,
      address,
    }

    // 連接的伺服器資料網址
    const url = 'http://localhost:3000/members/updateInfo/' + userId

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)

    // 彈出提示視窗
    if (data) {
      swal({
        text: '個人資料儲存成功',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    } else {
      swal({
        text: '個人資料儲存失敗，請重新編輯',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
    setTimeout(() => {
      if (data.userId != undefined) {
        window.location.replace(`/member`)
        return data.userId
      } else {
        return 0
      }
    }, 1000)
  }

  // async function uploadImgToSever() {
  //   // 開啟載入指示

  //   const newData = {
  //     img,
  //   }

  //   // 連接的伺服器資料網址
  //   const url = `http://localhost:3000/members/try-upload/` + userId

  //   // 注意資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'PUT',
  //     body: JSON.stringify(newData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   console.log(JSON.stringify(newData))

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log('伺服器回傳的json資料', data)
  // }

  // 轉換日期格式
  function convert_date(date_text) {
    // date_text
    const myDate = new Date(date_text)
    const date_text_new = myDate.toISOString().substring(0, 10)
    return `${date_text_new}`
  }

  const display = (
    <>
      ;
      {/* <form name="form1" method="post">
        <input
          type="file"
          className="form-control"
          id="avatar"
          name="avatar"
          accept="image/jpeg"
        />
      </form>
      <button className="btn mb-3 m-edit-btn">上傳頭貼</button>
      <button className="btn mb-3 m-edit-btn" onClick={uploadImgToSever}>
        確認上傳
      </button> */}
      <div className="container m-container">
        <div className="m-edit row text-center mb-5">
          <h1 className="text-light m-edit-h1">修改個人資訊</h1>
          {/* <button type="submit" className="btn m-edit-btn">
            <img src={googleLogin} alt="googleLogin" /> Google登入中
          </button> */}
          <div className="m-editTop text-center">
            <div className="m-memberA">
              <div className="member-edit-img-frame">
                <img
                  src={img}
                  alt="memberImg"
                  className="m-edit-img"
                  onChange={(event) => {
                    setImg(event.target.value)
                  }}
                />
              </div>
            </div>
            <div className="m-memberB">
              <button
                type="file"
                className="btn mb-3 m-edit-btn"
                onClick="avatar.click()"
              >
                上傳頭貼
              </button>
              <button
                type="submit"
                className="btn my-3 m-edit-btn m-edit-btn-gray"
              >
                確認上傳
              </button>
            </div>
          </div>
          <div className="m-edit-form">
            <div className="input-box pb-4">
              <label htmlFor="nickname" className="m-edit-label">
                暱稱*
              </label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="nickname"
                  value={nickname}
                  placeholder="請輸入你的暱稱"
                  onChange={(event) => {
                    setNickname(event.target.value)
                  }}
                />
              </div>
              {/* <small id="nickname" className="form-text hidden m-edit-small">
                  此暱稱已有人使用過
                </small> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="name" className="m-edit-label">
                真實姓名*
              </label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="name"
                  value={name}
                  placeholder="請輸入你的真實姓名"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </div>
              {/* <small id="name" className="form-text hidden m-edit-small" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="gender" className="m-edit-label">
                性別*
              </label>
              <div className="input-frame">
                <select
                  className="form-control transparent-input "
                  id="gender"
                  value={gender}
                  onChange={(event) => {
                    setGender(event.target.value)
                  }}
                >
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>
              {/* <small id="birthday" className="form-text hidden m-edit-small" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="birthday" className="m-edit-label">
                生日*
              </label>
              <div className="input-frame">
                <input
                  type="date"
                  className="form-control transparent-input "
                  id="birthday"
                  value={birthday}
                  onChange={(event) => {
                    setBirthday(event.target.value)
                  }}
                />
              </div>
              <small id="gender" className="form-text hidden" />
            </div>
            <div className="input-box py-4">
              <label htmlFor="email" className="m-edit-label">
                E-mail*
              </label>
              <div className="input-frame">
                <input
                  readOnly
                  type="text"
                  className="form-control transparent-input text-muted"
                  id="email"
                  value={email}
                />
              </div>
              {/* <small id="email" className="form-text text-left text-danger m-edit-small" />
              Email作為登入帳號無法變更 */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="phone" className="m-edit-label">
                手機*
              </label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="phone"
                  placeholder="請輸入你的手機號碼"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                  }}
                />
              </div>
              {/* <small id="phone" className="form-text hidden m-edit-small" /> */}
            </div>
            <div className="input-box py-4">
              <label htmlFor="address" className="m-edit-label">
                地址*
              </label>
              <div className="input-frame">
                <input
                  type="text"
                  className="form-control transparent-input "
                  id="address"
                  placeholder="請輸入你的收件地址"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value)
                  }}
                />
              </div>
              {/* <small id="address" className="form-text hidden m-edit-small" /> */}
            </div>

            <button
              className="btn btn-block m-edit-btn-2"
              onClick={() => {
                updateUserToSever()
              }}
            >
              儲存會員資料
            </button>
            <Link className="btn btn-block m-edit-btn-2" to="/member">
              回會員中心
            </Link>
          </div>
        </div>
      </div>
    </>
  )

  return <>{display}</>
}

export default withRouter(MemberEdit)
