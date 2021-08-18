import React from 'react'

const SelectButton = (props) => {
  //value: all, daan, songshan
  const { text, setValue, value, buttonValue, customStyle } = props

  let isSelected = ''

  if (buttonValue === value) {
    isSelected = true
  }

  return (
    <button
      className={`${isSelected && 'selected'} ${customStyle && customStyle}`}
      onClick={() => {
        setValue(buttonValue)
      }}
    >
      {text}
    </button>
  )
}

export default SelectButton
