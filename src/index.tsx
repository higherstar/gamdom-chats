import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from './App'
import stores from './stores'
import './index.css'

ReactDOM.render(
  <Provider {...stores}>
    <App/>
  </Provider>,document.getElementById("root")
);
