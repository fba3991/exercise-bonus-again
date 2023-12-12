const CustomFormElement = ({ mode, label, value, id, options, onChange }) => {
    if (mode === 'input') {
      return (
        <div>
          {/* Mostra l'etichetta per l'elemento del form */}
          <label>{label}</label>
          {/* Crea un campo di input di tipo testuale */}
          <input type="text" id={id} value={value} onChange={onChange} />
        </div>
      );
    }
  
    if (mode === 'select') {
      return (
        <div>
          {/* Mostra l'etichetta per l'elemento del form */}
          <label htmlFor={id}>{label}</label>
          {/* Crea un menu a discesa per selezionare un'opzione */}
          <select id={id} value={value} onChange={onChange}>
            {/* Mappa le opzioni fornite per generare gli elementi <option> */}
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

  
    return null;
  };
  
  export default CustomFormElement;
  