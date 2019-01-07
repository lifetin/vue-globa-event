# vue-globa-event

> vue全局事件
    
## Build Setup

``` bash
#安装
npm install vue-globa-event -S

#引用
在main.js中引用并加载

import vueGlobaEvent from "vue-globa-event";
Vue.use(vueGlobaEvent);


#使用方法
在A页面中发布消息
this.$Event.emit('login_success',{a:'111',b:'222',c:3333});

在B页面或C,D,E,F.... 中监听事件

this.$Event.on('login_success', function (rs) {
    console.log(rs);
});

每个路由中的页面都会独立收到消息,互不干扰




```

