import React from 'react'
import Planet01 from './PlanetSvg1'
import Planet02 from './PlanetSvg2'
import Planet03 from './PlanetSvg3'

function ChooseStore(props) {
  const { storeId, setStoreId } = props
  const stores = [
    { id: 1, img: <Planet01 />, name: '松山店' },
    { id: 2, img: <Planet02 />, name: '大安店' },
    { id: 0, img: <Planet03 />, name: '所有星系' },
  ]

  return (
    <div className="storeList">
      {stores.map((v, i) => {
        return (
          <div
            key={i}
            className={`storeandplanet ${storeId === v.id ? 'actived' : ''}`}
            onClick={() => {
              setStoreId(v.id)
            }}
          >
            <div className="planet">{v.img}</div>
            <p>{v.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ChooseStore
