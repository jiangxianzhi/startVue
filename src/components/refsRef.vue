<template>
    <div>
        <h2 >
           hello to reference
           <input type="text" ref="inputItSelf">
           <!-- 把input这个dom元素，打到了vm.$refs.inputItSelf上 equal to document.getElementbyId('inputID') -->
        </h2>
    </div>
</template>

<script>
export default{
mounted(){
    this.$refs.inputItSelf.focus()
}

}</script>
<style>
h2{
    color:rgb(37, 166, 241)
}</style>