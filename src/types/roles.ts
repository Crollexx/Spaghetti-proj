export enum usersRoles {
  client = 1,
  clientRepresentative = 2,
  brigadier = 3,
  controller = 4,
  agent = 5,
  technologist = 6,
  courier = 7,
}

export enum usersLocaleRoles {
  'Клиент' = usersRoles.client,
  'Клиентский представитель' = usersRoles.clientRepresentative,
  'Бригадир' = usersRoles.brigadier,
  'Контроллер' = usersRoles.controller,
  'Агент' = usersRoles.agent,
  'Технолог' = usersRoles.technologist,
  'Курьер' = usersRoles.courier,
}