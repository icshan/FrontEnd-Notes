// 原地建堆
function buildHeap(items, heapSize){
  for(let i = Math.floor(heapSize/2); i >= 1; i--){
    heapify(items, heapSize, i);
  }
}
// 自上而下式堆化
function heapify(items, heapSize, i){
  while(true){
    let minIndex = i;
    if(i*2 <= heapSize && items[2*i] < item[i]){
      minIndex = 2*i
    }
    if(i*2+1 <= heapSize && item[2*i+1] < item[i]){
      minIndex = 2*i+1
    }
    if(minIndex === i) break;
    swap(items, i, minIndex);
    i = minIndex;
  }
}
// 交换
function swap(items, i, minIndex){
  let temp = item[i];
  item[i] = item[minIndex];
  item[minIndex]=  temp
}
let arr = [5,2,3,4,1]
buildHeap(arr, arr.length)