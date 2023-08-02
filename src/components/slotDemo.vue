<template>
    <div>
        hello this is slot demo
    </div>
   
    <slot></slot>
    <slot></slot>
    <slot></slot>
    <slot></slot>
    <!-- App.vue 中<slotDemo> context</slotDemo>,被插入其中 -->
    <!-- 写多个，就插多个一样的，那么有什么骚操作吗？
    woc,直接插入多个vue组件 -->
    <div>
        hello this is slot demo2
        <globelComponnets/>
        <!-- 组件tree上面，随便用全局组件，因为在main.js中注册了 -->
    </div>
</template>
<script>
export default{

}
</script>