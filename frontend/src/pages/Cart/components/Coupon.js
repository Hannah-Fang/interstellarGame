import React, { useState } from 'react'

function Coupon(props) {
const [seletedOption, setSeletedOption] = useState('')
  return (
    <>
      ;
      <div className=" title4 " />
      <div className="edit-form">
        <div className="input-box py-4">
          {/* <label for="userGender"></label> */}
          <div className="input-frame">
            <select
              className="form-control transparent-input "
              id="voucher"
              value={seletedOption}
              onChange={(e) => {
                setSeletedOption(e.target.value)
              }}
            >
              <option value="">請選擇一張優惠券</option>
              <option value="50元優惠券">50元優惠券</option>
              <option value="100元優惠券">100元優惠券</option>
            </select>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Coupon
