import React, { useState } from 'react'

function InputReply({ post, getDataFromServer }) {
  const [newReply, setNewReply] = useState('')

  //  Todo
  //  會員ID的來會需要再確認修改 localstorage.memberId?

  const memberData = {
    id: 6,
    avatar: 'https://i.imgur.com/Kcsphx3.png',
    name: 'Bboyo',
  }
  const memberId = memberData.id

  async function addNewReplyToSever(storeId, replyId) {
    const newPost = newReply

    const newReplyData = { memberId, storeId, newPost, replyId }

    const url = 'http://localhost:6005/message/'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newReplyData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newReplyData))

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
    <div className="inputReplyArea">
      <div className="avatarAndName">
        <div className="avatar">
          <img src={memberData.avatar} alt="" />
        </div>
        <p className="replyName">{memberData.name}</p>
      </div>
      <div className="inputText">
        <input
          type="text"
          placeholder="回覆留言"
          value={newReply}
          onChange={(e) => {
            setNewReply(e.target.value)
          }}
        />
      </div>
      <div
        className="replyBtn"
        onClick={() => {
          addNewReplyToSever(post.storeId, post.messageId)
          setNewReply('')
        }}
      >
        <p>送出</p>
      </div>
    </div>
  )
}

export default InputReply
