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
  <div></div>
  <!-- <watchUsage></watchUsage> -->
  <!-- <div :style="{fontSize:fontsizeOftitleComponent+'em'}">
  <propTitle @smaller="fontsizeOftitleComponent=fontsizeOftitleComponent-0.5" @bigger="fontsizeOftitleComponent=fontsizeOftitleComponent+1" v-for="item in items" :key="item.id" :title1 ="item.name"></propTitle>
</div> -->

  <!-- slot demo 插入像html在标签中插入 字 -->
  <!-- <slotDemo> 

</slotDemo> -->
<!-- 
  <div>{{ searchText }}</div>
  <VModelOnComponent v-model="searchText"></VModelOnComponent> -->

  <!-- 透传 -->
  <!-- <passAttributesVue class = "abc" id ="bcd"> </passAttributesVue> -->


  <!-- 插槽 -->
  <!-- <slotRender>
  
    <template v-slot>
      hello world
    </template>
    <template #[dynamicSlotName]>
      hello world2
    </template>
  </slotRender> -->


  <!-- inject and provide -->

  <ChildInjections></ChildInjections>

  <FundamentalResponsed></FundamentalResponsed>

  {{ x   }}
  {{ y }}
</template>

<script>
import items from '../item.json'
// 注册子组件1，只能在这个App.vue中用，其他地方用不了
import ChangeString from './components/fundamental/changeString.vue'
import ShowItems from './components/fundamental/showItems.vue'
// vue组件生命周期
import hookedFunction from './components/fundamental/hookedFunction.vue'
import watchUsage from './components/fundamental/watchUsage.vue'
import propTitle from './components/fundamental/propTitle.vue'
import slotDemo from './components/fundamental/slotDemo.vue'
import GlobelComponets1 from './components/globelComponents/globelComponets1.vue'
import VModelOnComponent from './components/fundamental/v-modelOnComponent.vue'
// 改变了vue文件的位置，那么引入都如何改变？
import passAttributesVue from './components/fundamental/passAttributes.vue'
import slotRender from './deepComponent/slotRender.vue'
import ChildInjections from './deepComponent/childInjections.vue'
import  FundamentalResponsed from './composable/fundamentalResponsed.vue'

// 组合式函数，看不懂，无状态逻辑，封装和复用有状态逻辑函数
import {useMouse} from './composable/composableFunction'


console.log(useMouse)

export default {
setup(){
  const {x,y} = useMouse();
  return {x,y}
}
  ,
  provide(){return{
    message5:'hello'
  }}
  ,
  data() {
    return {
      items,
      msg: 'abc',
      divId: 'example1',
      judgeAwsome: true,
      numberAdd: 1,
      message2: '红颜如霜',
      message1: '',
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      msg1: '',
      msg2: '',
      msg3: 'msg3',
      fontsizeOftitleComponent: 3,
      searchText: 'abc',
      slotMsg:"aoe",
      dynamicSlotName:"abv",
    
    
    }
  },
  watch: {
    searchText(n, o) {
      console.log(n)
      console.log(o)
    }
  },

  components: {
    ShowItems,
    hookedFunction,
    ChangeString,
    watchUsage,
    propTitle,
    slotDemo,
    GlobelComponets1,
    VModelOnComponent,
    passAttributesVue,
    slotRender,
    ChildInjections,
    FundamentalResponsed,

  },
  // 注册子组件2
  // 当没有被使用的时候，tree-shaking会把这些没有使用的，局部注册的components删除
  methods: {
    changeAwsome() {
      if (this.judgeAwsome) {
        this.judgeAwsome = false
        return
      }
      this.judgeAwsome = true
    },
    increment() {
      this.numberAdd++
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
