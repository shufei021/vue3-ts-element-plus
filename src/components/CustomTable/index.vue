<template>
    <div>
        <vxe-grid show-footer v-bind="getProp('config.gridOptions')" :footer-data="footerData" ref="vxeGridRef" draggable></vxe-grid>
    </div>
</template>
<script lang="tsx" setup>
import { ref, onMounted } from 'vue'

import { defineEmits, defineProps } from 'vue'
import { pluckDeep } from './utils/index'
// 定义组件名称
defineOptions({ name: 'CustomTable' })

// 触发实例 add + plus -
const emit = defineEmits(['add', 'plus', 'corner'])

// 使用 defineProps 来定义接收的 props
const props = defineProps({
    config: {
        type: Object,
        default: () => ({})
    }
})

// 定义 vxeGridRef，用于获取 vxe-grid 实例
const vxeGridRef: any = ref(null)

// 获取传过去的属性辅助方法
const getProp = (path: string) => pluckDeep(path)(props)

// 序号列表默认配置
const getSeqColumn = () => {
    const { show, label, width, model = 'index', ...reset } = getProp('config.seqConfig')
    const isSeq = model === 'index'
    return {
        field: 'seq',
        type: 'html',
        width: isSeq ? width || 60 : 70,
        // className: 'custom-class11', // 个别列的自定义类名
        slots: {
            header: ({ column }) => {
                return show
                    ? label || [
                          <span class="corner" onClick={() => emit('corner', column)}>
                              <svg t="1728890918848" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4369" width="16" height="16">
                                  <path
                                      d="M992.46 399.92c-52.2-11.55-97.2-44.55-124.12-90.97-26.9-45.71-33.07-100.81-16.95-151.39 2.76-9.12-0.18-19.01-7.46-25.1-47.91-41.58-103.11-73.82-162.77-95.06a24.39 24.39 0 0 0-25.77 6.14c-37.13 40.03-89.34 62.44-143.78 61.72-53.29 0.32-104.35-21.52-141.07-60.35-6.77-8.61-18.39-11.66-28.48-7.5-59.73 21.4-114.94 53.88-162.77 95.74-7.28 6.09-10.22 15.98-7.46 25.1 15.92 50.37 9.75 105.18-16.95 150.71-26.93 46.44-71.96 79.43-124.18 90.97-9.34 2.04-16.56 9.51-18.31 18.96a487.436 487.436 0 0 0 0 188.08c1.75 9.45 8.97 16.92 18.31 18.96 52.08 11.39 97.06 44.12 124.12 90.29a186.643 186.643 0 0 1 16.95 151.39c-2.76 9.11 0.18 19 7.46 25.09A508.63 508.63 0 0 0 342 987.77h8.14a24.32 24.32 0 0 0 17.63-7.5c36.84-38.97 87.97-61.04 141.44-61.04 53.48 0 104.6 22.07 141.44 61.04 6.98 9.55 19.87 12.75 30.52 7.5 60.58-20.7 116.72-52.73 165.48-94.38 7.29-6.09 10.22-15.98 7.46-25.09-17.14-50.4-11.95-105.77 14.24-152.07 27.06-46.17 72.04-78.89 124.12-90.29 9.34-2.03 16.56-9.5 18.31-18.96a485.097 485.097 0 0 0 0-188.08c-1.92-9.39-9.07-16.79-18.32-18.98z m-45.44 180.5c-56.81 16.21-105.32 53.6-135.64 104.54-28.84 50.59-37.11 110.43-23.06 167a440.066 440.066 0 0 1-118.69 67.85c-42.01-42.26-98.62-66.56-158.02-67.85-59.32 1.71-115.79 25.95-158.02 67.85-42.84-16.26-82.88-39.16-118.69-67.85 13.57-56.6 4.54-116.27-25.09-166.32-29.73-50.81-77.49-88.41-133.68-105.23a413.656 413.656 0 0 1 0-135.7c56.81-16.2 105.32-53.59 135.64-104.54 28.82-50.67 37.03-110.48 23.06-167.08a439.234 439.234 0 0 1 118.69-67.85c43.17 39.68 99.53 61.71 158.02 61.78 58.56 0.26 115.03-21.82 158.02-61.78 42.85 16.27 82.89 39.19 118.69 67.92-13.46 56.54-4.71 116.11 24.41 166.33 30.33 50.95 78.84 88.33 135.65 104.54 7.46 44.93 7.46 90.78 0 135.7l-1.36 0.68h0.07z m0 0"
                                      fill="currentColor"
                                      p-id="4370"
                                  ></path>
                                  <path
                                      d="M511.54 308.95c-112.31 0-203.46 91.17-203.46 203.63 0.12 54.13 21.63 106 59.79 144.18 38.16 38.19 89.84 59.57 143.67 59.44 112.45 0 203.53-91.17 203.53-203.63-0.02-54.07-21.48-105.9-59.61-144.03-38.23-38.2-89.95-59.62-143.85-59.6h-0.07z m0 339.4c-74.87 0-135.64-60.83-135.64-135.77 0-75.01 60.77-135.71 135.64-135.71 74.94 0 135.65 60.7 135.65 135.71 0 36-14.24 70.51-39.68 96.02-25.48 25.47-59.96 39.77-95.9 39.75h-0.07z m0 0"
                                      fill="currentColor"
                                      p-id="4371"
                                  ></path>
                              </svg>
                          </span>
                      ]
                    : []
            },
            default: ({ $rowIndex }) => {
                return isSeq ? (
                    <div style="text-align:center">{$rowIndex + 1}</div>
                ) : (
                    <div class="row-action">
                        <span
                            class="row-action-btn"
                            onClick={() => {
                                emit('plus', $rowIndex)
                            }}
                        ></span>
                        <span
                            class="row-action-btn add"
                            onClick={() => {
                                emit('add', $rowIndex)
                            }}
                        ></span>
                    </div>
                )
            }
        },
        ...reset
    }
}

