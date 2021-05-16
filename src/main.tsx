import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

interface IXiaobaiWorldMessageData {
  XIAOBAI_EVENT: "XIAOBAI_APP_JAVASCRIPT_ENTRY_LOADED",
  id: string,
  appName: string,
  title: string,
}

function render(selector: string) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector(selector)
  )
}

if (Object.getOwnPropertyNames(window).includes('xiaobaiApi')) {
  let selecotr = '.xiaobai-world-unused-window[app-name="reactDemo"]'
  window.addEventListener('message', (event: MessageEvent) => {
    const data: IXiaobaiWorldMessageData = event.data
    if (data.XIAOBAI_EVENT !== 'XIAOBAI_APP_JAVASCRIPT_ENTRY_LOADED') {
      return
    }
    if (document.querySelector(selecotr)) {
      render(selecotr)
    }
  })
} else {
  render('#root')
}