**行内块和行内元素文本对齐的问题**
  
```
vertical-align: top|middle|bottom|像素
```
**容器内的多行文本居中的方法**

1. 将容器的 display 设置成table
2. 将容器内的文本的 display 设置成 t able-cell （表格单元格属性）
3. 将容器内的文本的 vertical-align 设置成 middle

**单行文本截断和显示省略号的三大件**

```
 1. white-space: nowrap;     /* 不换行 */
 2. overfow: hidden;
 3. text-overflow: ellipsis; /* 影藏部分加省
```
**多行文本省略号**

```
1. display: -webkit-box;
2. -webkit-box-orient: vertical;
3. -webkit-line-clamp: 3;
4. overflow: hidden;
```
**盒子居中的实现方案（内盒子居中在外盒子）**

1. 外盒子固定宽高，内盒子继承外盒子100%，外盒子给个padding

**盒子模型**

```
box-sizing: border-box | content-box 
-moz-box-sizing: border-box  /*firefox*/
-webkit-box-sizing: border-box /* chrome safari*/
-ms-box-sizing: border-box /*IE8以下浏览器*/
-o-box-sizing: border-box /*presto opera*/
```

 **float 浮动**
 内联、内联块、hidden、float、 纯文本都能识别浮动位置
 除了 块级元素
 float以后就变成内联块元素了

 清除浮动最终的解决方案
 ```
 clearFix:after{
   content:'';
   display: block;
   clear: both;
 }
 ```

 **伪元素 after before**
一定要加 content:''


**BFC block fatmat contant**
  1. 绝具备BFC属性的有：
        Body元素、float属性、position:absolute|fixed属性、dispaly：inline-block、overflow
  2. 解决float浮动也能用BFC来解决，但是设置了导致BFC的属性以后，会影响布局，所以还是使用clearFix来解决清除浮动

  BFC解决的问题有：
    1. margin合并问题，两个block box A与B，A设置margin-bottom B设置margin-top   会消失一个margin
    ```
    .box1{
      width:100px;
      height:100px;
      margin-bottom:10px;
    }
    .box2{
      width: 100px;
      height: 100px;
      margin-top: 10px
    }
    <!-- 会消失一个margin -->
    ```
    2. margin塌陷问题，两个block A与B， b的margin-top不会在子元素身上生效，在A上生效，使用BFC能解决

    ```
    .box1{
      width: 200px;
      height: 200px;
      background: black;
    }
    .box2{
      width: 50px;
      height: 50px;
      margin: 0 auto;
      margin-top: 100px;
      background: orange;
    }
    ```
    3. float浮动元素覆盖的问题



		
