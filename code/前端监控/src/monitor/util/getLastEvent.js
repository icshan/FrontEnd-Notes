let lastEvent;
['click' , 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(eventType => {
  document.addEventListener(eventType, function(event){
    lastEvent = event;
  },{
    capture: true, 
    passive: true, // 默认不阻止
  })
})
export default function(){return lastEvent}