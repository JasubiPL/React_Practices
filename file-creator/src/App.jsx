import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({name:'', ege:0, comments:'' })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    console.log(data)

    const newData = data

    console.log(newData)

    fetch('http://localhost:3001/api/createFile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData),
      mode: 'no-cors', // deshabilitar temporalmente la política CORS
    })

  }

  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    //console.log(data)
  }



  return (
    <main className='w-full bg-slate-950 min-h-screen grid place-items-center'>
      <form onSubmit={handleSubmit} className='text-white w-full max-w-3xl grid bg-slate-900 p-6 gap-2 rounded-xl'>
        <h1 className='text-4xl text-center mb-6'>Formulario 📄</h1>
        <label htmlFor="nombre" className='text-xl'>Nombre:</label>
        <input type="text" placeholder='Excribe tu nombre' 
          className='rounded-lg w-2/3 p-2 outline-none focus:border-blue-500 border-4 text-black'
          name='name'
          onChange={handleChange}
        />
        <label htmlFor="nombre" className='text-xl'>Edad:</label>
        <input type="number" placeholder='Excribe Edad' 
          className='rounded-lg w-1/3 p-2 outline-none focus:border-blue-500 border-4 text-black'
          name='ege'
          onChange={handleChange}
        />
        <label htmlFor="nombre" className='text-xl'>Comentario:</label>
        <textarea type="text" placeholder='Excribe Edad' 
          className='rounded-lg w-full h-60 p-2 outline-none focus:border-blue-500 border-4 text-black'
          name='comments'
          onChange={handleChange}
        />
        <button className='pointer bg-green-600 w-1/2 p-2 rounded-md justify-self-center mt-4 active:scale-90 transition-all'
        >Enviar 📤</button>
      </form>
    </main>
  )
}

export default App
