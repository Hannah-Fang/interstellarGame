import Title from './components/Title'
import ChooseStore from './components/ChooseStore'
import Message from './components/Message'
import NewPostSlogan from './components/NewPostSlogan'
import NewPost from './components/NewPost'
import React, { useEffect, useState } from 'react'
import './Message.scss'

function MessageIndex() {
  const [storeId, setStoreId] = useState(0)
  const [message, setMessage] = useState([])

  async function getDataFromServer(storeId) {
    const url = 'http://localhost:6005/message/' + storeId

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setMessage(data)
  }

  useEffect(() => {
    console.log(storeId)
    getDataFromServer(storeId)
  }, [storeId])

  return (
    <div className="mesApp">
      <Title />
      <p className="chooseStoreTitle">探索離你最近的星系</p>
      <ChooseStore storeId={storeId} setStoreId={setStoreId} />
      <Message
        message={message}
        setMessage={setMessage}
        getDataFromServer={getDataFromServer}
      />
      <NewPostSlogan />
      <NewPost getDataFromServer={getDataFromServer} />
    </div>
  )
}

export default MessageIndex
