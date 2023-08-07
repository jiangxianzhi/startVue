<template>
    <div>
{{ count }}
<button @click="increment">add</button>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(0);
console.log("count is ",count);
function increment(){
    count.value++;
}

</script>