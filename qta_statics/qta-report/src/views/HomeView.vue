<script setup>
import ReportSection from "@/components/ReportSection.vue"
</script>

<template>
  <div class="title">运行报告</div>
  <ReportSection :title="'测试运行环境:'">
    <a-table :columns='
      [{title:"主机名", data_index:"hostname", key:"hostname"},
       {title:"操作系统", data_index:"os", key:"os"},
       {title:"QTAF版本",data_index:"qtaf_version", key:"qtaf_version"},
       {title:"Python版本",data_index:"python_version", key:"python_version"},
       ]'/>
  </ReportSection>
  <ReportSection :title="'测试运行时间:'">
    <a-table :columns='
      [{title:"开始时间", data_index:"start_time", key:"start_time"},
       {title:"结束时间", data_index:"end_time", key:"end_time"},
       {title:"执行时间", data_index:"total_time", key:"qtaf_version"},
       ]'/>
  </ReportSection>
  <ReportSection :title="'测试用例汇总:'">
    <a-table :columns='
      [{title:"用例总数", data_index:"start_time", key:"start_time"},
       {title:"通过用例数", data_index:"end_time", key:"end_time"},
       {title:"失败用例数", data_index:"total_time", key:"qtaf_version"},
       {title:"测试通过率", data_index:"total_time", key:"qtaf_version"},
       ]'/>
  </ReportSection>
  <ReportSection :title="'测试用例详情:'">
    <div>
      <div class="filter">
        <span>运行状态：</span>
        <a-select 
          style="width: 300px"
          mode="multiple" 
          :max-tag-count="3" 
          :v-bind="select"
          >
          <a-select-option value="All">全选</a-select-option>
          <a-select-option value="Running">运行中</a-select-option>
          <a-select-option value="Passed">通过</a-select-option>
          <a-select-option value="Skipped">被过滤</a-select-option>
          <a-select-option value="RunFailure">执行失败</a-select-option>
          <a-select-option value="LoadFailure">加载失败</a-select-option>
        </a-select>
      </div>
    </div>
  </ReportSection>
</template>

<style scoped>
  .filter{
    float: right;
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