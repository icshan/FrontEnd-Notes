export default function (path){
  if(Array.isArray(path)){
    return getSelectors(path)
  }
}
function getSelectors(path){
  // 反转并去除window和document
  return path.reverse().filter(item =>item !== document && item !== window).map(item => {
    if(item.id){
      return `${item.tagName.toLowerCase()} #${item.id}`
    }else if(item.className && typeof item.className == 'string'){
      return `${item.tagName.toLowerCase()} .${item.className}`
    }else{
      return `${item.nodeName.toLowerCase()}`
    }
  }).join(' ')
}