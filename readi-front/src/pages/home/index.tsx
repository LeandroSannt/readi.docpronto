import React, { useState } from 'react'
import { FiArrowRightCircle } from 'react-icons/fi'
import { useQuery } from 'react-query'

import Header from '../../components/Header'
import InputFilter from '../../components/InputFilter'
import SubHeader from '../../components/SubHeader'
import Table from '../../components/Table'
import { CarProps } from '../../interfaces/cars'
import api from '../../services/api'
import { Container, Filters } from './styles'

interface filterProps{
  brand?:string
  model?:string
}

const Home:React.FC = () =>{

  const [filters,setFilters] = useState<filterProps>()

  const {data:cars} = useQuery<CarProps[]>(['cars',filters?.brand,filters?.model], async () =>{
    const response = await api.get('/cars',{
      params:{
        brand:filters?.brand,
        model:filters?.model
      }
    })

    return response.data
  }
  )

  return(
    <>
      <Header/>
      <Container>
      <SubHeader buttonProps={{icon:<FiArrowRightCircle/>,text:"Cadastrar veiculo" ,path:'/cadastro'}}/>
        <Filters>
          <h2>Procure por um veiculo</h2>
          <div>
            <InputFilter onChange={(e) =>{setFilters({...filters,brand:e.target.value})}} placeholder='Procure por uma marca'/>
            <InputFilter onChange={(e) =>{setFilters({...filters,model:e.target.value})}} placeholder='Procure por uma modelo'/>
          </div>
        </Filters>
        <Table cars={cars || []}/>
      </Container>
    </>

  )
}
export default Home