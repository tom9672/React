# React

构建界面的JavaScript库（数据->视图）

### 原生JS的问题： 
* 命令式编码比较繁琐。
* 用JavaScript直接操作DOM导致大量重绘重排。

### React的特点： 
* 采用组件化模式，声明式编码，提高开发效率和复用率。
* React Native中可以使用React语法进行移动端开发。（用JS移动端开发）
* 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互。（新增一个DOM的时候，不会重绘重排，通过新增虚拟DOM，再新增真实DOM）

### 学习React需要掌握的JS前置知识
* 判断this的指向
* class
* ES6语法规范
* npm包管理器
* 原型，原型链
* 数组常用方法
* 模块化

## [要点]
#### hello_react.html:
1. 引入react.development.js要在react-dom.development.js之前
2. 一定要些text/babel,才能包含jsx

#### jsx_rule.html:
1. jsx定义虚拟DOM不需要用引号
2. VDOM中使用js变量要加{}
3. 标签内不用class，要用className。因为ES6的class是关键字。
4. 内敛样式: style={{key:'value',key:'value'}}
5. 虚拟DOM必须只有一个根标签, 标签必须闭合
6. 标签首字母：   
      a. 若小写字母开头，则转化为html中同名元素。（若无同名元素则报错）  
      b. 若大写字母开头，React就去渲染对应组件。（若无则报错）  
