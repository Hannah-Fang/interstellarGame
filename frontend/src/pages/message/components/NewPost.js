import React, { useState } from 'react'
import Planet01 from './PlanetSvg1'
import Planet02 from './PlanetSvg2'
import { FaRegFlag } from 'react-icons/fa'

function NewPost(props) {
  const { getDataFromServer } = props

  const memberData = {
    id: 6,
    avatar: 'https://i.imgur.com/Kcsphx3.png',
    name: 'Bboyo',
  }

  //  Todo
  //  會員ID的來會需要再確認修改 localstorage.memberId?
  const memberId = memberData.id

  const replyId = 0 // 主樓回文編號皆為0

  const [storeId, setStoreId] = useState(1)
  const [newPost, setNewPost] = useState('')

  async function addNewPostToSever() {
    const newPostData = { memberId, storeId, newPost, replyId }

    const url = 'http://localhost:6005/message/'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newPostData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newPostData))

    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    getDataFromServer(storeId)

    setTimeout(() => {
      alert('留言成功')
      // props.history.push('/')
    }, 500)
  }

  return (
    <>
      <div className="newPostContainer">
        <div className="avatar">
          <img src={memberData.avatar} alt="" />
        </div>
        <div className="addNewPost">
          <div className="nameAndStore">
            <p className="inputUserName">{memberData.name}</p>
            <div className="chooseStore">
              <span>選擇星系:</span>
              <div
                className={`planetAndStore ${storeId === 1 ? 'actived' : ''}`}
                onClick={() => {
                  setStoreId(1)
                }}
              >
                <div className="planet">
                  <Planet01 />
                </div>
                <span>松山店</span>
              </div>
              <div
                className={`planetAndStore ${storeId === 2 ? 'actived' : ''}`}
                onClick={() => {
                  setStoreId(2)
                }}
              >
                <div className="planet">
                  <Planet02 />
                </div>
                <span>大安店</span>
              </div>
            </div>
          </div>
          <div className="postContent">
            <div className="inputText">
              <input
                type="text"
                placeholder="發起新的揪團"
                value={newPost}
                onChange={(e) => {
                  setNewPost(e.target.value)
                }}
              />
            </div>
            <div
              className="postBtn"
              onClick={() => {
                addNewPostToSever()
                setNewPost('')
              }}
            >
              <div className="postFlag">
                <FaRegFlag />
              </div>
              <p>留言</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPost
