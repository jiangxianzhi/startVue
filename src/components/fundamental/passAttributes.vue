<template>
   <div>
    被透传了
    {{ $attrs }}
    <!-- 即使关闭了透传，$attrs对象还是有被传值的 -->
   </div>
    <!-- 如果子组件有多个模块，那么attrs会报错不会透传，除非显示绑定 -->
</template>

<script>
export default {
    inheritAttrs:false
    // 开、关闭透传
}
</script>