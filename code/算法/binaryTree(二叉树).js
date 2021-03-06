/** 
 * 概述:
 * 二叉树中的节点最多只能有两个子节点：
 *  1.左侧子节点，
 *  2.右侧子节点。
 * 二叉树分两种节点：
 *  1.有子节点的节点叫作“内部节点”
 *  2.没有子节点的叫作“叶节点”
 * BST（二叉查找树）
 *  二叉查找树是一颗比较特殊的二叉树，树左侧的节点必须必右侧节点小。
 * 节点类：
 *  每个节点都要有一个元素（key），和左右指针(left、right)；
 * 二叉树类：
 *  需要一个跟节点（root）,需要一个插入节点方法（insert）
*/

// 节点类
class Node {
  constructor(key) {
  	//需要创建的元素
    this.key = key
    //左指针
    this.left = null
    //右指针
    this.right = null
  }
}
//二叉树类
class BinarySearchTree {
  constructor() {
  	// 跟节点
    this.root = null
  }
  //插入节点方法
  insert(key) {}
}