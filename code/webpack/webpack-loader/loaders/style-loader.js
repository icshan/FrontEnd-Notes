function loader(source){
  let style = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `
  return style
}
// style-loader写了pitch,有返回后面的跳过，自己的写不会走
loader.pitch = function (remainingRequest) {  // 剩余的请求
  console.log(loaderUtils.stringifyRequest(this, '!!' + remainingRequest, 99999999))
  // 让style-loader 处理 less-loader 和css-loader拼接的结果
  // 得到 /Users/liuhuimin/work/webpack/loader/css-loader2.js!/Users/liuhuimin/work/webpack/loader/less-loader2.js!/Users/liuhuimin/work/webpack/src/index.less
  // 剩余的请求 less-loader!css-loader!./index.less
  // console.log(remainingRequest, 1223);
  // require返回的就是css-loader处理好的结果require('!!css-loader!less-loader!./index.less')
  let str = `
  let style = document.createElement('style')
  style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)})
  document.head.appendChild(style)
 `
  // stringifyRequest 绝对路径转相对路径
  return str
}

module.exprots = loader;