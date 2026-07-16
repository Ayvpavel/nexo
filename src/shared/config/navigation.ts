export const APP_NAME = 'Nexo'
export const ADMIN_PLACEHOLDER = 'Администратор'
export const NAV_ITEMS = [
  { id: 'users', label: 'Пользователи' },
  { id: 'communities', label: 'Сообщества' },
  { id: 'students', label: 'Студенты' },
  { id: 'groups', label: 'Группы' },
  { id: 'training', label: 'Обучение' },
  { id: 'events', label: 'Мероприятия' },
  { id: 'news', label: 'Новости' },
  { id: 'messages', label: 'Сообщения' },
  { id: 'favorites', label: 'Избранное' },
  { id: 'progress', label: 'Прогресс' },
  { id: 'settings', label: 'Настройки' },
  { id: 'logout', label: 'Выход' },
] as const

export type NavItemId = (typeof NAV_ITEMS)[number]['id']
