var MinStack = function (){
  this.stack = [];
  this.min_stack = [];
}
MinStack.prototype.push = function(val){
  this.stack.push(val);
  if(val <= this.min_stack[this.min_stack.length - 1] || this.min_stack.length === 0){
    this.min_stack.push(val);
  }
} 
MinStack.prototype.top = function(){
  return this.stack[this.stack.length-1];
}
MinStack.prototype.pop = function(){
  let out = this.stack.pop();
  if(this.min_stack[this.min_stack.length -1] === out){
    this.min_stack.pop();
  }
}
MinStack.prototype.getMin = function(){
  return this.min_stack[this.min_stack.length -1];
}
