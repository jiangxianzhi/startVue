<template>
   <div>
    {{ msg }}
   </div>
   <button @click="changeMsg">改变msg</button>
  </template>
  
  <script>
 
  
  export default {
    data() {
      return {
        msg:"this is a hook area"
      
      }
    },
    methods:{
        changeMsg(){
            this.msg = "this are hookarea"
        }
    },
   beforeCreate(){
    console.log('this is beforeCreated');
   },
   created(){
    console.log('this is  created');
   },
   beforeMount(){
    console.log('this is beforeMounted')
   },
    mounted(){
      console.log('this is mounted');
    },
    beforeUnmount(){
        console.log('this is beforeUnmount')
    },
    unmounted(){
        console.log('thi is unmounted')
    },
    updated(){
        console.log('this is updated')
    },
    beforeUpdate(){
        console.log('this is beforeUpdate')
    }
  }
  </script>
  
  <style scoped>
  div {
    color: rgb(71, 226, 97);
  }
  </style>
  