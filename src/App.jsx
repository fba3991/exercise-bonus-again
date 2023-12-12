import { useState } from 'react'
import CustomFormElement from './components/CustomFormElements'
import './App.css'

function App() {
  const [formData, setFormData] = useState([
    {
      id: 'user-name',
      label: 'User Name',
      value: '',
      mode: 'input',
    },
    {
      id: 'sex',
      label: 'Sex',
      value: '',
      mode: 'radio',
      options: ['m', 'f'],
    },
   
  ]);
    
  return (
    <div>
      {/* Mappa formData che rappresenta ogni elemento tramite CustomFormElement */}
      {formData.map(({ id, label, value, mode, options }) => (
        
        <CustomFormElement
          key={id}
          mode={mode}
          label={label}
          value={value}
          id={id}
          options={options}
         
        />
      ))}
    </div>
  );
};

  

export default App
