import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { AiOutlineFileImage, AiOutlineSave } from 'react-icons/ai'
import { FiArrowLeftCircle } from 'react-icons/fi'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import SyncLoader from 'react-spinners/SyncLoader'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Header from '../../components/Header'
import Input from '../../components/Input'
import SubHeader from '../../components/SubHeader'
import { useToast } from '../../hooks/useToast'
import { CarProps } from '../../interfaces/cars'
import api from '../../services/api'
import { queryClient } from '../../services/queryClient'
import getValidationErrors from '../../utils/getValidationErros'
import { AvatarInput, Container, Create, Loader } from './styles'

interface DataProps{
  brand:string
  model:string
  color:string
  marches:string
  year_fabrication:string
  year_model:string
  photo:File
}

const Details:React.FC = () =>{
  const formRef= useRef<FormHandles>(null)
  const navigate = useNavigate()
  const [avatar, setAvatar] = useState<File>()
  const [cambio, setCambio] = useState('automatico')
  const inputRef = useRef<HTMLInputElement>(null);
  const {notify} = useToast()
  const {id} = useParams()


  const {data:car} = useQuery<CarProps>(['car',id], async () =>{
    if(id){
      const response = await api.get(`/cars/${id}`)
      return response.data
    }
  })

  const handleSubmit = useCallback(async(data:DataProps) =>{
    try{

      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        brand:Yup.string().required('Marca obrigatória'),
        color:Yup.string().required('Cor obrigatória'),
        model:Yup.string().required('Modelo obrigatório'),
        year_fabrication:Yup.string().required('Ano de fabricação obrigatório'),
        year_model:Yup.string().required('Ano do modelo obrigatório'),
      })

      await schema.validate(data,{
        abortEarly:false  
      })

      let formData = new FormData();  

      const file = inputRef.current?.files?.[0]
      formData.append('brand',data.brand);   //append the values with key, value pair
      formData.append('model', data.model);
      formData.append('color', data.color);
      formData.append('year_fabrication', data.year_fabrication);
      formData.append('year_model', data.year_model);
      formData.append('marches', cambio);
      file && formData.append('photo',file);

      if(id){
        await api.put(`cars/${id}/updateCar`,formData)
        await queryClient.invalidateQueries(['car'])
      }else{
        await api.post(`cars/store`,formData)
        await queryClient.invalidateQueries(['cars'])

      }

      notify({
        message:id ?  'Veículo Atualizado' : 'Veículo Cadastrado',
        types:"success"
      })
      navigate('/')

    }catch(err:any){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);
        notify({
          message:'Preencha os campos obrigatórios',
          types:"warning"
        })

        return
      }

      if(err.response.data){
      notify({
        message:err.response.data,
        types:"error"
      })
    }
    }
  },[])

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
       setAvatar(e.target.files[0])
        const data = new FormData();
        data.append('file', e.target.files[0]);
      }
    },
    [],
  );

  const [preview,setPreview] = useState<string>(``)


  useEffect(() => {
    if(avatar){
      const reader = new FileReader() 
      reader.onloadend = () =>{
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(avatar)
    }else if(car?.photo){
      setPreview(`http://localhost:3333/uploads/${car?.photo}`)
    }
  },[avatar,car?.photo])


  if(id && !car){
    return (
      <Loader>
        <SyncLoader  color='#1fcab3'/>
      </Loader> 
    )
  }

  return(
    <>
      <Header/>
      <Container>
        <SubHeader buttonProps={{icon:<FiArrowLeftCircle/>,text:"Voltar" ,path:'/'}}/>
        <Create>
          <Form initialData={car} ref={formRef} onSubmit={handleSubmit}>
            <div className='gridDiv'>
              <AvatarInput>
                <img src={ preview? preview : 'https://svgsilh.com/svg_v2/2386838.svg'} alt={'imagem do carro'}/>
                <label htmlFor="avatar">
                  <AiOutlineFileImage size={20}  color={"#fff"}/>
                  <input
                    ref={inputRef}
                    data-testid="input-file"
                    type="file"
                    id="avatar"
                    name={"image"}
                    onChange={handleAvatarChange}
                  />
    
                  {/* <input type="file" className="custom-file-input" accept=".csv" ref={inputRef} onChange={handleSubmit}/> */}
                </label>
              </AvatarInput>
              <div className='form'>
                <h1>{!id? 'Cadastre um veículo' : 'Atualize o veículo'}</h1>
                <div className='contentLabel'>
                  <Input name="brand"   placeholder="Marca" />
                  <Input name="model"   placeholder="Modelo" />
                </div>

                <div className='contentLabel'>
                  <Input name="color" type={'text'} placeholder="Cor do veículo" />
                  <Input name="year_fabrication"  placeholder="Ano de fabricação" type="number" />
                </div>

                <div className='contentLabel'>
                <Input name="year_model" placeholder="Ano do modelo" type="number" />
                <select defaultValue={car?.marches} onChange={(e) =>{setCambio(e.target.value)}} >
                  <option value="automatico">Automatico</option>
                  <option value="manual">Manual</option>
                </select>
                </div>
                <Button type="submit" text={!id? 'Registrar veículo' : 'Editar veículo'} icon={<AiOutlineSave/>}/>
              </div>
            </div>
          </Form>
        </Create>
      </Container>
    </>

  )
}
export default Details