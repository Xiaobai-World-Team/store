import React, { useState } from 'react'
import './App.less'

function App() {
  const [tabs] = useState([
    '全部',
    '设计师',
    '前端',
    '后端',
    'Docker',
    '云原生'
  ])

  const [currentTab, setCurrentTab] = useState(tabs[0])

  return (
    <div className="xiaobai-world-store-wrapper">
      <div className="xiaobai-world-store-tabs">
        {tabs.map(tab => {
          return <a
            onClick={() => {
              setCurrentTab(tab)
            }}
            className={tab === currentTab ? 'active' : ''} key={tab}>{tab}</a>
        })}
      </div>
    </div >
  )
}

export default App
