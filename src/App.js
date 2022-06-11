import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main_content">
          <img src="assets/frame.png" alt="gun" className='gun' draggable={false} />
          <img src="assets/hammer.png" alt="hammer" className='hammer' draggable={false} />
          <img src="assets/trigger.png" alt="trigger" className='trigger' draggable={false} />
        </div>
      </header>
    </div>
  )
}

export default App