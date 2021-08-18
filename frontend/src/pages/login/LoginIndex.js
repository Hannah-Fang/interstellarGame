import React, { useState, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './styles/loginIndex.scss'
import swal from 'sweetalert'

// images
import googleLogin from './images/google-login.png'

function LoginIndex(props) {
  // const { current_user, setCurrentUser } = props
  // const [loginmode, setLoginmode] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginToServer() {
    const newData = { email, password }

    // if (fieldErrors) {
    //   console.log('資料驗證失敗')
    //   return
    // }

    const url = 'http://localhost:3000/members/login'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()
    // const data.userBirthday= moment(data.userBirthday).format('YYYY-MM-DD')

    console.log('伺服器回傳的json資料', data)
    // console.log('伺服器回傳的json資料', data.userId)

    // 彈出提示視窗
    if (data.userId) {
      swal({
        title: '登入成功！',
        text: '歡迎回到宇宙船艦',
        icon: 'success',
        button: false,
        timer: 3000,
      })
      // test()
      // 如果登入成功
      // 改動react App母層變數以紀錄現在的用戶登入狀態
      // setCurrentUser(data.userId)
      localStorage.setItem('userId', JSON.stringify(data.userId))
      localStorage.setItem('userImg', JSON.stringify(data.userImg))
      // console.log(
      //   'localStorge:',
      //   localStorage.getItem('userId', JSON.stringify(data.userId))
      // )
      // setLoginmode(true)
    } else {
      swal({
        title: '登入失敗',
        text: '帳號或密碼錯誤，請重新登入',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      // data.id = undefined
      if (data.userId != undefined) {
        window.location.replace(`/homepage`)
        return data.userId
      } else {
        setEmail('')
        setPassword('')
        return 0
      }
    }, 1000)
  }

  const display = (
    <>
      <div className="login">
        <div className="container l-container">
          <div className="login-area row">
            {/* <div className="login-left col-12 col-lg-6 flex-column text-center">
              <h2 className="text-light text-center login-left-h2">快速登入</h2>
              <div className="btn-box align-items-center">
                <button type="submit" className="btn login-left-btn">
                  <img
                    src={googleLogin}
                    alt={googleLogin}
                    className="login-left-img"
                  />
                  Google登入
                </button>
              </div>
            </div> */}
            <div className="login-right col-12 col-lg-6">
              <h2 className="text-light text-center login-right-h2">
                會員登入
              </h2>
              <div className="input-box">
                <label htmlFor="email" className="login-label">
                  E-mail
                </label>
                <div className="input-frame">
                  <i className="far fa-envelope login-input-i " />
                  <input
                    type="email"
                    name="email"
                    className="form-control transparent-input"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                    }}
                    required
                    id="email"
                    placeholder="E-mail"
                    title="E-mail信箱格式錯誤"
                  />
                </div>
              </div>
              <div className="input-box my-3">
                <label htmlFor="password" className="login-label">
                  密碼
                </label>
                <div className="input-frame">
                  <i className="fas fa-unlock-alt login-input-i" />
                  <input
                    type="text"
                    name="password"
                    className="form-control transparent-input"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                    required
                    id="password"
                    placeholder="Password"
                    minLength="6"
                    title="密碼格式錯誤"
                  />
                </div>
              </div>

              <button
                className="btn btn-block login-right-btn"
                onClick={() => {
                  loginToServer()
                }}
              >
                登入
              </button>
              <p className="text-light mt-3 text-center">
                還沒有會員？
                <Link to="/register" className="login-right-link">
                  註冊會員
                </Link>
              </p>
              <p className="text-center mt-0">
                <Link to="/forgetPwd" className="login-right-link">
                  忘記密碼
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* <h1 className="text-light text-center login-title">會員登入</h1> */}
      {display}
    </>
  )
}

export default withRouter(LoginIndex)
