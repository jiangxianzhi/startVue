<template>
    <div>
        {{ title1 }}
        <buttion @click="$emit('bigger')"> big</buttion>
        <buttion @click=add2()> small</buttion>
        <!--  <buttion @click.once=add2()> small</buttion> -->
        <!-- 只能触发一次 -->
        <buttion @click="$emit('something',1,2,3,4,5)"> </buttion>
        <!-- 向父级组件传递参数，（1，2，3，4，5）=>{ } -->

    </div>
</template>

<script>
// 通过 标签的自定义属性传入，子组件用props接收
export default{
    props:["title1"],
    methods:{
        add2(){
            this.$emit('smaller')
        }
    }
}
</script>

<style>
div{
    color:rgb(37, 166, 241)
}</style>