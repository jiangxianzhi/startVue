<template>
    <div>
        <h2>
            {{ string1 }}
        </h2>
        <button @click="changeString">Change String</button>
    </div>
</template>

<script>
export default{
    name:'changeString',
    data(){
        return {
            string1:'string'
        }
    },
    methods: {
        changeString() {
            if( this.string1 != 'new string'){
                this.string1 = 'new string'
            }else{
                this.string1 = 'string'
            }
           ;
        }
    }
}</script>
<style>
h2{
    color:brown
}</style>