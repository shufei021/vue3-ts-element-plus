<template>
  <CustomTable :config="config"></CustomTable>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
const config = reactive({
  seqConfig: {
    show: true,
    label: '序号1',
    width: 60,
    align: 'center'
  }
})
</script>

<style lang="less">
body {
  background-color: #ccc;
}
</style>
