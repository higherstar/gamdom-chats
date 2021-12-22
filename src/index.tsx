import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from './App'
import SocketProvider from './providers/SocketProvider'
import stores from './stores'
import './index.css'

ReactDOM.render(
  <Provider {...stores}>
    <SocketProvider>
      <App/>
    </SocketProvider>
  </Provider>,document.getElementById("root")
);
