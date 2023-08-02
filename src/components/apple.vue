<template>
    <div>
        <h2>
            {{ string1 }}
        </h2>
    </div>
</template>

<script>
export default{
    name:'AppleTemplate',
    // data中的数据双向绑定
    data(){
        return {
            string1:'apple'
        }
    }

}</script>
<style>
h2{
    color:brown
}</style>