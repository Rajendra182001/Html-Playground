import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Working from './Working'
import Practice from './Practice'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Working/>} ></Route> 
        </Routes>
      </Router>
    </>
  )
}

export default App
