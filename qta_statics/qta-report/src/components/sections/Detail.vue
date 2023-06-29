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
</template>