import './App.css'
import Cards from './components/Cards.jsx'
import "./fonts/get_schwifty.ttf"
import characters from './data.js'
import Navbar from './components/Navbar.jsx'

function App () {
  return (
    <div className='App' style={{ height: '100vh' }}>
      <div>
        <Navbar/>
      </div>
      <div className='cards-body' id='cardsBody'>
        <Cards
          characters={characters}
        />
      </div>
    </div>
  )
}

export default App
