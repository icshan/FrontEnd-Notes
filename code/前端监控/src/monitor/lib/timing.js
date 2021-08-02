import getLastEvent from "../util/getLastEvent";
import getSelector from "../util/getSelector";
import tracker from "../util/tracker";
import onload from './utils/onload';

export function blankScreen(){
  let FMP, LCP;
  // 增加一个新能条目的观察者
  new PerformanceObserver((entryList, observer)=>{
    let perfEntries = entryList.getEntries();
    FMP = perfEntries[0];
    observer.disconnect()
  }).observe({entryTypes: ['element']}) // 观察页面中有意义的元素

  // 增加一个新能条目的观察者
  new PerformanceObserver((entryList, observer)=>{
    let perfEntries = entryList.getEntries();
    LCP = perfEntries[0];
    observer.disconnect()
  }).observe({entryTypes: ['largest-contentful-paint']}) // 观察页面中最大的元素

  // 增加一个新能条目的观察者
  new PerformanceObserver((entryList, observer)=>{
    let lastEvent = getLastEvent()
    let firstInput = entryList.getEntries[0];
    if(firstInput){
      //  processingStart: 开始处理时间
      //  startTime: 开始点击事件
      let inputDelay = firstInput.processingStart - firstInput.startTime; // 处理的延迟
      let duration = firstInput.duration; // 处理耗时
      if(inputDelay > 0 || duration > 0){

      // 处理首次输入延迟
        tracker.send({
          kind: 'experience',
          type: 'firstInputDelay', // 处理首次输入延迟
          inputDelay,
          duration,
          startTime: firstInput.startTime,
          selector: lastEvent ? getSelector(lastEvent.path || lastEvent.target) : ''
        })
      }
    }

    observer.disconnect()
  }).observe({entryTypes: ['first-input'], buffered: true}) // 观察页面中最大的元素

  onload(function(){
    setTimeout(()=>{
      const {
        fetchStart,
        connectStart,
        connectEnd,
        requestStart,
        responseStart,
        responseEnd,
        domLoading,
        domInteractive,
        domContentLoadedEventStart,
        domContentLoadedEventEnd,
        loadEventStart,
        loadEventEnd
      } = performance.timeOrigin;
      tracker.send({
        kind: 'experience',
        type: 'timing',
        connectTime: connectEnd - connectStart,
        ttfbTime: responseStart - requestStart,
        responseTime: responseEnd - responseStart,
        parseDomTime: loadEventStart - domLoading,
        domContentLoadedTime: domContentLoadedEventEnd - domContentLoadedEventStart,
        timeToInteractive: domInteractive - fetchStart
      })
      // 开始发送新能指标
      let FP = performance.getEntriesByName('first-paint')[0];
      let FCP = performance.getEntriesByName('first-contentful-paint')[0];
      // 统计每个阶段的时间
      tracker.send({
        kind: 'experience',
        type: 'paint',
        firstPaint: FP.startTime,
        firstContentPaint: FCP.startTime,
        firstMeaningPaint: FMP.startTime,
        largestContentPaint: LCP.startTime,
      })
    },3000)
  })
}