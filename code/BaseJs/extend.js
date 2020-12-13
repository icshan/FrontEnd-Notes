 /**
   * 父级：Programmer 子集： FrontEnd、BackEnd
   * output: 
   * 我是一名前端程序员，我的工作是用计算机编写应用程序，我每天工作10小时，我的工作需要用到HTML，CSS，JavaScript
   * 我是一名后端程序员，我的工作是用计算机编写应用程序，我每天工作10小时，我的工作需要用到Node，Java，SQL。
  */
 ;(function(_this){
  var Buffer = function(){}
  _this.inherit = function( Target, Origin){
    Buffer.prototype = Origin.prototype;
    Target.prototype = new Buffer();
    Target.constructor = Target;
    Target.super_class = Origin;
  }
})(window);
function Programmer () {
  
}
Programmer.prototype = {
  name: '程序员',
  job : '计算机编写应用程序',
  jobTime: 10,
  say: function(){
    console.log(`我是一个${this.childName}${this.name},我的工作是用${this.job},我每天工作${this.jobTime}小时，我的工作需要用到${this.skill}`)
  }
}
function FrontEnd () {
  this.childName = '前端';
  this.skill = 'HTML,CSS,JavaScript';
}

function BackEnd () {
  this.childName = '后端';
  this.skill = 'Node，Java，SQL';
}

inherit(FrontEnd, Programmer);
inherit(BackEnd, Programmer);

var front = new FrontEnd()
var end = new BackEnd()
front.say()
end.say()