import DB from '@db/DB.ts'
import getSql from './sql/index.ts'
const model: IModel = {
  async queryById() {
    const sql = await getSql('users/query-all')
    const rows = await  DB(sql.toString())
    return rows

  },
  async add(rows: Record<string, any> []) {
    // const result = await DB.insert('customers', rows)
    return ''
  },
}
export default model
