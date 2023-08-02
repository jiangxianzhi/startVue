<template>
  <div>hi</div>
  <div>{{ itemsExist }}</div>
</template>

<script>
// 显示json被引入，变成了js对象，同一个json文件可以被多个不同组件引入
import items from '../../item.json'

export default {
  data() {
    return {
      items
    }
  },
  methods: {},
  // 计算属性
  computed: {
    itemsExist(){
      return this.items.length>0?"yes":"no";
    }
  },
  mounted(){
    console.log(this.items);
  }
}
</script>

<style scoped>
div {
  color: rgb(71, 226, 97);
}
</style>
