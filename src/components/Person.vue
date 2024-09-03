<template>
    <div class="person">
        <h2>这是一俩{{car.brand}}车，价值{{car.price}}万</h2>
        <button @click="changePrice">修改价格</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

    let car = reactive({
        brand:'bmw',
        price:100
    });
    function changePrice(){
        car.price += 10;
    }
    
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>