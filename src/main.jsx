import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application'
import { Provider } from 'react-redux'
import { store } from './services/store'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.StrictMode>
            <Application />
        </React.StrictMode>
    </Provider>
)
