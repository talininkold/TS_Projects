export const stringToDataFormat = (date: string): Date => {
  const dateArr = date.split('/').map((el: string) => parseFloat(el))

  let newDate = new Date(dateArr[2], dateArr[1]-1, dateArr[0])
  return newDate
}