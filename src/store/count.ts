
import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {

    actions: {
        increment(value:number){
            if(this.sum < 10){
                this.sum += value;
            }
            console.log("increment被调用了",this);
            
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            address: "xi'an"
        }
    },
    getters:{
        tenTimesSum:state => state.sum * 10,
        upperAddress():string{
            return this.address.toUpperCase();
        }
    }
})