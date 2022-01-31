import {Routes,Route} from 'react-router-dom'
import Aboutus from './pages/Aboutus/Aboutus'
import Home from './pages/Home/Home'

const App=()=>{
    return(<>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/aboutus' element={<Aboutus/>} />
        </Routes>
        </>)
}
export default App