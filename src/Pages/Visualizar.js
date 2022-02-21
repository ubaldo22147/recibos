import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Visualizar = () => {


    const [registros, setRegistros] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{
const fetchData = async () => {
    const {data} = await  axios.get('https://localhost:44355/api/user/GetUsers')

    setRegistros(data)
}
fetchData()
    }, [])

  return (
    <div>

        <div className='table'>
        <div className='row'>
                    <span style={{display:'block'}}>Proveedor</span>
                    <span style={{display:'block'}}>Monto</span>
                    <span style={{display:'block'}}>Moneda</span>
                    <span style={{display:'block'}}>Fecha</span>
                    <span style={{display:'block'}}>Comentario</span>
                   </div>
            {
                registros.map(registro=>(
                   <div className='row'>
                    <span style={{display:'block'}}>{registro.proveedor}</span>
                    <span style={{display:'block'}}>{registro.monto}</span>
                    <span style={{display:'block'}}>{registro.moneda}</span>
                    <span style={{display:'block'}}>{registro.fecha}</span>
                    <span style={{display:'block'}}>{registro.comentario}</span>
                   </div>
                ))
            }
        </div>
        <button onClick={() => {navigate('/Recibos')}}>Registro Recibos</button>
    </div>
  )
}

export default Visualizar