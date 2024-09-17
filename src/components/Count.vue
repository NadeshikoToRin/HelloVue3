<template>
    <div class="count">
        <h2>当前求和为：{{sum }}</h2>
        <h3>当前位置：{{ address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">add</button>
        <button @click="minus">minus</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
//引入countStore
import { useCountStore } from '@/store/count';

//引入storeToRefs
import { storeToRefs } from 'pinia';

const countStore = useCountStore();

let {sum , address} = storeToRefs(countStore);

// let sum = countStore.sum
let n = ref(1);

function add(){
    //第一种修改方式
    // countStore.sum += n.value;

    //第二种修改方式,$patch 整体修改
    // countStore.$patch({
    //     sum:600,
    //     address:"lanzhou"
    // })

    //第三种,actions
    countStore.increment(n.value)


}
function minus(){
    countStore.sum -= n.value;
}

</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>