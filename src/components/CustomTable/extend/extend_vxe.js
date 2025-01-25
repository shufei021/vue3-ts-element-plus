
import XEUtils from 'xe-utils'

// 全局对象
import { VxeUI } from 'vxe-table'

import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

// 全局设置
VxeUI.setConfig({
    emptyRender: { name: 'NoData' },
    // 对组件内置的提示语进行国际化翻译
    i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})



VxeUI.interceptor.add('event.clearFilter', (params, event) => {
    console.log(params, event)
    // 比如点击了某个组件的弹出层面板之后，此时被激活单元格不应该被自动关闭，通过返回 false 可以阻止默认的行为。
    if (params.column?.filterRender?.name === 'filterDropdown') {
        // 如果是使用的 filterDropdown，禁止默认操作
        if (params.column.filterRender?.config?.close !== 'auto') {
            let flag = true
            const activedClassList = [
                'ant-modal-wrap',
                ' filter-ignore-clear',
                'dropdown-box',
                'd-mix-tree-select-dropdown-box',
                'ant-calendar-picker-container'
            ]
            const getNode = (node) => {
                if (node.classList) {
                    activedClassList.forEach((name) => {
                        if (node.classList && node.classList.contains(name)) {
                            flag = false
                        }
                    })
                }

                if (flag && node.parentNode) {
                    getNode(node.parentNode)
                }
            }
            getNode(params.$event.target)
            if (params.column && params.column.params) {
                if (params.column.params.clearFilter) {
                    flag = params.column.params.clearFilter(params, flag)
                }
            }
            return flag
        }
    }
})

// cell 单元格值格式化自定义方法
VxeUI.formats.mixin({
    // formatDate({ cellValue }, format = 'YYYY-MM-DD HH:mm') {
    //     console.log('%c [ cellValue ]-56', 'font-size:13px; background:pink; color:#bf2c9f;', cellValue)
    //     return '111'
    // },
    // formatAmount({ cellValue = '' }, digits = 2, symbol = false, priceShowAuth = true, priceCol = false) {

    // },
    // formatTime({ cellValue }, opt = {}) {
    //     // 如果没有值或者值是 0，都返回无数据

    // }
})
// 创建一个简单的输入框筛选
VxeUI.renderer.add('FilterDropdown', {
    // 筛选模板
    renderFilter(h, renderOpts, params) {
        console.log(params)
        return 'aaa'
    },
    showFilterFooter: false
})