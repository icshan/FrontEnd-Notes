function ListNode (val) {
  this.val = val;
  this.next = null;
}

/**
 * 
 * @param {*} heade 
 * 题目：将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 解题步骤：
 * 1. n1 = p.next
 * 2. n2 = p.next.next
 * 3. p.next = n2
 * 4. n1.next = n2.next 
 * 5. n2.next = n1
 * 6. p = n1
 */
var swapPairs = function ( heade ) {

  let dummy = new ListNode();
  dummy.next = head;
  let current = dummy;
  while( current.next !== null && current.next.next !== null){
    let n1 = current.next;
    let n2 = current.next.next;
    current.next = n2;
    n1.next = n2.next;
    n2.next = n1;
    current = n1;
  }

  return dummy.next;
}