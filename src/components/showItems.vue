<template>
  <div>hi</div>
  <div>{{ itemsExist }}</div>
</template>

<script>
// 显示json对象的 组件
import items from '../../item.json'

export default {
  data() {
    return {
      items
    }
  },
  methods: {},
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
