<template>
    <div class="person">
        <h2>这是一俩{{car.brand}}车，价值{{car.price}}万</h2>
        <button @click="changePrice">修改价格</button>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeCar">修改车</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

    let car = reactive({
        brand:'bmw',
        price:100
    });
    let {brand,price} = toRefs(car);
    function changePrice(){
        car.price += 10;
    }
    function changeBrand(){
        brand.value = 'BYD'
    }
    function changeCar(){
        Object.assign(car,{brand:'奔驰',price:50})
    }
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
.person button{
    margin: 10px;
}
</style>