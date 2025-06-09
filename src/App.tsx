import './App.css';

import CustomInput from './components/CustomInput';

function App() {

  return (
    <>
    <form>
      <CustomInput
        label="Endereço completo"
        placeholder="Digite seu endereço"
        onChange={(e) => console.log(e.target.value)}
        validator={(value) => value.toLowerCase().includes("rua") || value.toLowerCase().includes("avenida") || value.toLowerCase().includes("estrada")}
        invalidText='⚠ Endereço inválido'
        hintText='ℹ Deve conter palavra "Rua", "Avenida" ou "Estrada"'
        isRequired={true}
        style={{marginBottom: '55px'}}
      />
      <button type='submit' style={{width: "100%"}}>Enviar</button>
      </form>
    </>
  )
}

export default App
