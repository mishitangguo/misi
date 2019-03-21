<template>
  <div>
    <m-head ></m-head>
    <div class="Title fix">
      <div class="Title-head fix">
        <img :src="Imgurl">
          <ul>
          <li><h3>{{book.title}}</h3></li>
          <li><span>作者：{{book.author}}</span></li>
          <li ><span>字数：{{Wordnumber}}</span></li>
          <li><span>收藏人数：{{Collectionnumber}}</span></li>
          <li><span>最后更新：{{book.updated}}</span></li>
          </ul>
      </div>
      <div class="Title-btn fix">
        <a href="javascript:" v-for="(list,index) in this.chapter.chapters" :key="index"v-if="index<1">
          <router-link :to="{'name':'reader',params:{link:list.link}}">
        <button>开始阅读</button>
        </router-link>
        </a>
            <router-link :to="'/Catalog/'+book._id">
            <button>目录</button>
            </router-link>
      </div>
      <div class="Title-introduce fix">
        <p>{{book.longIntro}}</p>
      </div>

      <div class="Title-Last-update fix">
        <p>最后更新:</p>
        <span>{{book.lastChapter}}</span>
          <li v-for="(tga,key) in book.tags" :key="key">{{tga}}</li>
      </div>
    </div>
  </div>
</template>

<script>
  import Head from '../components/HeadNavigation/Head'
  import util from "../util/util";
  import api from "../service/api";
    export default {
    data(){
      return{
        book:{},
        booksource:{},
        chapter:{},
        link:{},
      }
    },
      created(){
        this.getbookInfo();
      },

      computed:{
        Imgurl (){
          if(!this.book.cover && typeof(this.book.cover) === 'undefined')
            return
          return util.staticPath + this.book.cover;
        },
        Wordnumber(){
          if(this.book.wordCount-10000>0){
            return parseInt(this.book.wordCount/10000)+'万'
          }else{
            return this.book.wordCount
          }
        },
        Collectionnumber(){
          if(this.book.latelyFollower-10000>0){
            return parseInt(this.book.latelyFollower/10000)+'万'
          }else{
            return this.book.latelyFollower
          }
        },
        },


      methods: {
        getbookInfo() {
          api.getBookInfo(this.$route.params.bookid).then(res => {
            this.book = res.data
            console.log(this.book)
            this.getChapters()
            this.getBookSources()
          })

        },
        //书源
        getChapters(){
          api.getChapters(this.book._id).then(res =>{
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

        name: "bookinfo",
      components:{
          'm-head':Head
      }
    }
</script>

<style lang="scss" scoped>
  .Title{
    width: 100%;
    .Title-head{
      margin-top: 4px;
      img{
        width: 86px;
        height: 113px;
        margin-left: 10px;
        background: #0086b3;
        float: left;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 5px 10px #555;
      }
      ul{
        float: left;
        margin-left: 15px;
        height: 86px;
        li{
         font-size: 12px;
          margin-top: 9px;
          h3{
            margin-bottom: 10px;
            margin-top: -4px;
            font-size: 14px;
          }
        }
      }
    }
    .Title-btn{
    margin-left: 15px;
      margin-top: 35px;
      a{
      button{
        display: inline-block;
        margin-right: 20px;
        width: 40%;
        height: 30px;
        background: #24c9ff;
        text-align: center;
        line-height: 30px;
        font-size: 13px;
        font-weight: 600;
        border-radius: 4px;
        float: left;
        border: none;
        color: #F2F6FC;
      }
      }
    }
    .Title-introduce{
      padding: 0px 15px;
      margin-top: 30px;
      margin-bottom: 12px;
      p{
       font-size: 16px;
        font-weight: 400;
        line-height: 28px;
      }
    }
    .Title-Last-update{
      border-top: 1px solid #999999;
      p{
        margin-top: 20px;
        margin-left: 15px;
        font-size: 16px;
        margin-bottom: 8px;
      }
      span{
        display: inline-block;
        width: 100%;
        font-size: 14px;
        margin-left: 17px;
        color: #63a35c;
      }
      li {
        margin-left: 11px;
        margin-top: 20px;
        float: left;
        height: 25px;
        line-height: 25px;
        padding: 0px 6px 0px 6px;
        background: #ff9815;
        border: 1px solid  #F2F6FC;
        border-radius: 4px;
        color: #F2F6FC;
      }
    }
  }
</style>
