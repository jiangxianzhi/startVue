<template>
    <div>
      <h1>{{ componentName }}</h1>
      
    </div>
  </template>
  
  <script>
  export default {
 
    name: 'MyComponent',
    computed:{
username(){
    return this.$route.params.username
}
    },
    data() {
      return {
        componentName: 'egg'
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: rgb(71, 226, 97);
  }
  </style>