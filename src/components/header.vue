<template>
  <div>
    <div class="head-tab fix">
      <div class="search-input-group">
        <input @keydown="keydownsearch" class="search-input-text" v-model="keyword"  type="text" name="searchBook" placeholder="输入书名/作者/关键字">
        <a @click="searchbook" class="index-scroll-view">搜索</a>
      </div>
        <keep-alive>
      <listitem :Lists="ranklist"></listitem>
      </keep-alive>
    </div>

  </div>
</template>
<script>
  import {Toast} from 'mint-ui'
  import api from '../service/api'
  import util from '../util/util'
  import listitem from './listitem/listitem'
  export default {
    data() {
      return {
        keyword:'',
        ranklist:{}
      }
    },
    components:{
      'listitem':listitem,
    },
    watch:{
      '$route':function(){
        this.keyword='';
      }
    },
    methods:{
      keydownsearch(el){
        if(el.keyCode == 13){
          this.searchbook()
        }
      },
      searchbook(){
        if(this.keyword === ''){
          Toast({
            message:'请输入关键字',
            duration:2000
          })
          return;
        }
        api.getSearchResult({query:this.keyword}).then(res=>{
          res.data.books.forEach(book=>{
            book.cover = util.staticPath+book.cover;
          })
          this.ranklist = res.data.books
        })
      }
    },
    beforeRouteLeave(to,from,next){
      to.meta.keepAlive = true
      next()
    }
  }
</script>
<style lang="scss" type="text/css">
  .head-tab {
    background-color: #0086b3;
    padding: 0 60px;
    height: 44px;
    position: relative;
  }
    .search-input-group{
    float: left;
    margin-top: 10px;
  }
  .search-input-group input{
    height: 26px;
    padding-left: 4px;
    border-radius: 4px;
  }
  .search-input-group a{
    float: right;
    text-align: center;
    margin-left: 20px;
    width: 40px;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    border: 1px solid #469531;
    border-radius: 4px;
    background: antiquewhite;
    color: #000;
    padding: 0px 4px;
    background: #e7e1cd;
  }


</style>
