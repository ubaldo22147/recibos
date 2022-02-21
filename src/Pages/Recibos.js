import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Recibos() {
  let navigate = useNavigate();

  const [proveedor, setProveedor] = useState('')
  const [monto, setMonto] = useState(null)
  const [moneda, setMoneda] = useState('')
  const [fecha, setFecha] = useState('')
  const [comentario, setComentario] = useState('')

  const registrar = async () => {
    
    const userData = {
      Proveedor: proveedor,
      Monto: parseInt(monto),
      Moneda: moneda,
      Fecha: fecha,
      Comentario: comentario,
    }


  const {data} = await  axios.post('https://localhost:44355/api/user/CreateUser', userData)


  console.log(data)

  alert('Se registro de manera exitosa, id: '+data.id)

  }


 
  return (
    <div>
            <input onChange={(e)=>{setProveedor(e.target.value)}} value={proveedor} type="text" placeholder="Proveedor" />
            <input onChange={(e)=>{setMonto(e.target.value)}} value={monto} type="number" placeholder="Monto" />
            <input onChange={(e)=>{setMoneda(e.target.value)}}  value={moneda} type="text" placeholder="Moneda" />
            <input onChange={(e)=>{setFecha(e.target.value)}} value={fecha} type="date" placeholder="Fecha" />
            <input onChange={(e)=>{setComentario(e.target.value)}} value={comentario} type="text" placeholder="Comentario" />
            <button onClick={registrar}>Registrar</button>
            <button onClick={() => {navigate('/Recibos/visualizar')}}>Visualizar Registros</button>
            <button onClick={() => {navigate('/Login')}}>Logout</button>
        </div>
  );
}

export default Recibos;