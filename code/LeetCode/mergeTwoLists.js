function ListNode (val) {
  this.val = val;
  this.next = null;
}
/**
 * 
 * @param {*} l1 
 * @param {*} l2
 * 合并两个有序链表
 *  
 */
var mergeTwoLists = function (l1, l2) {
  // 1. 创建一个新的链表
  let curr = new ListNode();
  // 2. 创建衣蛾dummy链表头
  let dummy = curr;
  // 3. 遍历两个链表，标比较大小，然后将小的塞入新的链表curr 
  while(l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      curr.next = l1;
      l1 = l1.next;
    }else{
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  // 4. 边界情况，当l1 全部执行完，l2 还剩下的话，放在curr链表后面，因为都比前面的大。l2也一样
  if(l1 !== null) curr.next = l1;
  if(l2 !== null) curr.next = l2;

  return dummy.next
}