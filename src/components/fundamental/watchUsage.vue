<template>
    <div>
        <!-- watch监听 question 这个data属性， -->
     <p>Ask a yes/no question:
        <input type="text" v-model.lazy="question">
     </p>
     <p>{{ answer }}</p>
     <img :src="imgSrc" alt="">
      
    </div>
  </template>
  
  <script>
  export default {
 data(){
    return{
        question:'',
        answer:'Question should contain ?',
        imgSrc:''
    }
 },
 watch:{
    // 直接用被监听的data命名函数，改成question1不行。两个param
    //前面的是改成的，后面的没改的
    question(newQuestion,oldQuestion){
        // console.log("newQuestion is"+newQuestion);
        // console.log("oldQuestion is "+oldQuestion);
         if(newQuestion.includes('?')){
            this.getAnswer()
         }
    }
 },
 methods:{
    async getAnswer(){
        this.answer = 'retreiveing。。。'
        try{
            // 这个就发送了fetch https请求了？ await，async是什么
            // 目前看来就是发送了 请求然后返回了变成res
            const res = await fetch('https://yesno.wtf/api')
            console.log("resqonse is "+res);
          const res1 = (await res.json());
            this.answer = res1.answer
            this.imgSrc = res1.image
        }catch(error){
            this.answer = 'Error! Could not reach the API'+error
        }
    }
 }
    
  }
  </script>
  
  <style scoped>
 div {
    color: rgb(228, 224, 32);
  }
  </style>