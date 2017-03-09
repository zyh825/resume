export default [
  `
  /**
   * Hello, 我是张煜航，上海名传有限公司的一个小前端
   * living coding is pretty cooooooooooooooooooooool!!!
   * 好吧，我只是一个跟风狗
   **/ 
   /* 
    * 不管怎样，让我们开始吧！
    * 首先给所有元素加上过渡效果 
    */
    * {
      -webkit-transition: all 1s;
      transition: all 1s;
    }
    /* 给背景加个底色 */
    html {
      background: rgb(63, 82, 99);
    }
    /* 给编辑框加一些特效 */
    
    .comment       { color: #857F6B; font-style: italic; }
    .punctuation   { color: #FFFFFF; }
    .selector      { color: #E69F0F; }
    .key           { color: #64D5EA; }
    .value         { color: #BE84F2; }
 
    
    pre:not(:empty) {
      overflow: auto;
      background: rgb(48, 48, 48);
      border: 1px solid #ccc;     
      width: 49%;
      font-size: 14px;
      padding: 10px 10px 20px;
      box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
      white-space: pre-wrap;
      outline: 0;
    }
    
    pre:hover{
      box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
    }
  
     #style-editor {
      padding: .5em;
      border: 1px solid;
      margin: .5em;
      overflow: auto;
      width: 49vw; 
      height: 94.5vh;
      position: absolute;           
      -webkit-transform: translateX(98.5%) rotateY(-10deg);
      -webkit-transform-origin: right;
    }
  

    html{
      -webkit-perspective: 1000px;
      perspective: 1000px;
    }
    /* 不知道以上对代码框的修改你是否喜欢呢？ */
    /* 接下来我给自己准备一个编辑器，用来存放我的简历内容 */
    #resume-editor{
      position: absolute;  
      z-index: 2;
      width: 49vw; 
      height: 94.5vh;
      padding: .5em; 
      margin: .5em;
      border: 1px solid;
      background: white; 
      color: #222;
      overflow: auto;
      -webkit-transform: rotateY(10deg);
      -webkit-transform-origin: left;
    }
    /* 好了，我开始写简历了 */
  `,
  `
    #resume-editor {
      width: 75vw;
      -webkit-transform: rotateY(0);
    }
  `
];