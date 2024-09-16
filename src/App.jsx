import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Nav from "./components/Nav"


function App() {

  return (
    <>
      <div className='container'>
        <Hero/>
        <Home/>
        <Footer/>
      </div>
    </>
  )
}

export default App