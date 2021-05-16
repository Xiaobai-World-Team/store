import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import "./publish.less"

function Publish() {
  const [appList, setAppList] = useState([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    axios.get('/store/getAppList').then(res => {
      setAppList(res.data.data)
    })
  }, [])

  function submit(event: FormEvent) {
    event.preventDefault()
    const form = event.currentTarget as HTMLFormElement
    axios.post(
      '/store/addGitRegistry',
      {
        gitRegistry: form['gitRegistry'].value
      })
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div className="xiaobai-world-store-new-application">
      <form action="/store/newApp" onSubmit={(event) => submit(event)}>
        <div className="form-item">
          <label>Git地址</label>
          <div className="field">
            <input name="gitRegistry" type="text" />
          </div>
        </div>

        <div className="submit">
          <input type="submit" value="添加" />
        </div>

      </form>
    </div >
  )
}

export default Publish
