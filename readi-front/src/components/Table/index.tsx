import React from 'react';

import { BiEdit } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { CarProps } from '../../interfaces/cars';
import { Container } from './styles';


interface TableProps{
  cars:CarProps[]
}

const Table:React.FC<TableProps> = ({cars}) =>{
  const navigate = useNavigate()

  return(
    <Container>
      <table >
        <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Cor</th>
          <th>Ano Fabricação</th>
          <th>Ano Modelo</th>
          <th>Tipo de Cambio</th>
          <th></th>
        </tr>
        </thead>

        <tbody>
        {
        
        !!cars.length ? 
        cars.map((car) =>{
          let photo = ''
          if(car.photo){
            photo = `http://localhost:3333/uploads/${car?.photo}`
          }else{
            photo = 'http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon'
          }
        

          return(
            <tr key={car.id}>
              <td><img src={photo} alt={car.model} /> {car.brand}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.year_fabrication}</td>
              <td>{car.year_model}</td>
              <td>{car.marches}</td>
              <td> 
                <div className='edit' onClick={() =>{navigate(`editar/${car.id}`)}}>
                  <BiEdit/>
                </div>
              </td>
            </tr>
          )})
        :
        <tr style={{display:"flex",justifyContent:'center', position:'absolute',top:'50px',right:'0',left:"0", textAlign: 'center', marginTop: 25 }}>
          <td>
            Nenhum resultado encontrado!
          </td>
        </tr>
        } 
        </tbody>

      </table>
    </Container>
  )
}
export default Table