<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'
interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  //   cellClassName: 'custom-cell-class',
  columns: [
    {
      type: 'seq',
      width: 70,
      slots: {
        default: () => {
          return <el-button icon="plus"></el-button>
        }
      }
    },
    {
      field: 'name',
      title: 'Name',
      editRender: { autofocus: '.el-input__inner' },
      className: 'CELL',
      slots: {
        edit: ({ row }) => {
          return <el-input v-model={row.name} placeholder="请输入" />
        }
      }
    },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    {
      id: 10001,
      name: 'Test11',
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: 'test abc'
    },
    {
      id: 10002,
      name: 'Test2',
      role: 'Test',
      sex: 'Women',
      age: 22,
      address: 'Guangzhou'
    }
  ]
})
</script>
<style lang="less" scoped>
/deep/.col--active {
  > .vxe-cell {
    height: 100%;
    width: 100%;
    padding: 0;
    > div {
      height: calc(100% - 1px);
    }
  }
}
</style>
