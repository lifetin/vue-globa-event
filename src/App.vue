<template>
<div id="app">
  <div class="msg">vue cli下全局共用的事件,在某一个页面中注册事件,其它全部页面都可以监听</div>
    <div class="item">

        <div class="box"><input type="text"  v-model="name" placeholder="输入事件名"></div>
            <div class="btn1" @click="my_add">添加自定义事件</div>
            <div class="btn1 bg" @click="my_emit">触发事件</div>
            <div class="btn1 bg2" @click="my_remove">移除事件</div>
        </div>
        <div class="list">
            <span v-for="(v,i) in list" :key="i">{{v}}</span>
        </div>
        <div class="log">
            <p v-for="(v,i) in log" :key="i">{{v}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            count: 0,
            name: '',
            list: [],
            log: [],
        }
    },
    methods: {
        my_add() {
            this.count++;
            this.list.push('事件名' + this.name + ',计数' + this.count);
            this.$Event.on(this.name, (rs) => {
                this.add_log('被触发事件' + this.name + '----' + rs.text);
            });
        },
        my_emit() {
            this.$Event.emit(this.name, { text: Math.random() });
        },
        my_remove() {
            this.$Event.off(this.name);
            this.add_log('移除事件' + this.name);
        },
        add_log(msg) {
            this.log.push(msg);
        }
    },
}
</script>

<style>
.msg{text-align: center;background: #ffc107;padding: 10px;}
.btn1 {
    width: 130px;
    height: 30px;
    margin: 5px;
    line-height: 30px;
    text-align: center;
    background: #ffeb3b;
    color: #333;
    cursor: pointer;
    border-radius: 4px;
}

.item {
    margin: 20px 0;
    height: 30px;
    border: 1px solid #eee;
    padding: 20px;
}

.item .btn1 {
    float: left;
}

.box {
    float: left;
}

.box input {
    height: 24px;
    line-height: 24px;
    margin-top: 5px;
    width: 200px;
}

.bg {
    background: #03a9f4;
    color: #fff;
}

.bg2 {
    background: #ff5722;
    color: #fff;
}

.list {
    border: 1px solid #eee;
    margin: 30px;
}

.list span {
    background: #ccc;
    margin-right: 30px;
}

.log {
    padding: 10px;
    background: #eee;
}
</style>
