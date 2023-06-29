<script setup>
import ATable from "ant-design-vue/lib/table"
import ARadioGroup from "ant-design-vue/lib/radio/Group"

</script>

<template>
  <div class="title">运行报告</div>
  <div>
    <div class="sub_title">测试运行环境:</div>
    <a-table :columns='
      [{title:"主机名", data_index:"hostname", key:"hostname"},
       {title:"操作系统", data_index:"os", key:"os"},
       {title:"QTAF版本",data_index:"qtaf_version", key:"qtaf_version"},
       {title:"Python版本",data_index:"python_version", key:"python_version"},
       ]'/>
  </div>
  <div>
    <div class="sub_title">测试运行时间:</div>
    <a-table :columns='
      [{title:"开始时间", data_index:"start_time", key:"start_time"},
       {title:"结束时间", data_index:"end_time", key:"end_time"},
       {title:"执行时间", data_index:"total_time", key:"qtaf_version"},
       ]'/>
  </div>
    <div>
    <div class="sub_title">测试用例汇总:</div>
    <a-table :columns='
      [{title:"用例总数", data_index:"start_time", key:"start_time"},
       {title:"通过用例数", data_index:"end_time", key:"end_time"},
       {title:"失败用例数", data_index:"total_time", key:"qtaf_version"},
       {title:"测试通过率", data_index:"total_time", key:"qtaf_version"},
       ]'/>
  </div>
  <div>
    <div class="sub_title">测试用例详细信息:</div>

  </div>

</template>

<style scoped>
  a-table{
    height: 500px;
  }
  .title{
    width: 100%;
    color:black;
    font-weight: bold;
    text-align: center;
    font-size: 130%;
  }
  .sub_title {
    width: 100%;
    text-align: left;
    color:black;
    font-weight: bold;
  }
</style>