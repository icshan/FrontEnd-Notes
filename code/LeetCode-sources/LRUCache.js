// LRU 目前已知使用HasMap 和 双向链表结合王城

// 先创建一个 Node 类
// Node 的 key 记录 HashMap 中存储其的值

function Node(key, val){
  this.key = key;
  this.val = val;
  // 两个指针一个指向前，一个指向后
  this.pre = null;
  this.next = null;
} 

// 运用上面的 Node 类构建一个双向链表结构
function DoubleLinkedList(){
  // 初始的双向链表，有一个 dummy head 和 tail
  var head = new Node(null, null);
  var tail = new Node(null, null);
  // head 的 next 指向 tail
  // tail 的 pre 指向 head
  head.next = tail;
  tail.pre = head;
  this.head = head;
  this.tail = tail;

}

// 双向链表 添加 node 在 head 后面
DoubleLinkedList.prototype.appendAfterHead = function(node){
  var head = this.head;
  // 插入新 node, 维护好双链表
  var old = head.next;
  head.next = node;
  node.pre = head;
  node.next = old;
  old.pre = node;
}

// 双向链表 删除特定 node
DoubleLinkedList.prototype.remove = function(node){
  node.pre.next = node.next;
  node.next.pre = node.pre;
}

// 双向链表 删除 tail 前面的节点
// 并返回这个节点
DoubleLinkedList.prototype.removeBeforeTail = function(){
  var node = this.tail.pre;
  this.remove(node);
  return node;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // 保存 capacity
  this.capacity = capacity;

  // 初始 size 
  this.size = 0;

  // LRUCache 类里面有一个map 和一个 双向链表
  this.map = new Map();
  this.linkedList = new DoubleLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  var map = this.map;
  var linkedList =  this.linkedList;
  // 如果 map 中没有，则返回 -1
  if(!map.has(key)) return -1;

  // 如果 map 中有，则返回响应的 val
  // 并且要吧访问的节点放在双向链表的头部,代表最近使用，越靠近tail的代表最不常使用
  var getedNode = map.get(key);
  var retval = getedNode.val;
  // 删除原有的getedNode，并创建一个新的节点放在head后面
  linkedList.remove(getedNode);
  var node = new Node(key, retVal);
  linkedList.appendAfterHead(node);
  // 同时跟新map
  map.set(key, node);
  // 返回值
  return retval;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  var map = this.map;
  var linkedList =  this.linkedList;
  var size = this.size;
  // 如果 key 在map 中存在的话
  if(map.has(key)){
    // 更新值，并把他放在 heade 后面，作为最近使用
    var getedNode = map.get(key);
    linkedList.remove(getedNode);
    var node = new Node(key, value);
    linkedList.appendAfterHead(node);
    map.set(key, value)
  } else if(this.size < this.capacity){
    // 此时 Cache 还没装满
    // 直接添加
    var node = new Node(key, value);
    linkedList.appendAfterHead(node);
    map.set(key, value)
    // 增加一个节点 size 要 加一
    size++;
  }else{
    // 此时 Cache 已满
    // 双向链表需要现移除最不常用的 node
    var nodeBeforeTail = linkedList.removeBeforeTail();
    // map 中 也需要删除
    map.delete(nodeBeforeTail.key);
    var node = new Node(key, value);
    linkedList.appendAfterHead(node);
    map.set(key, value)
  }
};

// https://leetcode-cn.com/problems/lru-cache/solution/146-lruhuan-cun-ji-zhi-by-alexer-660/

// // 链表节点
// class Node{
//   constructor(key,val){
//       this.key = key;
//       this.val = val;
//   }
// }
// // 双链表
// class DoubleList{
//   // 初始化头、尾节点、链表最大容量
//   constructor(){
//       this.head = new Node(0,0);
//       this.tail = new Node(0,0);
//       this.size = 0;
//       this.head.next = this.tail;
//       this.tail.prev = this.head;
//   }
//   // 在链表头部添加节点
//   addFirst(node){
//       node.next = this.head.next;
//       node.prev = this.head;
//       this.head.next.prev = node;
//       this.head.next = node;
//       this.size++;
//   }
//   // 删除链表中存在的node节点
//   remove(node){
//       node.prev.next = node.next;
//       node.next.prev = node.prev;
//       this.size--;
//   }
//   // 删除链表中最后一个节点，并返回该节点
//   removeLast(){
//       // 链表为空
//       if(this.tail.prev == this.head){
//           return null;
//       }
//       let last = this.tail.prev;
//       this.remove(last);
//       return last;
//   }
// }
// /**
// * @param {number} capacity
// */
// var LRUCache = function(capacity) {
//   this.cap = capacity;
//   this.map = new Map();
//   this.cache = new DoubleList();
// };

// /** 
// * @param {number} key
// * @return {number}
// */
// LRUCache.prototype.get = function(key) {
//   let map = this.map;
//   if(!map.has(key)){
//       return -1;
//   }
//   let val = map.get(key).val;
//   // 最近访问数据置前
//   this.put(key,val);
//   return val;
// };

// /** 
// * @param {number} key 
// * @param {number} value
// * @return {void}
// */
// LRUCache.prototype.put = function(key, value) {
//   let cache = this.cache;
//   let map = this.map;
//   let node = new Node(key,value);
//   if(map.has(key)){
//       // 删除旧的节点，新的插到头部
//       cache.remove(map.get(key));
//   }else{
//       if(this.cap == cache.size){
//           // 删除最后一个
//           let last = cache.removeLast();
//           map.delete(last.key);
//       }
//   }
//   // 新增头部
//   cache.addFirst(node);
//   // 更新 map 映射
//   map.set(key,node);
// };

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
