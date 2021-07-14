// const HTTP = require('http');

// HTTP.createServer((req, res) => {
//   console.log(1)
// })

/** child_process API */
/** exec */

// 通过回调的方式
// var exec = require('child_process').exec
// exec('ls', (err, stdout, stderr) => {
//   if(err){
//     console.log('stderr', stderr)
//   }
//   console.log('stdout', stdout)
// })
// // 通过流的方式接收结果，类似文件读取

// var ls = exec('ls');
// ls.stdout.on('data', (data) => {
//   console.log('data', data)
// })
// ls.stderr.on('data', (err)=> {
//   console.log('err', err)
// })

/** execSync  是exec的同步版本 */
const { exec, execFile, execSync, spawn, fock } = require('child-proess');

