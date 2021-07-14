let loaderUtil = require("loader-utils");
let validateOptions = require("schema-utils");
let fs = require("fs");

function loader(source) {
  // 启用缓存
  this.cacheable && this.cacheable();
  
  let options = loaderUtil.getOptions(this);
  let cb = this.async();
  let schema = {
    type: "object",
    properties: {
      text: {
        type: "string",
      },
      filename: {
        type: "string",
      },
    },
  };
  // 校验
  validateOptions(schema, options, "author-loader");
  if (options.filename) {
    this.addDependency(options.filename);
    fs.readFile(options.filename, "utf8", function (err, data) {
      cb && cb(err, `/**${data}**/${source}`);
    });
  } else {
    cb(null, `/**${options.text}**/${source}`);
  }
}
module.exports = loader;
