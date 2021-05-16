import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.less'
import Publish from './publish/publish'

function App() {
  const [active, setActive] = useState(1)
  return (
    <div className="xiaobai-world-store-wrapper">
      <div className="xiaobai-world-store-tabs">
        <a className={active === 0 ? 'active' : ''}
          onClick={() => { setActive(0) }}>应用商店</a>
        <a
          className={active === 1 ? 'active' : ''}
          onClick={() => { setActive(1) }}>我创建的应用</a>
      </div>
      {
        active === 1 && <Publish />
      }
    </div >
  )
}

export default App
