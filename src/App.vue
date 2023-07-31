<template>
  <!-- <div>hello world</div>
<router-link to="/egg">egg</router-link>
<div></div>
<router-link to="/apple">apple</router-link>
<div></div>
<router-link to ="/changeString">changeString</router-link>
<div></div> -->
  <!-- <router-link v-for="item in items" :key="item.id" :to="`/${item.name}`">{{ items.name }}</router-link> -->
  <router-view></router-view>
  <ShowItems />
  <!-- 
<ShowItems v-for="item in items" :key="item.id" :title="item.name"/> -->
  <div :id="divId">{{ msg }}</div>
  <h1 v-if="judgeAwsome">this is awsome</h1>
  <button v-on:click="changeAwsome">changeAwsome</button>
</template>

<script>
import items from '../item.json'
import ChangeString from './components/changeString.vue'
import ShowItems from './components/showItems.vue'

export default {
  data() {
    return {
      items,
      msg: 'abc',
      divId: 'example1',
      judgeAwsome: true
    }
  },
  components: { ShowItems },
  methods: {
    changeAwsome() {
      if (this.judgeAwsome) {
        this.judgeAwsome = false
        return
      }
      this.judgeAwsome = true
    }
  },
  mounted() {
    console.log('a')
  }
}
</script>

<style>
#example1 {
  background-color: rgb(109, 109, 223);
}
</style>
