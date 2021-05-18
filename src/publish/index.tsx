import React, { useEffect, useState } from 'react'
import NewApp from './NewApp'
import YourApp from './YourApp'
import './publish.less'

enum TabEnum {
  YOUR_APP,
  NEW_APP
}

function Publish() {
  const [active, setActive] = useState(TabEnum.YOUR_APP)

  useEffect(() => {

  }, [])


  return (
    <div className="xiaobai-world-store-your-app">
      <aside>
        <a
          className={active === TabEnum.YOUR_APP ? 'active' : ''}
          onClick={() => setActive(TabEnum.YOUR_APP)}>Your's</a>
        <a
          className={active === TabEnum.NEW_APP ? 'active' : ''}
          onClick={() => setActive(TabEnum.NEW_APP)}>New App</a>
      </aside>
      <main>
        {active === TabEnum.YOUR_APP ? <YourApp /> : null}
        {active === TabEnum.NEW_APP ? <NewApp /> : null}
      </main>
    </div >
  )
}

export default Publish
