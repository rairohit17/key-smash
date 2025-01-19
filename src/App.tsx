
import Dashboard from './pages/Dashboard'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    
      <div  >
        <Header></Header>
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<LandingPage/>}></Route>



        </Routes>
        </BrowserRouter>
        {/* <LandingPage></LandingPage> */}
        <Footer></Footer>
        
        
        
        
        </div>
       
    
  )
}

export default App
