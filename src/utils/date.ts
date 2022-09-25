function transformToNum (str: string) {
  let strArr = str.split('.')

  let minute = parseInt(strArr[0]),
    second = parseInt(strArr[1])
  
  return minute * 60 + second
}

export {
  transformToNum
}