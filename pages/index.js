import {useState} from 'react'

function Home(params) {
  return (
    <div>
      <h3>Home</h3>
      <Contador/>
    </div>
  )
}

function Contador () {
  const [contador, setContador] = useState(1)

  const plusOne = () => setContador(contador + 1)
  const lesOne = () => setContador(contador - 1)

  return (
    <div>
      <div>{contador}</div>
      <button onClick={plusOne}>Add</button>
      <button onClick={lesOne}>Add</button>
    </div>
  )
}

export default Home