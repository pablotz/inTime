import { useEffect, useState } from 'react'
import './App.css'
import AgeCounter from './components/ageCounter';
import SelectBorn from './components/selectBorn';
import Footer from './components/footer';



function App() {
  const [startDate] = useState(new Date('2000-07-26'))
  const [selectedBorn, setSelectedBorn] = useState()

  useEffect(() => {
    let localBorn = localStorage.getItem('born')
    if(!localBorn) return;
    let parseDate = new Date(localBorn)
    setSelectedBorn(parseDate)
    
  }, [])
  

  return (
    <div>
      <SelectBorn born={selectedBorn} setBorn={setSelectedBorn} />
      <div className='age-container'>
        <h1 className='age-text'>AGE</h1>
        <AgeCounter startDate={selectedBorn ? selectedBorn : startDate } />
      </div>
      <Footer />
    </div>
  )
}

export default App
