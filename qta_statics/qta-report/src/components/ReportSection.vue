<template>
  <div class="section">
    <div class="sub_title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props:{title:String},
    setup(){
      return {};
    }
  }
</script>

<style scoped>
  .section{
    padding-top: 20px;
  }
  .sub_title {
    width: 100%;
    text-align: left;
    color:black;
    font-weight: bold;
  }
</style>
