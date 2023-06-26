declare interface IModel {
  queryById() : void
  add(rows: Record<string, any> []): void
}
