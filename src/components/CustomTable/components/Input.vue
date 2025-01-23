<script lang="tsx" setup>
import { defineExpose } from 'vue'

// 假设你已经以某种方式注册了 ElInput 组件

// 定义一个函数，该函数返回 JSX 渲染的 ElInput
const renderInput = () => {
  return <el-input placeholder="请输入内容" />
}

// 暴露给模板或父组件的插槽内容（这里不是直接在 slots 中使用 JSX，而是提供一个函数）
defineExpose({
  renderInput
})
</script>

<template>
  <slot name="custom-input" :render-input="renderInput" />
</template>
