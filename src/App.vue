

<template>


<div>hello world</div>
<router-link to="/egg">egg</router-link>
<div></div>
<router-link to="/apple">apple</router-link>
<div></div>
<router-link to ="/changeString">changeString</router-link>
<div></div>
<router-link v-for="item in items" :key="item.id" :to="`/${item.name}`">{{ items.name }}</router-link>
<router-view></router-view>
<router-view></router-view>

 
</template> 

<script>
import items from '../item.json'
export default{
    data(){
        return {
            items
        }
    }
}

</script>
