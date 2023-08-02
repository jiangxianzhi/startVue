<template>
    <div>
        {{ title1 }}
        <buttion @click="$emit('bigger')"> big</buttion>
        <buttion @click="$emit('smaller')"> small</buttion>

    </div>
</template>

<script>
// 通过 标签的自定义属性传入，子组件用props接收
export default{
    props:["title1"]
}
</script>

<style>
div{
    color:rgb(37, 166, 241)
}</style>