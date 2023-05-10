import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({'name':'', 'ege':0, 'comments':'' })
  const [showModal, setShowModal] = useState()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    //console.log(data)

    const response = await fetch('http://localhost:3001/api/createFile', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Error al enviar la solicitud');
      alert(Error)
    }

    handleModal({
      statusCode:200,
      description:`EL formulario de ${data.name} fue enviado con exito`,
      animation:'show'
    })

    setData({'name':'', 'ege':0, 'comments':'' })

  }

  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    //console.log(data)
  }

  const handleModal = (data) => {
    //console.log(data)
    
    setShowModal (<Modal serverResponse={data} />)
    setTimeout(setShowModal, 4500)
  }



  return (
    <main className='w-full bg-slate-950 min-h-screen grid place-items-center'>
      {showModal}
      <form onSubmit={handleSubmit} className='text-white w-full max-w-3xl grid bg-slate-900 p-6 gap-2 rounded-xl'>
        <h1 className='text-4xl text-center mb-6'>Formulario 📄</h1>
        <label htmlFor="nombre" className='text-xl'>Nombre:</label>
        <input type="text" placeholder='Excribe tu nombre' 
          className='rounded-lg w-2/3 p-2 outline-none focus:border-blue-500 border-4 text-black'
          name='name'
          onChange={handleChange}
          value={data.name}
        />
        <label htmlFor="nombre" className='text-xl'>Edad:</label>
        <input type="number" placeholder='Excribe Edad' 
          className='rounded-lg w-1/3 p-2 outline-none focus:border-blue-500 border-4 text-black'
          name='ege'
          onChange={handleChange}
          value={data.ege}
        />
        <label htmlFor="nombre" className='text-xl'>Comentario:</label>
        <textarea type="text" placeholder='Excribe Edad' 
          className='rounded-lg w-full h-60 p-2 outline-none focus:border-blue-500 border-4 text-black'
          name='comments'
          onChange={handleChange}
          value={data.comments}
        />
        <button className='pointer bg-green-600 w-1/2 p-2 rounded-md justify-self-center mt-4 active:scale-90 transition-all'
        >Enviar 📤</button>
      </form>
    </main>
  )
}

export function Modal({serverResponse}){
  return(
    <div className={`text-white max-w-sm p-2 rounded-md flex flex-wrap justify-center gap-2 items-center absolute 
    ${serverResponse.animation}
    ${serverResponse.statusCode === 200 ? `bg-green-500` :
    serverResponse.statusCode === 204 ? `bg-yellow-500` : `bg-red-500`}  transition-all`}>

      <span className="py-1 px-3 rounded-md aspect-square border-4 border-white font-bold text-lg ">
        {serverResponse.statusCode === 200 ? `✓` : `✕`}
      </span>

      <span className="text-xl break-words p-2 w-full">
        {serverResponse.description}
      </span>

    </div>
  )
}

export default App
