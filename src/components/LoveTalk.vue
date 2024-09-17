<template>
    <div class="talk">
<button @click="getLoveTalk">获得一句土味情话</button>
<ul>
    <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
</ul>
    </div>
</template>

<script setup lang="ts">


import { useTalkStore } from '@/store/loveTalk';

import { storeToRefs } from 'pinia';



const talkStore = useTalkStore();

let {talkList} = storeToRefs(talkStore);

//调用talkStore中的getTalk action获取数据
async function getLoveTalk(){
    talkStore.getTalk();
}

//$subscribe方法类似watch方法
talkStore.$subscribe((mutate,state)=>{
    console.log("数据发生变化",mutate,state);
    //key(talkList) : value
    //Json.stringify讲对象数据转换为string
    localStorage.setItem('talkList',JSON.stringify(state.talkList))
    
})

</script>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>