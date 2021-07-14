#! /usr/bin/env node
console.log('start')
// 1) 需要找到当前执行命令的路径  拿到webpack.config.js

let path = require('path');
let Compiler = require('../lib/Compiler');


// config 配置文件
let config = require(path.resolve('webpack.config.js'));

// 标识运行编译
let compiler = new Compiler(config);
compiler.hooks.entryOption.call()
compiler.run();


// 笔记 https://github.com/TigerHee/shareJS/blob/master/webpack4.md