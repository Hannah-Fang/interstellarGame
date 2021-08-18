import React, { useEffect } from 'react'
import GameTitle from './components/GameTitle'
import GameProcess from './components/GameProcess'
import GameAttention from './components/GameAttention'
import './Game.scss'
import SceneMajor from './components/SceneMajor'
import Scene1 from './components/Scene1'
import Scene2 from './components/Scene2'
import { withRouter } from 'react-router-dom'

const config = {
  parent: 'gameArea',
  width: 1002,
  height: 640,
  backgroundColor: 0x000000,
  scene: [SceneMajor, Scene1, Scene2],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
}

function GameIndex() {
  useEffect(() => {
    window.onload = () => {
      new window.Phaser.Game(config)
    }
  }, [])

  return (
    <>
      <div className="gameApp">
        <GameTitle />
        <div className="gameDescription">
          <GameProcess />
          <GameAttention />
        </div>
        <div id="gameArea" />
      </div>
    </>
  )
}
export default withRouter(GameIndex)
