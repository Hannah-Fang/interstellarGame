import React from 'react'
import '../styles/memberEdit.scss'
import SelectButton from './SelectButton'

const GenderSelectButtons = (props) => {
  const { gender, setGender } = props

  return (
    <div className="">
      <SelectButton
        text="男"
        setValue={setGender}
        buttonValue="daan"
        value={gender}
        customStyle=""
      />
      <SelectButton
        text="松山店"
        setValue={setGender}
        buttonValue="songshan"
        value={gender}
        customStyle=""
      />
    </div>
  )
}

export default GenderSelectButtons
