<template>
    <div class="heads">
      <a @click="$router.go(-1)" class="iconfont icon-houtui-shi" ></a>
      <h2 class="head-title">书籍详情</h2>
    </div>
</template>

<script>
  import '../../assets/icons/iconfont.css'
    export default {
        name: "heads",
      data(){
          return{
          }
      },
    }
</script>

<style lang="scss" scoped>
.heads{
  width: 100%;
  height: 40px;
  background: #24c9ff;
  display: flex;
  h2{
    line-height: 40px;
    margin-left: 15px;
    color: #fff;
  }
  a{
    font-size: 30px;
    margin-left: 10px;
    line-height: 40px;
    color: #fff;

  }

}
</style>
