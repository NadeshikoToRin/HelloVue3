<template>
    <div class="news">
      <ul>
        <!-- 导航区 -->
        <li v-for="news in newsList" :key="news.id">
          <!-- 需求：点击按钮跳转新闻详情页面 -->
          <button @click="showNewsDetail(news)">点击查看详情</button>
          <RouterLink 
          :to="{
            name:'detail',
            query:news
            
          }"
          >
            {{ news.title }}
          </RouterLink>
        </li>
      </ul>

      <!-- 展示区 -->
       <div class="news-content">
       <RouterView></RouterView>
       </div>
    </div>
  </template>
  
  <script setup lang="ts" name="News">
    import {reactive} from 'vue'
    import { RouterView,RouterLink,useRouter} from 'vue-router';
    import  {type NewsInter } from '@/types';
    

    const newsList = reactive([
    {id:'asfdtrfay01',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'asfdtrfay02',title:'如何一夜暴富',content:'学IT'},
    {id:'asfdtrfay03',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'asfdtrfay04',title:'好消息！好消息！',content:'快过年了'}
  ])

  //获取router对象
  const router = useRouter();

  function showNewsDetail(news:NewsInter){
    router.push({
      name:'detail',
      query:{
        id:news.id,
        title:news.title,
        content:news.content
      }
    })
  }
  </script>
  
  <style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
  </style>