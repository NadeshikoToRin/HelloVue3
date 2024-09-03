<template>
    <div class="person">
        <h2></h2>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

    let car = reactive({
        brand:'bmw',
        price:100
    })
</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>