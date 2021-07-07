class AsyncPlugin {
  apply(compiler) {
    // compiler.hooks
    compiler.hooks.emit.tapAsync("AsyncPlugin", (compliation, cb) => {
      setTimeout(() => {
        console.log('文件发射成功，等一下')
      }, 1000)
    });
  }
}

module.exports = AsyncPlugin;