
// interface seqType  {
//     type?: string, // 类型
//     width?: number,
//     slots?:object,
// }

// 序号配置函数
// export function seq():seqType {
//     return {
//         type: 'seq',
//         width: 70,
//         slots: {
//             default: ({ rowIndex }) => {
//                 const is = true
//                 return is ? (
//                     <div style="text-align:center">{rowIndex + 1}</div>
//                 ) : (
//                     <div class="row-action">
//                         <span class="row-action-btn"></span>
//                         <span class="row-action-btn add"></span>
//                     </div>
//                 )
//             },
//             title() {
//                 return '序号11119'
//             }
//         }
//     }
// }