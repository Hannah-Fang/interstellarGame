import React from 'react'

function GameAttention() {
  return (
    <>
      <div className="attention">
        <div className="attentionTitle">注意事項</div>
        <div className="attentionContent">
          <p>1.折價券使用是以每筆訂單為單，每筆訂單限使用一張折價券。</p>
          <p>2.不可與其他優惠方案合併使用。</p>
          <p>
            3.每張折價券請確認活動規則及使用效期，提醒您於使用效期前使用，逾期則視為棄權。
          </p>
          <p>
            4.折價券一經使用立即失效，若事後取消訂單或辦理退貨，僅會退還您實際所支付的金額。不再補發折價券，折價券也不得重複使用。
          </p>
        </div>
      </div>
    </>
  )
}

export default GameAttention
