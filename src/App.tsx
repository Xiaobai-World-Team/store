import React, { useState } from 'react'
import './App.less'
import Publish from './Publish'

function App() {
  const [active, setActive] = useState(1)
  return (
    <div className="xiaobai-world-store-wrapper">
      <div className="xiaobai-world-store-tabs">
        <a className={active === 0 ? 'active' : ''}
          onClick={() => { setActive(0) }}>Store</a>
        <a
          className={active === 1 ? 'active' : ''}
          onClick={() => { setActive(1) }}>Your's App</a>
      </div>
      {
        active === 1 && <Publish />
      }
    </div >
  )
}

export default App
