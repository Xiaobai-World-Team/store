import React, { useEffect, useState } from 'react'
import NewApp from './NewApp'
import YourApp from './YourApp'
import './publish.less'

enum TabEnum {
  YOUR_APP,
  NEW_APP
}

function Publish() {
  const [tabs, setActive] = useState([
    '全部',
    '设计师',
    '前端',
    '后端',
    'Docker',
    '云原生'
  ])

  useEffect(() => {

  }, [])


  return (
    <div className="xiaobai-world-store-your-app">
      <aside>
        {tabs.map(tab => {
          return <a key={tab}>{tab}</a>
        })}
      </aside>
      <main>
        1
      </main>
    </div >
  )
}

export default Publish
