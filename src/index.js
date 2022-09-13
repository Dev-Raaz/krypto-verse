// @Library Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'

// @User defined imports
// styles
import './styles/index.scss'

// store
import store from './app/store'

// @Creating a root
const root = ReactDOM.createRoot(document.querySelector('#root'))

// @Rendering in strict mode
/* Strict mode highlights potential problems in the app, it activates
   additional checks and warnings for it's descendents.
*/

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
