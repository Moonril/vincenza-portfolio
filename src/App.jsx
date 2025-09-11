import './App.css'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
    <div className='min-h-screen'>
      <Sidebar />
      <MainPage />
      <Footer />      
    </div>
  )
}

export default App
