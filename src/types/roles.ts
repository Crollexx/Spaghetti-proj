export enum usersRoles {
  client = 0,
  clientRepresentative = 1,
  brigadier = 2,
  controller = 3,
  agent = 4,
  technologist = 5,
  courier = 6,
}

export enum usersLocaleRoles {
  'Клиент' = usersRoles.client,
  'Клиентский представитель' = usersRoles.clientRepresentative,
  'Бригадир' = usersRoles.brigadier,
  'Контроллер' = usersRoles.controller,
  'Агент' = usersRoles.agent,
  'Технологист' = usersRoles.technologist,
  'Курьер' = usersRoles.courier,
}