/**
 * 编写：数字千分符
 * @param {*} num 
 */
function paddingNum(num){
  let [interger, point] = num.toString().split('.');
  let res
  let reg = /(\d{3})(?=\d)/g
  let newStr = interger.split('').reverse().join('').replace(reg, (match, $1) => {
    return match + ','
  })
  newStr = newStr.split('').reverse().join('')
  point ? res = newStr + '.' + point : res = newStr
  return res
}

// function two use toLocaleString
function paddingNum(number){
  return number.toLocaleString()
}
