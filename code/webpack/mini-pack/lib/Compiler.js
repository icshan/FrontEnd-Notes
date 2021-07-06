let fs = require('fs');
let path = require('path');
let babylon = require('babylon');
let traverse = require('@babel/traverse').default;
let t = require('@babel/types');
let generator = require('@babel/generator').default;
let ejs = require('ejs');

// babylon 主要就是把源码  转换成ast
// @babel/traverse 遍历到对应的节点
// @babel/types 替换遍历节点
// @babel/generator 生成
class Compiler {
  constructor (config) {
    // entry output
    this.config = config;
    // 需要保存入口文件的路径
    this.entryId;
    // 需要保存所有的模块依赖
    this.modules = {};

    this.entry = config.entry; // 入口文件
    // 工作路径
    this.root = process.cwd();
  }
  getSource(modulePath){
    return fs.readFileSync(modulePath, 'utf8');
  }
  buildModule(modulePath, isEntry){
    
    // 拿到模块的内容
    let source = this.getSource(modulePath);
    // 获取模块id: modulePath = modulePath - this.root
    let moduleName = './' + path.relative(this.root, modulePath);
    if(isEntry) this.entryId = moduleName; // 保存入口名字
    // 解析源码,需要把source源码进行改造，并返回一个依赖列表
    let { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName)); // path.dirname(moduleName) ==> ./src
    // 把相对路径和模块中的内容 对应起来
    this.modules[moduleName] = sourceCode;

    dependencies.length && dependencies.forEach(dep => {
      // 递归所有依赖   父模块的所有依赖
      this.buildModule(path.join(this.root, dep), false);
    })
  }
  parse(source, parentPath){  // AST 解析语法树
    let ast = babylon.parse(source);
    let dependencies = []; // 依赖数组
    traverse(ast, {
      CallExpression(p){
        let node = p.node; // 拿到对应的节点
        if(node.callee.name == 'require'){
          node.callee.name = '__webpack_require__';
          let moduleName = node.arguments[0].value; // 取到的就是模块的引用名
          moduleName = moduleName + (path.extname(moduleName) ? '' : '.js'); // ./a.js
          moduleName = './' + path.join(parentPath, moduleName); // ./src/a.js
          dependencies.push(moduleName);
          node.arguments = [t.stringLiteral(moduleName)]
        }
      }
    })
    let sourceCode = generator(ast).code;


    return {
      sourceCode,
      dependencies
    }
  }
  emitFile(){ // 输出文件
    // 用数据 渲染我们的模板
    // 拿到输出到哪个目录下
    let main = path.join(this.config.output.path, this.config.output.filename);
    // 拿到模板字符串
    let templateEjsStr = this.getSource(path.join(__dirname, 'main.ejs'));
    let code = ejs.render(templateEjsStr, {
      entryId : this.entryId,
      modules: this.modules
    });
    this.assets = {};
    // 资源中 路径对应的代码
    this.assets[main] = code;

    fs.writeFileSync(main,  this.assets[main]);
  }
  run(){
    // 执行 并且创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true);
    console.log('entryId',this.entryId)
    console.log('modules',this.modules);

    // 发射一个文件  打包后的文件
    this.emitFile();
  }
}

module.exports = Compiler