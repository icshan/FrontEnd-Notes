import tracker from "../util/tracker";
import onload from "../util/onload";
export function blankScreen(){
  let wrapperElements = ['html', 'body', '#container', 'content'];
  let emptyPoints = 0;
  function getSelector(element){
    if(element.id){
      return '#'+element.id
    }else if(element.className){
      return '.'+element.className
    }else{
      return element.nodeName.tolowerCase();
    }
  }
  function isWrapper(element){
    let selector = getSelector(element);
    if(wrapperElements.indexOf(selector) !== -1){
      emptyPoints++;
    }
  }
  onload(function(){
    for(let i = 1; i <= 9; i++){
      let xElements = document.elementsFromPoint(
        window.innerWidth * i / 10,
        window.innerHeight / 2
      )
      let yElements = document.elementsFromPoint(
        window.innerWidth  / 2,
        window.innerHeight * i / 10,
      )
      isWrapper(xElements);
      isWrapper(yElements);
    }
    if(emptyPoints > 16){
      // 发送数据
      tracker({
        // 自定义数据
      })
    }
  })

}
