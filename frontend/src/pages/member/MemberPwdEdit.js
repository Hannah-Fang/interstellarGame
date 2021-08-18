import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

// style
import './styles/memberPwdEdit.scss'

//pop up套件
import swal from 'sweetalert'

function MemberPwdEdit(props) {
  const userId = JSON.parse(localStorage.getItem('userId'))

  const [password, setPassword] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [newPwdCheck, setNewPwdCheck] = useState('')

  // 更新密碼
  async function updatePwdToSever() {
    const newData = {
      password,
    }

    const url = 'http://localhost:3000/members/updatePwd/' + userId

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
        text: '密碼修改成功',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    } else {
      swal({
        text: '密碼修改失敗，請重新設定',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
    setTimeout(() => {
      if (data.userId != undefined) {
        window.location.replace(`/homepage`)
        return data.userId
      } else {
        return 0
      }
    }, 1000)

    // // 檢查兩個密碼是否相同
    // async function checkPassword(newPwd, newPwdCheck) {
    //   if (newPwd === newPwdCheck && newPwdCheck != '') {
    //     return true
    //   } else {
    //     return false
    //     console.log('新密碼不同')
    //   }
    // }

    const display = (
      <>
        <div className="container m-container">
          <div className="m-pwd-edit row text-center ">
            <h1 className="text-light m-pwd-edit-h1">修改密碼</h1>
            <div className="m-pwd-edit-form">
              <div className="input-box pb-4">
                <label htmlFor="password" className="m-pwd-edit-label">
                  當前密碼*
                </label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    required
                    className="form-control m-edit-input "
                    id="userPwd"
                    placeholder="請輸入目前使用的密碼"
                    minLength="6"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="input-box pb-4">
                <label htmlFor="newPwd">新密碼*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="newPwd"
                    value={newPwd}
                    required
                    className="form-control transparent-input "
                    id="newPwd"
                    placeholder="請輸入您的新密碼"
                    minLength="6"
                    onChange={(event) => {
                      setNewPwd(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="input-box pb-4">
                <label htmlFor="newPwdCheck">新密碼確認*</label>
                <div className="input-frame">
                  <input
                    type="password"
                    name="newPwdCheck"
                    alue={newPwdCheck}
                    required
                    className="form-control transparent-input "
                    id="newPwdCheck"
                    placeholder="請再輸入一次您的新密碼"
                    minLength="6"
                    onChange={(event) => {
                      setNewPwdCheck(event.target.value)
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-block m-pwd-edit-btn"
                onClick={() => {
                  updatePwdToSever()
                }}
              >
                確認修改密碼
              </button>
            </div>
          </div>
        </div>
      </>
    )
    return (
      <>
        <h1 className="text-light text-center mt-5 m-index-h1">修改密碼</h1>
        {display}
      </>
    )
  }
}

export default withRouter(MemberPwdEdit)
