class Test {

}
const test = new Test()



_instanceOf(test, Test)
/**
 *
 *
 * @param {*} target
 * @param {*} type
 */
function _instanceOf(target, type) {
  target = target.__proto__;
  type = type.prototype;

  while(true){
    if(target === null) return false;
    if(target === type) return true;

    target = target.__proto__;
  }
}