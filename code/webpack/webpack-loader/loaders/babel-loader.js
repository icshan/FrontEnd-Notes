let babel = require("@babel/core");
let loaderUtil = require("loader-utils");

function loader(source) {
  let options = loaderUtil.getOptions(this);
  let cb = this.async();
  babel.transform(
    source,
    {
      ...options,
      sourceMaps: true,
      filename: this.resourcePath.split('/').pop(), // 文件名
    },
    function (err, result) {
      cb && cb(err, result.code, result.map); // 异步
    }
  );
}
module.exports = loader;
