<template>
    <div class="read">
      <h3 @click="getBookChapter">{{content.title}}</h3>
      <a @click="$router.go(-1)" class="iconfont icon-houtui-shi" ></a>
      <p>{{content.cpContent}}</p>
    </div>
</template>

<script>
  import '../assets/icons/iconfont.css'
  import api from '../service/api'
    export default {

      data(){
        return{
          content:{},
        }
      },
      created(){
        this.getBookChapter();
      },
      computed: {},
      methods:{
        //内容(id)
        getBookChapter(){
          api.getBookChapter(this.$route.params.link).then(res =>{
            this.content = res.data.chapter
            console.log(this.content)
          })
        }


      },
        name: "bookreading"
    }

</script>

<style lang="scss" scoped>
  .read{
    background: #ffe990;
    padding: 15px 10px;
    h3{
      font-size: 20px;
      padding-bottom: 6px;
      border-bottom: 1px solid #969896;
    }
    a{
      position: absolute;
      top: 15px;
      right: 8px;
      font-size: 22px;
      color: #969896;
    }
    p{
      margin-top: 15px;
      font-size: 18px;
      font-weight: 400;
      text-indent: 35px;
      line-height: 30px;
    }
  }
</style>
