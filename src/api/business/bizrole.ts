import { defHttp } from '@/utils/http';
//类型
export interface LoginData {
  username: string;
  password: string;
}
enum Api {
    getList = '/business/bizrole/get_list',
    getParent = '/business/bizrole/get_parent',
    getMenuList = '/business/bizrole/get_menuList',
    save = '/business/bizrole/save',
    upStatus = '/business/bizrole/upStatus',
    del = '/business/bizrole/del',
}

//列表数据
export function getList(params: object) {
  return defHttp.get({ url: Api.getList, params:params }, { errorMessageMode: 'none' });
}
//选择数据
export function getParent() {
  return defHttp.get({ url: Api.getParent }, { errorMessageMode: 'none' });
}
//获取菜单数据
export function getMenuList(params: object) {
  return defHttp.get({ url: Api.getMenuList, params:params}, { errorMessageMode: 'none' });
}
//提交数据
export function save(params: object) {
    return defHttp.post({ url: Api.save, params:params}, { errorMessageMode: 'message' });
}
//更新状态
export function upStatus(params: object) {
    return defHttp.post({ url: Api.upStatus, params:params}, { errorMessageMode: 'message' });
}
//删除数据
export function del(params: object) {
    return defHttp.delete({ url: Api.del, params:params}, { errorMessageMode: 'message' });
}
/**数据类型 */
export interface RuleItem {
    id:number,
    pid:number,
    locale: string;
    title: string;
  }