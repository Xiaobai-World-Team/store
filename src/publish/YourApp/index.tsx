import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'

interface Registry {
  _id: string,
  gitRegistry: String
}

function YourApp() {
  const [registryList, setRegistryList] = useState<Registry[]>([])

  useEffect(() => {
    axios.get('/store/getGitRegistryList').then(res => {
      setRegistryList(res.data.data)
    })
  }, [])

  return (<div>
    {registryList.map(registry => {
      return <div key={registry._id}>
        {registry.gitRegistry}
      </div>
    })}
  </div>)
}

export default YourApp