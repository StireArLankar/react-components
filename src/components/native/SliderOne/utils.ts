const incElement = (elementValue: number, componentsLength: number) => {
  const maxValue = componentsLength - 1
  return elementValue === maxValue ? 0 : elementValue + 1
}

const decElement = (elementValue: number, componentsLength: number) => {
  const maxValue = componentsLength - 1
  return elementValue === 0 ? maxValue : elementValue - 1
}

const findIndexOfFirstElement = (
  array: number[],
  componentsLength: number,
  listLength: number
): number => {
  const max = Math.max(...array)
  const min = Math.min(...array)
  const diff = max - min
  const listDiff = listLength - 1 // 3
  if (diff !== listDiff) {
    const indexOfMin = array.indexOf(min)
    let list = [...array]
    list.splice(indexOfMin, 1, min + componentsLength)
    return findIndexOfFirstElement(list, componentsLength, listLength)
  }
  return array.indexOf(max)
}

const findIndexOfLastElement = (
  array: number[],
  componentsLength: number,
  listLength: number
): number => {
  const max = Math.max(...array)
  const min = Math.min(...array)
  const diff = max - min
  const listDiff = listLength - 1 // 3
  if (diff !== listDiff) {
    const indexOfMin = array.indexOf(min)
    let list = [...array]
    list.splice(indexOfMin, 1, min + componentsLength)
    return findIndexOfLastElement(list, componentsLength, listLength)
  }
  return array.indexOf(min)
}

export const incLastElement = (
  array: number[],
  componentsLength: number,
  listLength: number
): number[] => {
  // ищем минимальный индекс в массиве
  const indexOfLast = findIndexOfLastElement(
    array,
    componentsLength,
    listLength
  )
  // ищем максимальный индекс в массиве
  const indexOfFirst = findIndexOfFirstElement(
    array,
    componentsLength,
    listLength
  )
  // ищем 'максимальное значение'
  const increasedElement = incElement(array[indexOfFirst], componentsLength)
  // возвращаем массив, у которого на месте минимального индекса стоит максимальный
  let temp = [...array]
  temp.splice(indexOfLast, 1, increasedElement)
  return temp
}

export const decFirstElement = (
  array: number[],
  componentsLength: number,
  listLength: number
): number[] => {
  const indexOfLast = findIndexOfLastElement(
    array,
    componentsLength,
    listLength
  )
  const indexOfFirst = findIndexOfFirstElement(
    array,
    componentsLength,
    listLength
  )
  const decreasedElement = decElement(array[indexOfLast], componentsLength)
  let temp = [...array]
  temp.splice(indexOfFirst, 1, decreasedElement)
  return temp
}
