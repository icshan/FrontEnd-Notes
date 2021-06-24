/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(head === null) return null;

    let pSlow = head;
    let pFast = head;
    let isCycle = false;

    while(pFast.next !== null && pFast.next.next !== null){
      pSlow = pSlow.next;
      pFast = pFast.next.next;
      if(pSlow === pFast){
        isCycle = true;
        break;
      } 
    }

    if(!isCycle) return null;

    pFast = head;
    while(pSlow !== pFast){
      pFast = pFast.next;
      pSlow = pSlow.next;
    }
    return pFast;
};