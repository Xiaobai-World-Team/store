import axios from 'axios'
import React, { FormEvent, useEffect, useState } from 'react'
import "./index.less"

function NewApp() {
  const [active, setActive] = useState(0)

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
          <label>Git Registry URL</label>
          <div className="field">
            <input name="gitRegistry" type="text" />
          </div>
        </div>

        <div className="submit">
          <input type="submit" value="Add" />
        </div>

      </form>
    </div >
  )
}

export default NewApp
