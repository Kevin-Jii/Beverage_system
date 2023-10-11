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
       title:  '名称',
       dataIndex: 'name',
       align:'center'
     },
     {
       title:  '描述',
       dataIndex: 'des',
       align:'center'
     },
     {
       title:  '状态',
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
