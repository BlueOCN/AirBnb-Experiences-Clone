import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {

  const deck = data.map(data => {
    return (
      <Card
        key={data.id}
        items={data}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='deck-container'>
        {deck}  
      </section>

    </>
  )
}

export default App
