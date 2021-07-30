/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const H = new MinHeap();
  const dummyHead = new ListNode(0);
  let p = dummyHead;
  lists.forEach(list => {
      list && H.insert(list);
  });
  while (H.size() > 0) {
      const list = H.pop();
      p.next = list;
      p = p.next;
      list.next && H.insert(list.next);
      list.next = null;
  }
  return dummyHead.next;
};



class MinHeap {
  constructor() {
      this.heap = [];
  }
  swap(index1, index2) {
      const tmp = this.heap[index1];
      this.heap[index1] = this.heap[index2];
      this.heap[index2] = tmp;
  }
  getParentIndex(index) {
      return (index - 1) >> 1;
  }
  getLeftChildIndex(index) {
      return 2 * index + 1;
  }
  getRightChildIndex(index) {
      return 2 * index + 2;
  }
  shiftUp(index) {
      if (index == 0) {
          return;
      }
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] && this.heap[index].val < this.heap[parentIndex].val) {
          this.swap(index, parentIndex);
          this.shiftUp(parentIndex);
      }
  }
  shiftDown(index) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      if (this.heap[leftChildIndex] && this.heap[index].val > this.heap[leftChildIndex].val) {
          this.swap(index, leftChildIndex);
          this.shiftDown(leftChildIndex);
      }
      if (this.heap[rightChildIndex] && this.heap[index].val > this.heap[rightChildIndex].val) {
          this.swap(index, rightChildIndex);
          this.shiftDown(rightChildIndex);
      }
  }
  insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
  }
  pop() {
      // 如果堆中只剩一个节点了，那么也就直接弹出，不调整了
      if (this.size() === 1) { return this.heap.pop(); }
      const top = this.heap[0];
      /** ---调整堆--- **/
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      /** ---调整堆--- **/
      return top;
  }
  peak() {
      return this.heap[0];
  }
  size() {
      return this.heap.length;
  }
}
