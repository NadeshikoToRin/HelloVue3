
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue';

// export const useCountStore = defineStore('count', {

//     actions: {
//         increment(value:number){
//             if(this.sum < 10){
//                 this.sum += value;
//             }
//             console.log("increment被调用了",this);
            
//         }
//     },
//     // 真正存储数据的地方
//     state() {
//         return {
//             sum: 6,
//             address: "xi'an"
//         }
//     },
//     getters:{
//         tenTimesSum:state => state.sum * 10,
//         upperAddress():string{
//             return this.address.toUpperCase();
//         }
//     }
// })

export const useCountStore = defineStore('count', ()=>{
    let sum = ref(1);
    let address = ref("xi'an");
    let tenTimesSum = computed({
        get(){
            return sum.value * 10;
        },
        set(value){

        }
    })
    let upperAddress = computed({
        get(){
            return address.value.toUpperCase();
        },
        set(value){

        }
    })

    function increment(num: number){
        sum.value += num;
    }
    return {sum ,address,tenTimesSum,upperAddress,increment}
})