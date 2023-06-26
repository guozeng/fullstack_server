import { createConnection } from 'mysql2/promise'
import config from "./config";


async function main(sql: string, params?: Array<any>) {
  const connection = await createConnection(config);
  // query database
  const [rows, fields] = await connection.execute(sql, params || []);
  connection.end()
  return rows
}


export default main
