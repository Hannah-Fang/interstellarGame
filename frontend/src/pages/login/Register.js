import React, { useState, useRef } from 'react'
import { withRouter, Link } from 'react-router-dom'
import './styles/register.scss'
import swal from 'sweetalert'
import googleLogin from './images/google-login.png'

function Register(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

  async function addUserToSever() {
    //確認密碼
    if (password != checkPassword) {
      console.log('密碼不相同')
      return
    }

    console.log('fieldErrors', fieldErrors)

    const newData = { email, password }

    const url = 'http://localhost:3000/members/register'

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

    console.log('伺服器回傳的json資料', data)

    if (data.id) {
      swal({
        title: '註冊成功！',
        text: '歡迎來到宇宙船艦',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    } else {
      swal({
        title: '註冊失敗',
        text: '帳號或密碼錯誤，請重新登入',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }

    setTimeout(() => {
      if (data.id != undefined) {
        window.location.replace(`/login`)
        return data.id
      } else {
        return 0
      }
    }, 1000)
  }

  // 資料驗證
  const formRef = useRef(null)
  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addUserToSever()
  }

  const handleChange = (e) => {
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }

    setFieldErrors(updatedFieldErrors)
  }

  const handleInvalid = (e) => {
    e.preventDefault()

    const form = formRef.current

    let errorMsg = {}

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i]

      if (
        element.tagName !== 'button' &&
        element.willValidate &&
        !element.validity.valid
      ) {
        if (element.validity.valueMissing) {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.validationMessage,
          }
        } else {
          errorMsg = {
            ...errorMsg,
            [element.name]: element.title,
          }
        }
      }
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      ...errorMsg,
    }

    setFieldErrors(updatedFieldErrors)
  }

  const display = (
    <>
      <div className="regis">
        <div className="container regis-container">
          <div className="regis-area row">
            {/* <div className="regis-left col-12 col-lg-6 flex-column text-center">
              <h2 className="text-light text-center regis-area-h2">快速註冊</h2>
              <div className="btn-box align-items-center">
                <button type="submit" className="btn regis-left-btn">
                  <img
                    src={googleLogin}
                    alt="google-login"
                    className="regis-left-img"
                  />
                  Google帳號註冊
                </button>
              </div>
            </div> */}
            <div className="regis-right col-12 col-lg-6">
              <h2 className="text-light text-center regis-right-h2">
                會員註冊
              </h2>
              <form
                ref={formRef}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onSubmit={handleSubmit}
              >
                <div className="input-box pb-1">
                  <label htmlFor="email" className="regis-label">
                    E-mail*
                  </label>
                  <div className="input-frame">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value)
                      }}
                      required
                      className="form-control transparent-input "
                      id="email"
                      placeholder="請輸入你的E-mail作為登入帳號"
                      title="E-mail信箱格式錯誤"
                    />
                  </div>
                  {fieldErrors.email ? (
                    <small className="text-danger form-text">
                      {fieldErrors.email}
                    </small>
                  ) : (
                    <small className="text-danger form-text">&nbsp;</small>
                  )}
                </div>
                <div className="input-box pb-1">
                  <label htmlFor="password" className="regis-label">
                    密碼*
                  </label>
                  <div className="input-frame">
                    <input
                      type="text"
                      name="password"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value)
                      }}
                      required
                      className="form-control transparent-input "
                      id="password"
                      placeholder="密碼必須為6個字以上包含大寫的英數字母"
                      minLength="6"
                      title="密碼格式錯誤"
                    />
                  </div>
                  {fieldErrors.password ? (
                    <small className="text-danger form-text">
                      {fieldErrors.password}
                    </small>
                  ) : (
                    <small className="text-danger form-text">&nbsp;</small>
                  )}
                </div>
                <div className="input-box pb-3">
                  <label htmlFor="checkPassword" className="regis-label">
                    確認密碼*
                  </label>
                  <div className="input-frame">
                    <input
                      type="text"
                      name="checkPassword"
                      value={checkPassword}
                      onChange={(event) => {
                        setCheckPassword(event.target.value)
                      }}
                      required
                      className="form-control transparent-input "
                      id="checkPassword"
                      placeholder="請再輸入一次密碼"
                      minLength="6"
                      title="兩次輸入密碼不相同"
                    />
                  </div>
                  {fieldErrors.passwordCheck && (
                    <small className="text-danger form-text">
                      {fieldErrors.passwordCheck}
                    </small>
                  )}
                </div>
                {/* <div className="form-check">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    checked={fields.agree}
                    onChange={handleFieldChange}
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label text-light"
                    htmlFor="exampleCheck1"
                  >
                    我同意網站的使用者規章
                  </label>
                </div> */}
                <button type="submit" className="btn btn-block regis-right-btn">
                  註冊
                </button>
                <p className="text-light mt-  3 text-center">
                  已經有會員了？
                  <Link to="/login" className="regis-right-link">
                    會員登入
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      {/* <h1 className="text-light text-center">會員註冊</h1> */}

      {display}
    </>
  )
}

export default withRouter(Register)
