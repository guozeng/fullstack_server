import { createConnection, Connection } from 'mysql2/promise'
import config from "./config";

async function DB(sql: string, params?: Array<any>) {
  let connection: Connection,
      result: any,
      errCode: string,
      sqlMessage: string
  try {
    connection = await createConnection(config);
    const [ rows ] = await connection.execute(sql, params || []);
    result = rows
  } catch (error) {
    errCode = error.code
    sqlMessage = error.sqlMessage
  } finally {
    connection && connection.end()
  }
  return {
    errCode: errCode || null,
    sqlMessage: sqlMessage || null,
    data: result || null,
  };
}

export default DB
