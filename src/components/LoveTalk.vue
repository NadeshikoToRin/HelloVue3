<template>
    <div class="talk">
<button @click="getLoveTalk">获得一句土味情话</button>
<ul>
    <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
</ul>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import axios from "axios"
import {nanoid} from 'nanoid'

import { useTalkStore } from '@/store/loveTalk';

const talkStore = useTalkStore();


async function getLoveTalk(){
    talkStore.getTalk();
}

</script>

<style scoped>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>