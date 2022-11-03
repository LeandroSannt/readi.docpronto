import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cars'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('brand').notNullable()
      table.string('model').notNullable()
      table.string('color').notNullable()
      table.integer('year_fabrication').notNullable()
      table.integer('year_model').notNullable()
      table.enum('marches',['manual','automatico']).notNullable()
      table.string('photo').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
