export const convertDateTime = (date: Date): string => {
   return new Date(new Date(date)).toLocaleString('ru', {
      timeZone: 'Europe/Moscow',
   })
}