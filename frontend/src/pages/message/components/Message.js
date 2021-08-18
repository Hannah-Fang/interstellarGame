import React from 'react'
import InputReply from './InputReply'

function Message(props) {
  const { message, getDataFromServer } = props

  return (
    <>
      {message.map((post, i) => {
        return (
          <div key={post.messageId} className="messageArea">
            <div className="floorTag">{i + 1}F</div>
            <div className="floorMaster">
              <div className="avatar">
                <img src={post.userImg} alt="" />
              </div>
              <div className="floorMasterInfo">
                <p className="name">{post.userNickname}</p>
                <p className="messageContent">{post.content}</p>
                <p className="dateTime">{post.updated_at}</p>
              </div>
            </div>
            <div className="reply">
              {post.replys.map((reply, j) => {
                return (
                  <div key={j + 1}>
                    <div className="replyInfo">
                      <div className="avatarAndName">
                        <div className="avatar">
                          <img src={reply.userImg} alt="" />
                        </div>
                        <p className="replyName">{reply.userNickname}</p>
                      </div>
                      <div className="contentAndTime">
                        <div className="triangle"></div>
                        <div className="replyContent">{reply.content}</div>
                        <p className="dateTime">{reply.updated_at}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <InputReply post={post} getDataFromServer={getDataFromServer} />
          </div>
        )
      })}
    </>
  )
}

export default Message
