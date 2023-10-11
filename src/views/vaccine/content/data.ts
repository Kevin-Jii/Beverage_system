import { computed } from 'vue';
import type { TableColumnData } from '@arco-design/web-vue/es/table/interface';
export const columns = computed<TableColumnData[]>(() => [
     {
       title:  'ID',
       dataIndex: 'id',
       width: 76,
       align:'center'
     },
     {
       title:  '分类ID',
       dataIndex: 'catename',
       align:'center'
     },
     {
       title:  '描述',
       dataIndex: 'description',
       align:'center'
     },
     {
       title:  '缩略图',
       dataIndex: 'thumb',
       align:'center'
     },
     {
       title:  '单位',
       dataIndex: 'unit',
       align:'center'
     },
     {
       title:  '排序',
       dataIndex: 'weigh',
       align:'center'
     },
     {
       title:  '创建时间',
       dataIndex: 'createtime',
       slotName: 'createtime',
       align:'center'
     },
     {
       title:  '状态:0=隐藏;1=正常',
       dataIndex: 'status',
       slotName: 'status',
       align:'center'
     },
    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      align:"center"
    },
  ]);
