import Application from '@ioc:Adonis/Core/Application'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CarsServices from 'App/Services/CarsServices'
import CreateCarValidator from 'App/Validators/CreateCarValidator'
import { v4 as uuid } from 'uuid'
export default class CarsController {


  async index({request,response}:HttpContextContract){
    const {brand,marches,model} =  request.only(['marches','brand','model'])

    const cars = new CarsServices()
    const result = await cars.index(marches,brand,model)

    return response.ok(result)

  }

  async show({response,params}:HttpContextContract){
    const {id} = params

    const cars = new CarsServices()
    const result = await cars.show(id)

    return response.ok(result)

  }

  async store({request,response}:HttpContextContract){
    let data = await request.validate(CreateCarValidator)

    const imageName = `${uuid()}.${data.photo?.extname}`
    if(data.photo){

     await data.photo.move(Application.tmpPath('uploads'),{
      name:imageName
     })
    }

    const cars = new CarsServices()
    const result = await cars.store({...data, photo: data.photo &&imageName})
    return response.status(result.status).json(result.data)
  }

  async updatePhoto({request,response,params}:HttpContextContract){
    let photo =  request.file('photo')
    let {id} =  params

    if(photo){
      const imageName = `${uuid()}.${photo?.extname}`
     await photo.move(Application.tmpPath('uploads'),{
      name:imageName
     })

     const cars = new CarsServices()
     const result = await cars.updatePhoto({
       photo: imageName,
       id
     })
     return response.status(result.status).json(result.data)
    }
  }

  async updateCar({request,response,params}:HttpContextContract){
    let {brand,color,marches,model,photo,year_fabrication,year_model} = await request.validate(CreateCarValidator)
    let {id} =  params
    const cars = new CarsServices()


    if(photo){
      const imageName = `${uuid()}.${photo?.extname}`
      await photo.move(Application.tmpPath('uploads'),{
        name:imageName
      })

    const result = await cars.updateCar({
      brand,color,marches,model,year_fabrication,year_model,
      photo: imageName,
    },id)
    return response.status(result.status).json(result.data)
    }

    const result = await cars.updateCar({
      brand,color,marches,model,year_fabrication,year_model,
    },id)
    return response.status(result.status).json(result.data)
  }
}
