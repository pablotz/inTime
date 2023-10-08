/* eslint-disable react/prop-types */
import '../assets/selectBorn.css'

const SelectBorn = ({born, setBorn}) => {
  
    const handleSelected = (e) => {
        if(e.target.value === '') return;
        let selected = new Date(e.target.value);
        setBorn(selected)
        localStorage.setItem('born', selected)
    }
    
    let defaultDate = born && born.toISOString().split('T')[0]

  
    return (
        <div className='select-container'>
           {
            born ? <p>Update your birthday</p> : <p>Enter your birthday</p>
           }
            <input 
                className='selectDate' 
                type="date" 
                defaultValue={defaultDate} 
                onChange={handleSelected}
            />
            
        </div>
    )
}

export default SelectBorn