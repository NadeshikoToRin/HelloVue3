//引入pinia
import { defineStore } from "pinia";

import axios from "axios"
import { nanoid } from 'nanoid'

//创建stroe并暴露
export const useTalkStore = defineStore('talk', {

    actions: {
        async getTalk() {
            let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = { id: nanoid(), title }
            this.talkList.unshift(obj);
        }
    },

    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})