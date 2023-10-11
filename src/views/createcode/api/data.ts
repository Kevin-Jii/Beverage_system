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
      title:  '姓名',
      dataIndex: 'name',
      align:'center'
    },
    {
      title:  '昵称',
      dataIndex: 'nickename',
      align:'center'
    },
    {
      title:  '图片',
      dataIndex: 'image',
      slotName: 'image',
      align:'center'
    },
     {
       title:  '状态',
       dataIndex: 'status',
       slotName: 'status',
       align:'center'
     },
 
     {
       title:  '排序',
       dataIndex: 'weigh',
       align:'center'
     },
     {
       title:  '备注',
       dataIndex: 'des',
       align:'center'
     },
     {
      title:  '创建时间',
      dataIndex: 'createtime',
      slotName: 'createtime',
      align:'center'
    },
    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      align:"center"
    },
  ]);
