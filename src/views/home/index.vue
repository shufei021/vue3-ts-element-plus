<template>
    <div class="container">
        <CustomTable :config="config" @add="add" @plus="plus" @corner="corner"></CustomTable>
    </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'
// 定义每行数据的属性类型 即row类型
interface RowVO {
    id: number
    name: string
    role: string
    sex: string
    age: number
    address: string
}
const gridOptions = reactive<VxeGridProps>({
    border: true,
    rowConfig: { useKey: 'id' },
    columnConfig: { useKey: 'rowid' },
    editConfig: {
        trigger: 'click', // 单元格编辑状态触发条件 点击
        mode: 'cell' // 编辑模式
    },
    cellClassName: 'custom-cell-class' // 全局 cell 添加类名
})
const config = reactive({
    // 序号头设置
    seqConfig: {
        show: true,
        label: '',
        width: 60,
        align: 'center',
        model: 'index' // 序号模式 index: 从1开始累加 indexFixed: 从0开始累加 fixed: 固定列
    },
    // 对齐方式
    align: {
        // 全局对齐方式 包含 表头、表体、表尾
        align: {
            left: [], // 全局对齐方式
            center: [], // 全局对齐方式
            right: [] // 全局对齐方式
        },
        // 表头对齐方式
        headerAlign: {
            left: [], // 左对齐的表头
            center: [], // 居中对齐的表头
            right: [] // 右对齐的表头
        },
        // 表尾对齐方式
        footerAlign: {
            left: [], // 左对齐的表尾
            center: [], // 居中对齐的表尾
            right: [] // 右对齐的表尾
        }
    },
    // 单元格过滤渲染
    filterDropdownConfig: {},
    columnKeysConfig: {
        listPriceColKeys: [],
        listMoneyColKeys: [], // 金额列keys，配置后该列显示数据自动补零及￥符号
        sortColKeys: [],
        resizeColKeys: []
    },
    toolTipMap: {
        // 表头过滤组件配置 toolTipConfig
        name: {
            title: '平台预估订单佣金',
            content: '按客户订单金额计算的平台预估所得佣金'
        },
        sex: {
            title: '平台实获佣金',
            content: '平台收货入库后根据供应商发货金额计算实得佣金（发货金额不含税）'
        },
        age: {
            title: '供应商应结算金额',
            content: '平台收货入库后计算供应商应结算金额'
        }
    },
    gridOptions,
    getColumns: () => {
        return [
            {
                title: '姓名',
                field: 'name',
                width: 100,
                align: 'center',

                titlePrefix: {
                    content: '金额列keys，配置后该列显示数据自动补零及￥符号',
                    useHTML: false,
                    icon: 'vxe-icon--question'
                }
            },
            {
                title: '性别',
                field: 'sex',
                width: 100,
                align: 'center'
            },
            {
                title: '年龄',
                field: 'age',
                width: 100,
                align: 'center',
                sortable: true,
                sortBy: ({ row }) => row.age,
                filterRender: true
            },
            {
                title: '地址',
                field: 'address',
                width: 100,
                showOverflow: true,
                align: 'center'
            }
        ]
    },
    loadData: (): RowVO[] => {
        return [
            {
                id: 10001,
                name: '李四',
                role: 'Develop',
                sex: '♂',
                age: 28,
                address: '四川省成都市武侯区华府大道7717'
            },
            {
                id: 10002,
                name: '张三',
                role: 'Test',
                sex: '♂',
                age: 22,
                address: 'Guangzhou'
            },
            {
                id: 10003,
                name: '李雪',
                role: 'Test',
                sex: '♀',
                age: 29,
                address: 'Guangzhou'
            }
        ]
    }
})
function add() {
    console.log('add')
}
function plus() {
    console.log('plus')
}
function corner() {
    console.log('corner')
}
</script>

<style lang="less">
body {
    background-color: #ccc;
    position: relative;
}
.container {
    width: 80%;
    height: 400px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
