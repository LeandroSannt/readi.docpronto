import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  public id: number


  @column()
  public brand: string

  @column()
  public model: string

  @column()
  public color: string

  @column()
  public year_fabrication: Date

  @column()
  public year_model: Date

  @column()
  public marches: 'manual' | 'automatico'

  @column()
  public photo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
