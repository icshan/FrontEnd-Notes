# 行内块和行内元素文本对齐的问题
  会使用到 vertical-align: top|middle|bottom|像素
# 容器内的多行文本居中的方法
  1.将容器的 display 设置成table
  2.将容器内的文本的 display 设置成 table-cell （表格单元格属性）
  3.将容器内的文本的 vertical-align 设置成 middle
# 单行文本截断和显示省略号的三大件
  1.white-space: nowrap;     /* 不换行 */
  2.overfow: hidden;
  3.text-overflow: ellipsis; /* 影藏部分加省略号*/
# 多行文本省略号
  1.display: -webkit-box;
  2.-webkit-box-orient: vertical;
  3.-webkit-line-clamp: 3;
  4.overflow: hidden;
# 盒子居中的实现方案（内盒子居中在外盒子）
  1.外盒子固定宽高，内盒子继承外盒子100%，外盒子给个padding
# 盒子模型
  box-sizing: border-box | content-box
  兼容性
  -moz-box-sizing: border-box  /*firefox*/
  -webkit-box-sizing: border-box /* chrome safari*/
  -ms-box-sizing: border-box /*IE8以下浏览器*/
  -o-box-sizing: border-box /*presto opera*/