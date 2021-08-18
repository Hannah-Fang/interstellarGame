import React, { useState } from 'react'
import './add.css'

function Add() {
    // 使用狀態，勾子(hooks)
    // 解構賦值語法(es6)
    console.log(useState(0))
    //  useState(0) = [0, ƒ]
    const [total, setTotal] = useState(0)

    return (
        <>
            <h1 className="btnitem3"
                // 變數都需要用大括號 {} 括起來
                // 要改變 total 只能用 setTotal，不能直接改變 total
                onClick={() => {
                    setTotal(total + 1)
                }}
            >
                {total}
            </h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btnitem1"
                    onClick={() => {
                        setTotal(total - 1)
                    }}
                >
                    -
                </button>

                <button type="button" className="btninptu" disabled>
                    {total}
                </button>
                <button
                    type="button"
                    className="btnitem2"
                    onClick={() => {
                        setTotal(total + 1)
                    }}
                >
                    +
                </button>
            </div>

        </>
    )
}

export default Add
