<template>
  <div class="body-catalog">
    <div class="Navigation">
      <a @click="$router.go(-1)" class="iconfont icon-houtui-shi" ></a>
      <h3>目录</h3>
    </div>
    <div class="catalog" @click="getBookSources">
      <a href="javascript:" v-for="(list,index) in chapter.chapters" :key="index">
        <router-link :to="{'name':'reader',params:{link:list.link}}">
        <p>{{list.title}}</p>
          </router-link>
      </a>
    </div>
  </div>
</template>

<script>
  import '../assets/icons/iconfont.css'
  import Head from '../components/HeadNavigation/Head'
  import api from '../service/api'
  import {mapMutations} from 'vuex'
    export default {
    // props :['chapter'],

    data(){
      return{
        booksource:{},
        chapter:{},
        link:[],
      }
    },
      created(){
        this.getChapters();
      },
    methods:{
      ...mapMutations(['SetCategoryList']),
      //书源
      getChapters(){
        api.getChapters(this.$route.params.bookid).then(res =>{
          this.booksource = res.data[0];
          console.log(this.booksource._id)
          this.getBookSources()
        })
      },
      //章节
      getBookSources(){
        api.getBookSources(this.booksource._id).then(res =>{
            this.chapter = res.data
          console.log(this.chapter)

        })
      },


    },
      components:{
        'm-head':Head,
      },
        name: "catalog"
    }
</script>

<style lang="scss" scoped>
  .body-catalog {
    .Navigation{
      width: 100%;
      background: #666666;
      height: 40px;
      h3{
        font-size: 18px;
        float: left;
        line-height: 40px;
        margin-left: 10px;
        color: #fff;
        font-weight: 700;
      }
      a{
        float: right;
        margin-right: 10px;
        line-height: 40px;
        font-size: 20px;
      }
    }
    background: #e7e1cd;
    .catalog {
      margin-top: 10px;
      p {
        padding: 0px 12px 0px 12px;
        font-size: 16px;
        line-height: 30px;
        color: #000;
        border-bottom: 1px solid #969896;
        margin-top: 6px;
      }
    }
  }
</style>
