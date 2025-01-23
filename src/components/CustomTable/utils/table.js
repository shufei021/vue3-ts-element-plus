// 序号配置项  自定义序号的方法，返回处理后的值
export const seqConfig = function () {
    return {
        seqMethod({ rowIndex }) {
            return rowIndex + 1
        }
    }
}