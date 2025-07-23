import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Join from './component/Join'
import ZegoCloud from './component/ZegoCloud'
import Footer from './component/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Join />}/>
      <Route path='/room/:id' element={<ZegoCloud/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App