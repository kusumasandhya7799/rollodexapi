import React from 'react'
import ReactDOM from 'react-dom'
//import Home from './pages/Home/Home'
import './index.css'
import {Provider} from 'react-redux'
import store from'./redux/store'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <>
    {/* provider connecting bridge between react component home and redux store */}
        <Provider store={store}>
            <BrowserRouter>
                    <App/>
            </BrowserRouter>
            {/* <Home /> */}
        </Provider>

        
    </>
,document.getElementById('root'))