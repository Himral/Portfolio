import './index.css'
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';
import {NextUIProvider} from "@nextui-org/react";
function App() {
  return (
    
    <div className='main-body'>
      
      <Navbar/>
      <Home/>
      <About/>
      <hr></hr>
      <Projects/>
      <Footer/>
      {/* <About/> */}
      {/* <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Footer/> */}
      </div>
  )
}

export default App