// 获取表格列配置
const getColumns = () => {
    return getProp('config.getColumns')()
}

// 获取表格数据
const getTableData = () => {
    return getProp('config.loadData')()
}

// 单元格过滤渲染
// const cellFilterRender = (field) => {
//     return {
//         name: 'filterDropdown',
//         config: {
//             props: getProp('config.filterDropdownConfig')?.()?.[field]
//         }
//     }
// }
// 列头配置
const columnsFormat = (columns) => {
    const { align, headerAlign, footerAlign } = getProp('config.align')

    return columns.map((item) => {
        if (align?.center?.includes(item.field)) item.align = 'center'
        if (align?.left?.includes(item.field)) item.align = 'left'
        if (align?.right?.includes(item.field)) item.align = 'right'
        if (headerAlign?.center?.includes(item.field)) item.headerAlign = 'center'
        if (headerAlign?.left?.includes(item.field)) item.headerAlign = 'left'
        if (headerAlign?.right?.includes(item.field)) item.headerAlign = 'right'
        if (footerAlign?.center?.includes(item.field)) item.footerAlign = 'center'
        if (footerAlign?.left?.includes(item.field)) item.footerAlign = 'left'
        if (footerAlign?.right?.includes(item.field)) item.footerAlign = 'right'
        // item.formatter = ['formatDate', 2, true]
        // 处理表体筛选项
        // if (getProp('config.filterDropdownConfig')?.()?.[item.field]) {
        //     item.filterRender = cellFilterRender(item.field)
        // }
        // const titlePrefix = getProp('config.toolTipMap')?.()?.[item.field]
        // if (titlePrefix) {
        //     item.headerClassName = 'title-prefix--' + item.field
        //     item.titlePrefix = titlePrefix
        // }
        return item
    })
}
const footerData = ref([{ seq: '合计', age: '282' }])
onMounted(() => {
    //
    if (vxeGridRef?.value && vxeGridRef?.value.loadColumn) {
        const tableColumns = getColumns()
        const seqColumn = getSeqColumn()
        const columns = [seqColumn, ...columnsFormat(tableColumns)]
        vxeGridRef.value.loadColumn(columns)
        const tableData = getTableData()
        vxeGridRef.value.reloadData(tableData)
    }
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
/deep/.row-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    width: 54px;
    .row-action-btn {
        width: 22px;
        height: 22px;
        padding: 0;
        font-size: 14px;
        border-radius: 2px;
        color: #595959;
        border: 1px solid #bec4ca;
        position: relative;
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 10px;
            height: 1px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 2px;
            background-color: #595959;
        }
        &:hover {
            border-color: #1447ff;
            transition: all 0.3s;
        }
    }
    .add {
        &::after {
            content: '';
            position: absolute;
            display: block;
            width: 1px;
            height: 10px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 2px;
            background-color: #595959;
        }
    }
}
.custom-class {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
/deep/.corner {
    color: #515151;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    cursor: pointer;
    &:hover {
        color: #1447ff;
    }
}
</style>
