export default async (path: string) => {
  const sql = await useStorage().getItem(`assets/sql/${path}.sql`)
  return sql.toString()
}
