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
       title:  '分类',
       dataIndex: 'catename',
       align:'center'
     },
     {
       title:  '年龄',
       dataIndex: 'age',
       align:'center'
     },

     {
       title:  '姓名',
       dataIndex: 'name',
       align:'center'
     },
     {
       title:  '图片',
       dataIndex: 'image',
       slotName: 'image',
       align:'center'
     },
    {
      title: '操作',
      dataIndex: 'operations',
      slotName: 'operations',
      align:"center"
    },
  ]);
