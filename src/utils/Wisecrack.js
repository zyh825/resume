export default [
  `
   /*
    * Hello, 我是张煜航，上海名传有限公司的一个小前端
    * living coding is pretty cooooooooooooooooooooool!!!
    * 所以，我也要做一份，然后用三年（怎么可能啊） = =+
    * 不管怎样，让我们开始吧！
    */
        
   /* 首先先初始化一些全局的样式吧,所有元素加上过渡效果 */
    * {
      -webkit-transition: all 1s;
      transition: all 1s;
    }
    
    /* 然后给背景加个底色 */
    html {
      background: rgb(63, 82, 99);  
      color: #fff;                   
    }
     
    /* 接着调整一下视距，纵使是我这种样式白痴也要挑战一下 fashion 的感觉 */  
    html {
      -webkit-perspective: 1000px;
      perspective: 1000px;
    }
    `,
  `
    /* 这样看起来好多了， 接下来调整一下编辑框 */    
    pre:not(:empty) {      
      position: absolute;            
      border: 1px solid #ccc;     
      font-size: 14px;
      padding: 1em 1em 2em;      
      white-space: pre-wrap;
      outline: 0;
      overflow: auto;                                              
    }
    .style-editor {            
      max-height: 45vh;      
      border: 1px solid;
    }       
    /* 阴影总是最简单（才怪呢），最有效的提升逼格的方式 */
    pre {    
      width: 61vw; /* golden ratio */
      max-height: 45vh;
      margin: 1em;
      box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
    }
    pre:hover{
      box-shadow: 0px 0px 40px 5px rgba(255,255,255,0.4);
    }
  `,

  `
    /* 感觉少了什么，对了给样式加一些特效吧, 就用 monokai 主题吧，用 sublime 时经常用呢  */
    .style-editor {
      background: #233333;
    }
    .token.comment       { color: #75715e; font-style: italic; }
    .token.punctuation   { color: #f8f8f2 ; }
    .token.selector      { color: #f92672; }
    .token.key           { color: #66d9ef; }
    .token.value         { color: #ae81ff; }

    /* 加点 3D 效果吧， 没有 autoprefixer 总是很麻烦的说 */
    .style-editor {     
      -webkit-transform: translateX(56%);
      -webkit-transform-origin: right;
      max-height: 90vh;
    }         
    /* 哦对了，还得加上编辑模式 */
    .edit-mode:after {
      position: fixed;
      bottom: 0;
      right: 0;
      content: attr(data-mode);  
    }
    /* 再加个选中的效果呗 */
    .active .style-editor{
      -webkit-transform: translateX(56%) rotateY(0deg);      
    }
    .resume-editor {
      -webkit-transform: rotateY(70deg);
      -webkit-transform-origin: left;
    }
    .active .resume-editor{
     -webkit-transform: rotateY(0deg);
    }
    .style-editor {
      -webkit-transform: translateX(56%) rotateY(-70deg);      
    }
    
  `,
  `
    /* 再来一个用来放简历的框 */
    
    .resume-editor{        
      z-index: 2;
      max-height: 90vh;        
      background: #FFFFFF; 
      color: #222;
    }
  `
];