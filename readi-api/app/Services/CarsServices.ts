import Car from 'App/Models/Car'

interface CarStoreProps{
  brand:string
  model:string
  color:string
  year_fabrication:any
  year_model:any
  marches:any
  photo?:any
}

interface UpdateCarProps{
  id:number
  photo:string
}
export default class CarsServices {

  async index(marches:string,brand:string,model:string){
    const cars = await Car.query()
    .where((query) =>{
      if(brand){
        query.whereLike('brand', `%${brand}%`)
      }
      if(marches){
        query.whereLike('marches', `%${marches}%`)
      }
      if(model){
        query.whereLike('model', `%${model}%`)
      }
    })

    return cars
  }

  async show(id:string){
    const car = await Car.find(id)

    if(car){
      return car
    }
  }

  async store(data:CarStoreProps){
    const findedCar = await Car.query()
    .where('brand',data.brand)
    .andWhere('model',data.model)
    .andWhere('color',data.color)
    .andWhere('year_fabrication',data.year_fabrication)
    .andWhere('year_model',data.year_model)
    .andWhere('marches',data.marches)
    .first()

    if(findedCar){
      return {
        data:"Carro ja cadastrado",
        status:422
      }
    }

    const car = await Car.create(data)

    return {
      data:car,
      status:201
    }

  }

  async updatePhoto({photo,id}:UpdateCarProps){
    const findedCar = await Car.find(id)
    if(findedCar?.photo){
      findedCar.photo = photo
      await findedCar.save()




      return {
        status:200,
        data:findedCar
      }
    }

    return {
      status:404,
      data:'Não encontrado'
    }
  }

  async updateCar(data:CarStoreProps,id:number){
    const findedCar = await Car.find(id)

    if(findedCar){
      findedCar.merge(data)
      await findedCar.save()

      return {
        status:200,
        data:findedCar
      }
    }

    return {
      status:404,
      data:'Não encontrado'
    }
  }
}
