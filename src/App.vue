<template>
  <!-- <div>hello world</div>
<router-link to="/egg">egg</router-link>
<div></div>
<router-link to="/apple">apple</router-link>
<div></div>
<router-link to ="/changeString">changeString</router-link>
<div></div> -->
  <!-- <router-link v-for="item in items" :key="item.id" :to="`/${item.name}`">{{ items.name }}</router-link> -->
  <!-- <router-view></router-view>
  <ShowItems /> -->
  <!-- 
<ShowItems v-for="item in items" :key="item.id" :title="item.name"/> -->
  <!-- <div :id="divId">{{ msg }}</div>
  <h1 v-if="judgeAwsome">this is awsome</h1> -->
  <!-- 输入多个函数，用分号隔开，这里变成了表达式，运行函数而不是传入函数名 -->
  <!-- <button v-on:click="changeAwsome();increment()">按键</button>
  
  <h2>{{ numberAdd }}</h2> -->



<!-- v-model -->
<!-- input、textarea默认绑定value，checkbox radio默认绑定 布尔 -->
 <!-- <input v-model="message1" :placeholder="message2"> 
 <h1>{{ message1 }}</h1> -->
 <!-- label元素主要用来和input关联，增大了input勾选范围 -->
 <!-- <label for="input001">这个是input001</label>
 <input type="checkbox" id="input001"> -->



 <!-- 绑定多个value到数组 -->
 <!-- <div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label> -->

 <!-- 绑定一个value到数组，关键在于data return中的类型 -->
 <!-- <div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label> -->
<!-- 绑定select options -->
<!-- <div>Selected:{{ selected }}</div>
<select name="" id="" v-model="selected">
    <option disabled value="true">choose a option</option>
<option value="a">a</option>
<option value="b">b</option>
<option value="c">c</option>
<option value="d">d</option> -->

<!-- 
</select> -->


<!-- 绑定select options ,但是options用v-for-->
<!-- <div></div>
<select name="" id="" >
    <option v-for="option in options" :key="option.value" :value="option.value">
    {{ option.text }}
  </option>
  
</select> -->


<!-- .lazy使用 -->
<!-- <h1>{{ msg1 }}</h1>
<input type="text" v-model.lazy="msg1"> -->

<!-- .number,输入转换成数字 -->
<!-- <h1>{{ msg2 }}</h1>
<input type="text" v-model.number="msg2"> -->
<!-- .trim,出去输入的两端空格 -->
<!-- <h1>{{ msg3 }}</h1>
<input type="text" v-model.trim="msg3"> -->
<!-- <hookedFunction></hookedFunction> -->
<div>

</div>
<!-- <watchUsage></watchUsage> -->
<propTitle v-for="item in items" :key="item.id" :title ="item.name"></propTitle>

</template>

<script>
import items from '../item.json'
import ChangeString from './components/changeString.vue'
import ShowItems from './components/showItems.vue'
// vue组件生命周期
import hookedFunction from './components/hookedFunction.vue'
import watchUsage from './components/watchUsage.vue'
import propTitle from './components/propTitle.vue'

export default {
  
  data() {
    return {
      items,
      msg: 'abc',
      divId: 'example1',
      judgeAwsome: true,
      numberAdd: 1,
      message2:'红颜如霜',
      message1:"",
      checkedNames:[],
      picked:'',
      selected:'',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      msg1:'',
      msg2:'',
      msg3:'msg3'
    }
  },
  components: { ShowItems, hookedFunction,
        ChangeString,watchUsage,propTitle },
  methods: {
    changeAwsome() {
      if (this.judgeAwsome) {
        this.judgeAwsome = false
        return
      }
      this.judgeAwsome = true
    },
    increment(){
        this.numberAdd++;
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
