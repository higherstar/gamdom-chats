import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import App from './App'
import Store from './stores'
import './index.css'

ReactDOM.render(
  <Provider {...Store()}>
    <App/>
  </Provider>,document.getElementById("root")
);
