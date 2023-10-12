const domain = "http://localhost:8105";//您的域名//独立部署需要填写Go服务api接口域名(部署在Go目录下可以留空)
const localhost = "http://localhost:8105";//访问本地的域名和端口，如果您改变Go服务端口，请自行修改
window.globalConfig = {
  Main_url: `${domain}/`,//域名
  Root_url: `${domain}/business`,//Api服务器域名
  Upload_url: `${domain}/common`,//Api服务器域名
  Upload_url_dev: `${localhost}/common`,//Api服务器域名-开发环境
  Root_url_dev: `${localhost}/business`,//Api服务器域名-开发环境
  Root_wxurl_dev: `${localhost}`,//接口测试-微信小程序-开发环境
  Upinfile_url: `${domain}/business`,//业务专用上传附件
  Upinfile_url_dev: `${domain}/business`,//业务专用上传附件-开发环境
  AppTitle: "陌上开花酒水管理系统",
  AppVersion: "1.1.0",
  Company: "GoFly",
  Address: "中国·浙江",
  Team: "Kevin-Jinn开发",
  loginTitle: "陌上开花酒水管理系统",
  loginSubTitle: "酒水管理、员工信息录入、信息备注等",
  Copyright: "Kevin-Jinn提供技术支持",
  MaxSizeImage: 5,//最大上传图片大小,单位M
  MaxSizeVideo: 150//最大上传视频大小,单位M
};
