<template>
  <div class="susopen">
    <div>
        <span  v-for="(iten,index) in shop" :key="index" >{{iten}}</span>
    </div>
    <div></div>
  </div>
</template>

<script>
import { getSecond } from '@/api/navraptop'

export default {
 props:{
    
    item:String,
 },
 data() {
    return {
        shop:[],
    }
 },
methods:{
    getSecond(item){
        getSecond(item).then((data)=>{
this.shop=data.data
        })
    }
},
created(){
    this.getSecond(this.item)
}
}
</script>

<style lang="scss" scoped>
.susopen{
    position: absolute;
    width: 100%;
    height: 300px;
    left: 0;
}
</style>