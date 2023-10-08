import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const AgeCounter = ({startDate}) => {
    const [age, setAge] = useState(0)
    const [year, setYear] = useState(0)

    const getAgeNum = (now) => {
        let fullLength = (now - startDate) / 31556900000
        return fullLength.toFixed(9).toString().split('.')
    }


    useEffect(() => {
          const interval = setInterval(() => {
            let getNow = new Date()
            let ageArr = getAgeNum(getNow);
            setYear(ageArr[0])
            setAge(ageArr[1])
          }, 100);
          return () => clearInterval(interval);
    }, [startDate])


  return (
    <> 
        <div className='year-container'>
          <h1 className='year'>{year}.</h1>
        </div>

        <div className='counter-container'>
          <h2 className='counter'>{age}</h2>
        </div>
        
    </>
  )
}

export default AgeCounter